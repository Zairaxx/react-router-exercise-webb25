// Nedan finns en komplett React-appstruktur där alla sidor/komponenter är färdiga.
// OBS! Routing är *inte* implementerad — det ska eleverna själva göra.
// Alla komponenter ligger i src/ och App.js saknar routing.

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <h1 className="app-title">React Router Övning</h1>
      <p>Här ska du implementera routing mellan sidorna:</p>
      <nav>
        <ul className="app-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
      <p className="app-instruction">Din uppgift: Lägg till BrowserRouter, Routes och Route så att sidorna fungerar. Se till att navigation mellan sidorna är möjligt.</p>
      <p className="app-instruction">Glöm inte att skapa en navigation så du kan navigera dig emellan sidorna</p>
      <p className="app-instruction">Blir du färdig - Lägg till mer innehåll i de olika undersidorna!</p>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}
