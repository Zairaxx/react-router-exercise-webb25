export function HomePage() {
  return (
    <div className="home-container">
      <h2 className="home-title"> Ankademin – Välkommen!</h2>

      {/* Logo & slogan */}
      <div className="ankademin-logo">
        <p className="ankademin-slogan">"Där löven faller – och kunskapen växer."</p>
      </div>

      <p className="home-text">Ankademin är en fiktiv skola där kreativitet, teknik och innovation möts i en mysig höstmiljö året runt. en fiktiv skola där kreativitet, teknik och innovation möts i en mysig höstmiljö året runt.</p>
      <p className="home-text">Här får eleverna utveckla sina färdigheter inom webbutveckling, programmering, design och problemlösning.</p>
      <p className="home-text">På denna sida hittar du:</p>
      <ul className="home-text">
        <li>Information om skolan</li>
        <li>En lista över elever som studerar hos oss</li>
        <li>En övning där du bygger routing mellan sidorna</li>
      </ul>
      <p className="home-text"> Ta en kopp varm choklad och utforska Ankademin!</p>
    </div>
  );
}

export default HomePage