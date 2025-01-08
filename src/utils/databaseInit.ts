import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

export const initializeDatabase = async () => {
  try {
    // Check if the lessons table exists by attempting to select from it
    const { error: createTableError } = await supabase.from('lessons').select('*').limit(1);

    if (createTableError?.message?.includes('relation "public.lessons" does not exist')) {
      // Table doesn't exist, create it using raw SQL via RPC
      let sqlError = null;
      try {
        await supabase.from('lessons').select('*').limit(1);
      } catch {
        const result = await supabase.rpc('exec_sql', {
          sql_query: `
            CREATE TABLE IF NOT EXISTS public.lessons (
              id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
              title TEXT NOT NULL,
              category TEXT NOT NULL,
              description TEXT NOT NULL,
              skill_level TEXT NOT NULL,
              price TEXT NOT NULL,
              teacher_id UUID NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
            );
          `
        });
        sqlError = result.error;
      }

      if (sqlError) {
        console.error('Error creating table:', sqlError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to initialize the database. Please try again.",
        });
        return false;
      }

      // Create sample lessons to initialize the table
      const sampleLessons = [
        {
          title: 'Introduction to Spanish',
          category: 'languages',
          description: 'Learn the basics of Spanish language including greetings, numbers, and essential phrases.',
          skill_level: 'Beginner',
          price: 'Free',
          teacher_id: '00000000-0000-0000-0000-000000000000'
        },
        {
          title: 'Guitar for Beginners',
          category: 'music',
          description: 'Start your musical journey with basic guitar chords and strumming patterns.',
          skill_level: 'Beginner',
          price: 'Barter',
          teacher_id: '00000000-0000-0000-0000-000000000000'
        },
        {
          title: 'Advanced JavaScript Patterns',
          category: 'programming',
          description: 'Deep dive into advanced JavaScript concepts including closures, prototypes, and design patterns.',
          skill_level: 'Advanced',
          price: '0.001 ETH',
          teacher_id: '00000000-0000-0000-0000-000000000000'
        }
      ];

      const { error: insertError } = await supabase
        .from('lessons')
        .insert(sampleLessons);

      if (insertError) {
        console.error('Error inserting sample lessons:', insertError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to initialize sample data. Please try again.",
        });
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Error in database initialization:', error);
    toast({
      variant: "destructive",
      title: "Database Error",
      description: "Failed to initialize the database. Please try again.",
    });
    return false;
  }
};