/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";
import SoftwareSolutions from "./pages/SoftwareSolutions";
import Accountancy from "./pages/Accountancy";
import Insights from "./pages/Insights";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="software-solutions" element={<SoftwareSolutions />} />
          <Route path="accountancy" element={<Accountancy />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
