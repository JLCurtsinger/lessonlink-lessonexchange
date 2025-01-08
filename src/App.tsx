import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import CreateLesson from "./pages/CreateLesson";
import LessonDetails from "./pages/LessonDetails";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/create-lesson" element={<CreateLesson />} />
        <Route path="/lesson/:id" element={<LessonDetails />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;