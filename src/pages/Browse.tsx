import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LessonCard, type Lesson } from "@/components/LessonCard";
import Navigation from "@/components/Navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface Profile {
  full_name: string;
}

interface LessonWithProfile {
  id: string;
  title: string;
  description: string;
  category: string;
  skill_level: string;
  price: string;
  teacher_id: string;
  profiles: Profile;
}

const Browse = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const { data: lessonsData, error } = await supabase
        .from('lessons')
        .select(`
          *,
          profiles (full_name)
        `);

      if (error) throw error;

      // Type assertion and data transformation
      const formattedLessons = (lessonsData || []).map(lesson => {
        const typedLesson = lesson as unknown as LessonWithProfile;
        return {
          id: typedLesson.id,
          title: typedLesson.title,
          category: typedLesson.category,
          skillLevel: typedLesson.skill_level as "Beginner" | "Intermediate" | "Advanced",
          price: typedLesson.price,
          description: typedLesson.description,
          teacherName: typedLesson.profiles?.full_name || 'Anonymous Teacher'
        };
      });

      setLessons(formattedLessons);
    } catch (error) {
      console.error('Error fetching lessons:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load lessons. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Browse Lessons</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Search lessons..."
            className="md:w-1/3"
          />
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="languages">Languages</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="programming">Programming</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="barter">Barter</SelectItem>
              <SelectItem value="crypto">Crypto</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading lessons...</div>
        ) : lessons.length === 0 ? (
          <div className="text-center py-8">No lessons found.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;