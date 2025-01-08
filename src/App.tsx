import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import CreateLesson from "./pages/CreateLesson";
import LessonDetails from "./pages/LessonDetails";
import Auth from "./pages/Auth";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/create-lesson" element={<CreateLesson />} />
          <Route path="/lesson/:id" element={<LessonDetails />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;