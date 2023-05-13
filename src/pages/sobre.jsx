import './about.css';

function About() {
  return (
    <main id='about'>
     <h1 className='tituloAbout titulo'>Quem somos:</h1>
     <p >Acadêmicos do Bacharel em Direito, concluindo o 10° período, na instituição Unifasam.</p>
    <h2 className='titulo'>Grupo constituido por:</h2>
    <ul>
      <li>André Alves de Souza</li>
      <li>Deth Lefsen Evangelista Oliveira e Silva</li>
      <li>Larah Atena de Souza e Castro </li>
      <li>Paulo Henrique Alves de Araújo</li>
      <li>Rafael Bispo </li>
      <li>Selma Pereira da Silva </li>
    </ul>
    <h2 className='titulo doc'>Docente: </h2>
    <ul>
      <li>Fabier Rézio Reis</li>
      <li>Lauren Lautenschlager </li>
      <li>Luzimar Pereira da Silva Morais</li>
    </ul>
    <h2 className='titulo'>Coodenadora do curso de Direito:  </h2>
    <p className='color'>Laíse Alves do Carmo</p>
    </main>
  );
}

export default About;
