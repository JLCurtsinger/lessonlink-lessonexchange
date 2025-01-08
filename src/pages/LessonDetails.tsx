import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

interface LessonDetails {
  id: string;
  title: string;
  description: string;
  category: string;
  skill_level: string;
  price: string;
  teacher: {
    full_name: string;
  };
}

const LessonDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [lesson, setLesson] = useState<LessonDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessonDetails();
  }, [id]);

  const fetchLessonDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select(`
          *,
          teacher:teacher_id (
            full_name
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      setLesson(data);
    } catch (error) {
      console.error('Error fetching lesson details:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load lesson details. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRequestLesson = async () => {
    // This will be implemented in the next step with the messaging system
    toast({
      title: "Request Sent!",
      description: "The teacher will be notified of your interest.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container py-8">
          <div className="text-center">Loading lesson details...</div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container py-8">
          <div className="text-center">Lesson not found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">{lesson.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary">{lesson.category}</Badge>
              <Badge variant="outline">{lesson.skill_level}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">About the Lesson</h3>
              <p className="text-gray-600">{lesson.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Teacher</h3>
              <p className="font-medium">{lesson.teacher.full_name}</p>
            </div>

            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-bold text-primary">{lesson.price}</span>
              <Button onClick={handleRequestLesson}>
                Request Lesson
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonDetails;