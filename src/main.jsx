import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Workshop from "./component/Workshop/Home.jsx";
import App from "./App.jsx";
import Home from "./component/Home/Home"
import Research from "./component/Research/Research.jsx";
import About from "./component/About/About.jsx";
import Policy from "./component/Policy.jsx";
import HomeProvider from "./component/Context/HomeProvider.jsx";
import AboutProvider from "./component/Context/AboutProvider.jsx";
import ResearchProvider from "./component/Context/ResearchProvider.jsx";
import Error from "./component/Error.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Gallery from "./component/Gallery.jsx";
import WorkshopData from "./component/Workshop/Workshop.jsx";
import Content from "./component/Workshop/Content.jsx";
import ContentCh from "./component/Workshop/ContentCh.jsx";
import ContentCse from "./component/Workshop/ContentCse.jsx";
import DhvaniPage from "./component/Solutions/DhvaniPage.jsx";
import Loops from "./component/Products/Loops.jsx";
import Deed from "./component/Solutions/Deed.jsx";
import Stack from "./component/Products/Stack.jsx";
import KVoice from "./component/Solutions/KVoice.jsx";
import Terms from "./component/Terms.jsx";
import FormExtraction from "./component/Solutions/Form.jsx";
import Captcha from "./component/Solutions/Captcha.jsx";
import Chatbot from "./component/Home/Chatbot.jsx"

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={
            <HomeProvider>
              <Home />
            </HomeProvider>
          }
        />
        <Route
          path="/research"
          element={
            <ResearchProvider>
              <Research />
            </ResearchProvider>
          }
        />
        <Route
          path="/llm"
          element={<Workshop Workshop={WorkshopData[1]} Course={Content} />}
        />
        <Route
          path="/llm-chennai"
          element={<Workshop Workshop={WorkshopData[0]} Course={ContentCh} />}
        />
        <Route
          path="/llm-cse"
          element={<Workshop Workshop={WorkshopData[2]} Course={ContentCse} />}
        />
        <Route
          path="/about"
          element={
            <AboutProvider>
              <About />
            </AboutProvider>
          }
        />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/Dhvani" element={<DhvaniPage />} />
        <Route path="/MLloOps" element={<Loops />} />
        <Route path="/DeedParser" element={<Deed />} />
        <Route path="/MLStack" element={<Stack />} />
        <Route path="/KnowVoice" element={<KVoice />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/FormExtractor" element={<FormExtraction />} />
        <Route path="/CaptchaSolver" element={<Captcha />} />
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
