import './BarraDireita.css'
import Perfil from '../../Assets/perfil.jpg'
import Palmeiras from '../../Assets/palmeiras.jpg'
import RealMadrid from '../../Assets/realMadrid.jpg'
import Xbox from '../../Assets/xbox.jpg'
import ManCity from '../../Assets/manchesterCity.jpg'
import Proa from '../../Assets/proa.jpg'
import Rocketseat from '../../Assets/rocketseat.jpg'



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
                        <img className='foto-sug' src={RealMadrid} alt="" />
                        <div className='info'>
                            <span className='info1'>Real Madrid</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={ManCity} alt="" />
                        <div className='info'>
                            <span className='info1'>Manchester City</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Xbox} alt="" />
                        <div className='info'>
                            <span className='info1'>XboxBr</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Proa} alt="" />
                        <div className='info'>
                            <span className='info1'>Proa</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>
                    <div className="perfil-sug">
                        <img className='foto-sug' src={Rocketseat} alt="" />
                        <div className='info'>
                            <span className='info1'>RocketSeat</span>
                            <span className='info2'>Seguido(a) por........</span>
                        </div>
                        <span className='seguir'>Seguir</span>
                    </div>



                </div>
            </div>


        </div>
    )
}