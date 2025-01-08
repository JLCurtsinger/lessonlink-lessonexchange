import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export interface Lesson {
  id: string;
  title: string;
  category: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  description: string;
  teacherName: string;
}

export const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{lesson.title}</CardTitle>
        <div className="flex gap-2 mt-2">
          <Badge variant="secondary">{lesson.category}</Badge>
          <Badge variant="outline">{lesson.skillLevel}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-2">{lesson.description}</p>
        <p className="mt-2 text-sm text-gray-500">by {lesson.teacherName}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-semibold text-primary">{lesson.price}</span>
        <Button
          variant="outline"
          onClick={() => navigate(`/lesson/${lesson.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};