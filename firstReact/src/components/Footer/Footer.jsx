import { Link } from 'react-router-dom'


// ASSETS
import './Footer.css'
import Brazil from '../../assets/brazil.svg'
import USA from '../../assets/usa.svg'
import FacebookIcon from '../../assets/face.svg'
import LinkedinIcon from '../../assets/linkdin.svg'
import InstagramIcon from '../../assets/insta.svg'
import TwitterIcon from '../../assets/x.svg'
import Logo from '../../assets/dnc-logo.svg'

function Footer () {
    return (
        <footer>
            <div className="container">
               <div className='d-flex jc-space-between'>
                <div className="footer-logo-col">
                    <img src={Logo} />
                    <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <a href="#" target="_blank">
                        <img src={FacebookIcon} />
                    </a>
                    <a href="#" target="_blank">
                        <img src={TwitterIcon} />
                    </a>
                    <a href="#" target="_blank">
                        <img src={LinkedinIcon} />
                    </a>
                    <a href="#" target="_blank">
                        <img src={InstagramIcon} />
                    </a>
                </div>
               </div>
            </div>
        </footer>
    )
}

export default Footer