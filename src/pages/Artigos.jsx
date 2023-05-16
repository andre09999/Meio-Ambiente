import './artigos.css';
import arquivo from './arquivos/RESUMO TRABALHO DE EXTENSÃO.pdf'

function Artigos() {
  return (
    <main id='artigos'>
     <a href={ arquivo } download className='linkArtigos'> Clique para abrir o Resumo trabalho de extensão </a>
    </main>
  );
}

export default Artigos;
