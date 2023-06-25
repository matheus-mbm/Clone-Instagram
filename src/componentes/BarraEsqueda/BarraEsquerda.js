import './BarraEsquerda.css'
import Home from '../../Assets/Icon/casa.png'
import Notificacao from '../../Assets/Icon/coracao.png'
import Pesquisa from '../../Assets/Icon/procurar.png'
import Reels from '../../Assets/Icon/video.png'
import Instagram from '../../Assets/Icon/instagram.png'
import Explorar from '../../Assets/Icon/explorar.png'
import Mensagem from '../../Assets/Icon/mensagem.png'
import Criar from '../../Assets/Icon/criar.png'
import Mais from '../../Assets/Icon/mais.png'
import Perfil from '../../Assets/perfil.jpg'

export default function BarraEsquerda(props) {
    return (
        <div className='BarraEsquerda'>
            <div className="logo">
                <img className='icone2' src={Instagram} alt="" />
            </div>
            <ul className='menu'>
                <li><img className='icone' src={Home} alt="" />Página Inicial</li>
                <br />
                <li><img className='icone' src={Pesquisa} alt="" />Pesquisa</li>
                <br />
                <li><img className='icone' src={Explorar} alt="" />Explorer</li>
                <br />
                <li><img className='icone' src={Reels} alt="" />Reels</li>
                <br />
                <li><img className='icone' src={Mensagem} alt="" />Mensagens</li>
                <br />
                <li><img className='icone' src={Notificacao} alt="" />Notificação</li>
                <br />
                <li><img className='icone' src={Criar} alt="" />Criar</li>
                <br />
                <li><img className='perfil' src={Perfil} alt="" />Perfil</li>
                <br />
                <li><img className='icone' src={Mais} alt="" />Mais</li>
            </ul>
        </div>
    )
}