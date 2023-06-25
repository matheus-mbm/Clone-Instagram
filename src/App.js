import './App.css';
import BarraDireita from './componentes/BarraDireita/BarraDireita';
import BarraEsquerda from './componentes/BarraEsqueda/BarraEsquerda';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';


function App() {
  return (
    <div className="corpo">
      <BarraEsquerda />
      <div className='conteudo-centro'>
        <Stories />
        <Feed 
        nome_perfil="Neymar"
        nome_perfil2='Frases_Pixadas'
        />
      </div>
      <BarraDireita />
    </div>
  );
}

export default App;
