import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LessonCard, type Lesson } from "@/components/LessonCard";

const SAMPLE_LESSONS: Lesson[] = [
  {
    id: "1",
    title: "Introduction to Spanish",
    category: "Languages",
    skillLevel: "Beginner",
    price: "Free",
    description: "Learn basic Spanish conversation skills with a native speaker.",
    teacherName: "Maria Rodriguez"
  },
  {
    id: "2",
    title: "Guitar for Beginners",
    category: "Music",
    skillLevel: "Beginner",
    price: "0.001 ETH",
    description: "Master the basics of guitar playing with personalized feedback.",
    teacherName: "John Smith"
  },
  {
    id: "3",
    title: "Advanced Python Programming",
    category: "Programming",
    skillLevel: "Advanced",
    price: "Barter",
    description: "Deep dive into Python with focus on AI and machine learning applications.",
    teacherName: "Alex Chen"
  }
];

const Browse = () => {
  return (
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_LESSONS.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Browse;