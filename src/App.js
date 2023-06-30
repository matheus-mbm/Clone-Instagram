import './App.css';
import BarraDireita from './componentes/BarraDireita/BarraDireita';
import BarraEsquerda from './componentes/BarraEsqueda/BarraEsquerda';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';


function App() {
  return (
    <div className="corpo">
      <div className="barra-esquerda">
         <BarraEsquerda />
      </div>
      <div className='conteudo-centro'>
        <Stories />
        <Feed 
        nome_perfil="Neymar"
        nome_perfil2='Frases_Pixadas'
        nome_perfil3='matheus_dev'
        nome_perfil4='Cinemark'
        />
      </div>
      <div className="barra-direita">
        <BarraDireita />
      </div>
      
    </div>
  );
}

export default App;
