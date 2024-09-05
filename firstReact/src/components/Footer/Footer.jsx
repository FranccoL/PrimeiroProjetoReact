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
                    <img src={Logo} className="footer-logo" />
                    <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className="d-flex social-links">
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
                <div className="d-flex">
                <div className="footer-col">
                        <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact</h3>
                        <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                        <p className="grey-1-color">suporte@escoladnc.com.br</p>
                        <p className="grey-1-color">(19) 99187-4342</p>

                    </div>
                 </div>
               </div>
               <div className="d-flex jc-space-between footer-copy">
                <p className="grey-1-color">Copyright © DNC - 2024</p>
                <div className="langs-area d-flex">
                    <img src={Brazil} height="29px"/>
                    <img src={USA} height="29px"/>
                </div>

               </div>
            </div>
        </footer>
    )
}

export default Footer