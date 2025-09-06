import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import CustomCursor from "./component/CustomCursor"; // Import the new component

function App() {
  return (
    <>
      <Helmet>
        <title>RBG.AI</title>
        <meta
          name="description"
          content="Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows."
        />
      </Helmet>
      <CustomCursor /> {/* Add this line */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
