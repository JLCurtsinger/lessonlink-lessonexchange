import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

export const initializeDatabase = async () => {
  try {
    // Create the lessons table if it doesn't exist using raw SQL
    const { error: createTableError } = await supabase.rpc('create_lessons_table');

    if (createTableError) {
      // If the RPC doesn't exist yet, create it
      const { error: createFunctionError } = await supabase.rpc('create_rpc_function', {
        function_name: 'create_lessons_table',
        function_definition: `
          CREATE OR REPLACE FUNCTION create_lessons_table()
          RETURNS void
          LANGUAGE plpgsql
          SECURITY DEFINER
          AS $$
          BEGIN
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
          END;
          $$;
        `
      });

      if (createFunctionError) {
        console.error('Error creating RPC function:', createFunctionError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to initialize the database. Please try again.",
        });
        return false;
      }

      // Try creating the table again now that the function exists
      const { error: retryError } = await supabase.rpc('create_lessons_table');
      if (retryError) {
        console.error('Error creating table:', retryError);
        toast({
          variant: "destructive",
          title: "Database Error",
          description: "Failed to initialize the database. Please try again.",
        });
        return false;
      }
    }

    toast({
      title: "Success",
      description: "Database initialized successfully.",
    });

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