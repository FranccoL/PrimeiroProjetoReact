import Header from "../components/Header/Header"
import ContactForm from "../components/ContactForm/ContactForm"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"




function Contact() {
    return (
        <>
        <Header/>
        <Banner title="Contact" image="contact.jpg"/>
        <div className="container">
        
        <ContactForm />
        </div>
        
        <Footer/>
        </>
    )
}

export default Contact