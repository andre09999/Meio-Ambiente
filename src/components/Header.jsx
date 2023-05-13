import './header.css';
import Logo from './imagesHeader/logFasam.png'

function Header() {
  return (
    <header>
    <img src={Logo} alt='logo fasam'/>
    <nav>
    <a href='/home'>Home</a>
    <a href='/about'>Quem somos</a>
    <a href='/artigos'>Artigos</a>
    </nav>
    </header>
  );
}

export default Header;
