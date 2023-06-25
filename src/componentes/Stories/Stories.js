import './Stories.css'
import Neymar from '../../Assets/neymar.jpg'
import Beatriz from '../../Assets/Beatriz.jpg'
import Luana from '../../Assets/Luana.jpg'
import Veigh from '../../Assets/Veigh.jpg'
import Henrique from '../../Assets/Henrique.jpg'
import Marcia from '../../Assets/Marcia.jpg'
import FlorNago from '../../Assets/FlorNago.jpg'

export default function Stories(props) {
    return (
        <div className="container-principal">
            <div className="container-stories">
                <div className="stories">
                    <img src={Neymar} alt="" />
                </div>
                <div className="stories">
                    <img src={Beatriz} alt="" />
                </div>
                <div className="stories">
                    <img src={Veigh} alt="" />
                </div>
                <div className="stories">
                    <img src={Luana} alt="" />
                </div>
                <div className="stories">
                    <img src={Henrique} alt="" />
                </div>
                <div className="stories">
                    <img src={Marcia} alt="" />
                </div>
                <div className="stories">
                    <img src={FlorNago} alt="" />
                </div>
            </div>
            <div className="nome-user">
                <div className="nome-user">
                    <p>Neymar</p>
                </div>
                <div className="nome-user">
                    <p>Beatriz</p>
                </div>
                <div className="nome-user">
                    <p>Veigh</p>
                </div>
                <div className="nome-user">
                    <p>Luana</p>
                </div>
                <div className="nome-user">
                    <p>Henrique</p>
                </div>
                <div className="nome-user">
                    <p>Marcia</p>
                </div>
                <div className="nome-user">
                    <p>Flor</p>
                </div>
            </div>

        </div>
    )
}