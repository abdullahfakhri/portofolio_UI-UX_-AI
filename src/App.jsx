import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import ComingSoon from './pages/ComingSoon';
import { ResumeTabProvider } from './context/ResumeTabContext';

// Reset scroll position whenever we switch to a different route (not on hash
// scrolls within the same page, which react-scroll handles itself).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ResumeTabProvider>
      <div className="relative">
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </ResumeTabProvider>
  );
}
