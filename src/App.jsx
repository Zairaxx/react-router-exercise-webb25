// Nedan finns en komplett React-appstruktur där alla sidor/komponenter är färdiga.
// OBS! Routing är *inte* implementerad — det ska eleverna själva göra.
// Alla komponenter ligger i src/ och App.js saknar routing.

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Router Övning</h1>
      <p>Här ska du implementera routing mellan sidorna:</p>
      <ul className="app-list">
        <li>Home</li>
        <li>About</li>
        <li>Users</li>
        <li>NotFound</li>
      </ul>
      <p className="app-instruction">Din uppgift: Lägg till BrowserRouter, Routes och Route så att sidorna fungerar. Se till att navigation mellan sidorna är möjligt.</p>
      <p className="app-instruction">Glöm inte att skapa en navigation så du kan navigera dig emellan sidorna</p>
      <p className="app-instruction">Blir du färdig - Lägg till mer innehåll i de olika undersidorna!</p>

      <HomePage/>
      <AboutPage/>
      <UsersPage/>
      <NotFound/>

    </div>
  );
}
