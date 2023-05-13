import './header.css';
import { Link} from 'react-router-dom';
import Logo from './imagesHeader/logFasam.png'

function Header() {
  return (
    <header>
    <img src={Logo} alt='logo fasam'/>
    <nav>
    <Link to='/home'>Home</Link>
    <Link to='/about'>Quem somos</Link>
    <Link to='/artigos'>Artigos</Link>
    </nav>
    </header>
  );
}

export default Header;
