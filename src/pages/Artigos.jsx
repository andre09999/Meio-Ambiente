import './artigos.css';
import arquivo from './arquivos/RESUMO TRABALHO DE EXTENSÃO.pdf'
import folder from './arquivos/novo11_merged.pdf'

function Artigos() {
  return (
    <main id='artigos'>
     <a href={ folder } download className='linkArtigos'> Clique para abrir o Resumo trabalho de extensão </a>
    </main>
  );
}

export default Artigos;
