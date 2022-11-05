import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMePage";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
