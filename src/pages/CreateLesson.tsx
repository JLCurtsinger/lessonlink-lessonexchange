import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { supabase } from "@/lib/supabase";

const CreateLesson = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    skillLevel: "",
    price: "",
  });

  useEffect(() => {
    const createLessonsTable = async () => {
      try {
        // First try to select from the table to check if it exists
        const { error: checkError } = await supabase
          .from('lessons')
          .select('id')
          .limit(1);

        // If there's an error, it might mean the table doesn't exist
        if (checkError) {
          // Use raw SQL with the Supabase client to create the table
          const { error: createError } = await supabase
            .from('lessons')
            .insert({
              title: 'temp',
              category: 'temp',
              description: 'temp',
              skill_level: 'temp',
              price: 'temp',
              teacher_id: '00000000-0000-0000-0000-000000000000'
            })
            .select();

          if (createError) {
            console.error('Error creating lessons table:', createError);
            toast({
              variant: "destructive",
              title: "Error",
              description: "Failed to initialize database. Please try again later.",
            });
          } else {
            // Clean up the temporary row
            await supabase
              .from('lessons')
              .delete()
              .eq('title', 'temp');
          }
        }
      } catch (error) {
        console.error('Error in table creation:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to initialize database. Please try again later.",
        });
      }
    };

    createLessonsTable();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <Navigation />
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Create a Lesson</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Lesson Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter lesson title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your lesson"
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skillLevel">Skill Level</Label>
                <Select
                  value={formData.skillLevel}
                  onValueChange={(value) => setFormData({ ...formData, skillLevel: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price Type</Label>
                <Select
                  value={formData.price}
                  onValueChange={(value) => setFormData({ ...formData, price: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select price type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Free">Free</SelectItem>
                    <SelectItem value="Barter">Barter</SelectItem>
                    <SelectItem value="0.001 ETH">0.001 ETH</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Create Lesson"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateLesson;