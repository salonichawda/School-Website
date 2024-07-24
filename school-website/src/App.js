import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import AcademicsPage from "./components/Academics";
import AdmissionsPage from "./components/Admissions";
import FacultyPage from "./components/Faculty";
import StudentsPage from "./components/Students";
import GalleryPage from "./components/Gallery";
import ContactPage from "./components/Contact";
import "./App.css"; // Assuming you have some basic global styles
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
