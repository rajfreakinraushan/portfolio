export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">Portfolio.</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="btn" style={{padding: '0.5rem 1.2rem', fontSize: '0.85rem'}}>Get in Touch</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
