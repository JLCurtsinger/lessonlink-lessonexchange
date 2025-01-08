import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { LessonForm } from "@/components/LessonForm";
import { initializeDatabase } from "@/utils/databaseInit";

const CreateLesson = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      await initializeDatabase();
    };
    init();
  }, []);

  const handleSubmit = async (formData: {
    title: string;
    category: string;
    description: string;
    skillLevel: string;
    price: string;
  }) => {
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("You must be logged in to create a lesson");

      const { error } = await supabase.from("lessons").insert({
        title: formData.title,
        category: formData.category,
        description: formData.description,
        skill_level: formData.skillLevel,
        price: formData.price,
        teacher_id: user.id,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your lesson has been created.",
      });
      
      navigate("/browse");
    } catch (error) {
      console.error("Error creating lesson:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create lesson. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Create a Lesson</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Lesson Details</CardTitle>
          </CardHeader>
          <CardContent>
            <LessonForm onSubmit={handleSubmit} loading={loading} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateLesson;