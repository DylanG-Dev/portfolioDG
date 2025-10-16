import { Container, Row, Col } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} sm={6} className="text-center"> {/* Ensure full width on mobile and centered on larger screens */}
                        <div>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="footer-info">
                                        <h2 className="padding">Dylan Gamet</h2>
                                        <h3>
                                            <a target="_blank" href="https://www.google.com/maps/place/Lyon/@45.7580409,4.7527237,12z/data=!3m1!4b1!4m6!3m5!1s0x47f4ea516ae88797:0x408ab2ae4bb21f0!8m2!3d45.764043!4d4.835659!16zL20vMGRwcmc?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D">
                                                <i className="fa-solid fa-map-pin" aria-hidden="true"></i>
                                                {" "}Lyon (69000), France
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div className="container copyright">
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <div className="footer-menu d-flex justify-content-center">
                            <p className="m-2">
                                <a href="#bottom">
                                    <i className="fa-solid fa-mobile" aria-hidden="true"></i>
                                    {" "}07 44 44 14 82
                                </a>
                            </p>
                            <p className="m-2">
                                <a href="mailto:gametdylan@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                                    {" "}gametdylan@gmail.com
                                </a>
                            </p>
                            <p className="m-2">
                                <a href="https://github.com/DylanG-Dev/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                                    {" "}DylanG-Dev
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}