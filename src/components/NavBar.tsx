import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/logoGitHub.png';
import navIcon2 from '../assets/img/logoLinkedin.png';
import navIcon3 from '../assets/img/logoGmail.png';
import { Modal, Button } from 'react-bootstrap';
import previewImage from "../assets/img/resume-img.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<'image' | 'pdf' | null>(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value : string) => {
        setActiveLink(value);
    }

    const openImage = () => {
        setModalContent('image');
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt="logo" /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('A propos')}>A propos</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
                        <Nav.Link href="#veille" className={activeLink === 'veille' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('veille')}>Veille</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target="_blank" href="https://github.com/DylanG-Dev/"><img src={navIcon1} alt="" /></a>
                            <a target="_blank" href="https://www.linkedin.com/"><img src={navIcon2} alt="" /></a>
                            <a target="_blank" href="mailto:gametdylan@gmail.com"><img src={navIcon3} alt="" /></a>
                        </div>
                        <Nav.Link href="#contacts" className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><button className="vvd" onClick={() => console.log('connect')}><span>Contact</span></button></Nav.Link>
                        <div>
                            {/* Links to open modal */}
                            
                            {/* Modal */}
                            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                                <Modal.Header closeButton>
                                <Modal.Title>
                                    {modalContent === 'pdf' ? '' : ''}
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                {modalContent === 'image' && (
                                    <img
                                    src={previewImage}
                                    alt="Preview"
                                    style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <Nav.Link href="" >
                            <button className="CV" onClick={openImage}>
                                <span>Voir mon CV</span>
                            </button>
                        </Nav.Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}