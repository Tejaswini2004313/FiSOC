import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Events from "./components/Events";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Newsletter from "./components/Newsletter";
import Blog from "./components/Blog";
import Resources from "./components/Resources";
import MyFooter from "./components/MyFooter";
import ContactUs from "./components/ContactUs";
import BlogInfo from "./components/BlogInfo";

function AppContent() {
  const location = useLocation();

  // Determine if the current route should display About and MyFooter
  const isContentPage =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      {isContentPage && <Navbar />}
      {isContentPage && <Home />}
      {isContentPage && <Events />}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogInfo />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      {isContentPage && <About />}
      {isContentPage && <ContactUs />}
      {isContentPage && <MyFooter />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
