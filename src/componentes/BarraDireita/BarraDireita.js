import './BarraDireita.css'
import Perfil from '../../Assets/perfil.jpg'
import Palmeiras from '../../Assets/palmeiras.jpg'
import RealMadrid from '../../Assets/palmeiras.jpg'
import Barcelona from '../../Assets/palmeiras.jpg'
import ManCity from '../../Assets/palmeiras.jpg'

export default function BarraDireita(props) {
    return (
        <div className='barraDireita'>
            <div className="meu-Perfil">
                <div className="info-perfil">
                    <img className='foto' src={Perfil} alt="" />
                    <div className='info'>
                        <span className='info1'>matheux_Barbosa</span>
                        <span className='info2'>Matheus Barbosa</span>
                    </div>
                </div>
                <span className='mudar'>Mudar</span>
            </div>
            <div className="sugestoes-perfil">
                <span className='suge1'>Sugestões para você</span>
                <span className='suge2'>Ver tudo</span>
            </div>
            <br />
            <div className="container-sug">
                <div className="sug_perfis">
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Palmeiras} alt="" />
                        <div className='info'>
                            <span className='info1'>Palmeiras</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Perfil} alt="" />
                        <div className='info'>
                            <span className='info1'>matheux_Barbosa</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Perfil} alt="" />
                        <div className='info'>
                            <span className='info1'>matheux_Barbosa</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Perfil} alt="" />
                        <div className='info'>
                            <span className='info1'>matheux_Barbosa</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Perfil} alt="" />
                        <div className='info'>
                            <span className='info1'>matheux_Barbosa</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Perfil} alt="" />
                        <div className='info'>
                            <span className='info1'>matheux_Barbosa</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>



                </div>
            </div>


        </div>
    )
}