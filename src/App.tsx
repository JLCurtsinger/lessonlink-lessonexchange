import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import CreateLesson from "./pages/CreateLesson";
import LessonDetails from "./pages/LessonDetails";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TeachSkills from "./pages/TeachSkills";
import Learn from "./pages/Learn";
import FlexiblePayments from "./pages/FlexiblePayments";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/create-lesson" element={<CreateLesson />} />
            <Route path="/lesson/:id" element={<LessonDetails />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/teach" element={<TeachSkills />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/flexible-payments" element={<FlexiblePayments />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;