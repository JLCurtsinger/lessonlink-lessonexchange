import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

export const initializeDatabase = async () => {
  try {
    // Create the lessons table using raw SQL
    const { error: createTableError } = await supabase.from('lessons').select('*').limit(1);

    if (createTableError?.message?.includes('relation "public.lessons" does not exist')) {
      const { error: sqlError } = await supabase.sql`
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
      `;

      if (sqlError) {
        console.error('Error creating table:', sqlError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to initialize the database. Please try again.",
        });
        return false;
      }

      // Create a sample lesson to initialize the table
      const { error: insertError } = await supabase
        .from('lessons')
        .insert({
          title: 'Welcome to Skill Share',
          category: 'programming',
          description: 'This is a sample lesson to help you get started.',
          skill_level: 'Beginner',
          price: 'Free',
          teacher_id: '00000000-0000-0000-0000-000000000000'
        });

      if (insertError) {
        console.error('Error inserting sample lesson:', insertError);
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