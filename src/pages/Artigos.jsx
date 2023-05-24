import './artigos.css';
import folder from './arquivos/novo11_merged.pdf'

function Artigos() {
  return (
    <main id='artigos'>
     <a href={ folder } download className='linkArtigos'> Clique para abrir o Folder </a>
    </main>
  );
}

export default Artigos;
