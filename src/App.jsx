import Announcement from "./components/Announcement";
import Creator from "./components/Creator";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Process from "./components/Process";
import TakeLeap from "./components/TakeLeap";

const App = () => {
  return (
  <>
    <Announcement />
    <Navbar />
    <Hero />
    <Process />
    <Creator />
    <Popular />
    <TakeLeap />
    <Footer />
  </>
  )};

export default App;