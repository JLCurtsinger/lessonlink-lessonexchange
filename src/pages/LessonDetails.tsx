import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LessonDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const handleRequestLesson = () => {
    toast({
      title: "Request Sent!",
      description: "The teacher will be notified of your interest.",
    });
  };

  // This would be replaced with actual data fetching from Supabase
  const lesson = {
    title: "Introduction to Spanish",
    category: "Languages",
    skillLevel: "Beginner",
    price: "Free",
    description: "Learn basic Spanish conversation skills with a native speaker. This course covers greetings, basic grammar, and essential vocabulary for everyday situations.",
    teacherName: "Maria Rodriguez",
    teacherBio: "Native Spanish speaker with 5 years of teaching experience.",
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">{lesson.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary">{lesson.category}</Badge>
              <Badge variant="outline">{lesson.skillLevel}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">About the Lesson</h3>
              <p className="text-gray-600">{lesson.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Teacher</h3>
              <p className="font-medium">{lesson.teacherName}</p>
              <p className="text-gray-600">{lesson.teacherBio}</p>
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