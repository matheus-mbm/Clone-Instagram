import './Feed.css'
import Neymar from '../../Assets/neymar.jpg'
import NeyMessi from '../../Assets/NeyMessi.jpg'
import Curtir from '../../Assets/Icon/curtir.png'
import Comentar from '../../Assets/Icon/comentar.png'
import Salvar from '../../Assets/Icon/salvar.png'
import Compartilhar from '../../Assets/Icon/compartilhar.png'
import Frase from '../../Assets/frase-pixada.jpg'
import Perfil2 from '../../Assets/foto-perfil2.jpg'
import Dev from '../../Assets/programacao.jpeg'
import Perfil3 from '../../Assets/matheus_dev.jpg'
import Perfil4 from '../../Assets/cinemark.jpg'
import HomemAranha from '../../Assets/homem-aranha.jpg'


export default function Feed(props) {
    return (
        <div className="container-post">
            <div className="info-user">
                <img src={Neymar} alt="" />
                <p>{props.nome_perfil}</p>
            </div>
            <div className="img-post">
                <img src={NeyMessi} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>
            <div className="comentarios">

            </div>
            <div className="info-user">
                <img src={Perfil2} alt="" />
                <p>{props.nome_perfil2}</p>
            </div>
            <div className="img-post">
                <img src={Frase} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>
            <div className="info-user">
                <img src={Perfil3} alt="" />
                <p>{props.nome_perfil3}</p>
            </div>
            <div className="img-post">
                <img src={Dev} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>
            <div className="info-user">
                <img src={Perfil4} alt="" />
                <p>{props.nome_perfil4}</p>
            </div>
            <div className="img-post">
                <img src={HomemAranha} alt="" />
            </div>
            <div className="icones">
                <div className="icon-left">
                    <img src={Curtir} alt="" />
                    <img src={Comentar} alt="" />
                    <img src={Compartilhar} alt="" />
                </div>
                <div className="icon-right">
                    <img src={Salvar} alt="" />
                </div>
            </div>
        </div>

    )
}