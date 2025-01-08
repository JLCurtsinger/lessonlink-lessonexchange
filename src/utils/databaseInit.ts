import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

export const initializeDatabase = async () => {
  try {
    // Create the lessons table using SQL
    const { error: createError } = await supabase.from('lessons').insert([
      {
        title: 'initialization',
        category: 'temp',
        description: 'temp',
        skill_level: 'Beginner',
        price: 'Free',
        teacher_id: '00000000-0000-0000-0000-000000000000'
      }
    ]);

    if (createError) {
      console.error('Error initializing database:', createError);
      toast({
        variant: "destructive",
        title: "Database Error",
        description: "Failed to initialize the database. Please try again.",
      });
      return false;
    }

    // Clean up the temporary row
    await supabase
      .from('lessons')
      .delete()
      .eq('title', 'initialization');

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