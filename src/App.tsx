import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import Dashboard from "@/pages/Dashboard";
import BlogIndex from "@/pages/blog/Index";
import Recruitment from "@/pages/recruitment/Index";
import OnlineSales from "@/pages/services/OnlineSales";
import TelephonySystem from "@/pages/services/TelephonySystem";
import CallCenter from "@/pages/services/CallCenter";

const App = () => {
  return (
    <Router>
      <PerformanceMonitor />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/services/online-sales" element={<OnlineSales />} />
        <Route path="/services/telephony-system" element={<TelephonySystem />} />
        <Route path="/services/call-center" element={<CallCenter />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
