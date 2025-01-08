import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

export const initializeDatabase = async () => {
  try {
    // First, check if the table exists by attempting to select a single row
    const { error: checkError } = await supabase
      .from('lessons')
      .select('id')
      .limit(1);

    // If we get a specific error about the relation not existing, create the table
    if (checkError?.message?.includes('relation "public.lessons" does not exist')) {
      // Create a temporary lesson to initialize the table structure
      const { error: createError } = await supabase
        .from('lessons')
        .insert([
          {
            title: 'Sample Lesson',
            category: 'programming',
            description: 'This is a sample lesson used to initialize the database.',
            skill_level: 'Beginner',
            price: 'Free',
            teacher_id: '00000000-0000-0000-0000-000000000000'
          }
        ]);

      if (createError) {
        console.error('Error creating initial lesson:', createError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to initialize the database. Please try again.",
        });
        return false;
      }

      // Clean up the temporary lesson
      await supabase
        .from('lessons')
        .delete()
        .eq('title', 'Sample Lesson');

      toast({
        title: "Success",
        description: "Database initialized successfully.",
      });
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