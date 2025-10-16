import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import comp1 from "../assets/img/html.png";
import comp2 from "../assets/img/javascript.png";
import comp3 from "../assets/img/php.png";
import comp4 from "../assets/img/MySQL.png";
import comp5 from "../assets/img/PostgreSQL.png";
import comp6 from "../assets/img/Laravel.png";
import comp7 from "../assets/img/Java_Logo.png";
import comp8 from "../assets/img/JAVAFx.png";
import comp9 from "../assets/img/Kotlin.png";
import comp10 from "../assets/img/bootstrap.png";
import comp11 from "../assets/img/jquery.png";
import comp12 from "../assets/img/CSS.png";
import comp13 from "../assets/img/Python.png";
import comp14 from "../assets/img/logoGitHub.png";
import comp15 from "../assets/img/IntelliJ.png";
import comp16 from "../assets/img/phpstorm.png";
import comp17 from "../assets/img/uml.png";
import comp18 from "../assets/img/visualstudiocode.png";
import comp19 from "../assets/img/wamp64.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Compétences</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>

                            <div className='item'>
                                <img src={comp6} alt="img" />
                                <h5>Laravel</h5>
                            </div>

                            <div className='item'>
                                <img src={comp7} alt="img" />
                                <h5>Java</h5>
                            </div>

                            <div className='item'>
                                <img src={comp8} alt="img" />
                                <h5>JavaFX</h5>
                            </div>

                            <div className='item'>
                                <img src={comp1} alt="img" />
                                <h5>HTML</h5>
                            </div>
                            
                            <div className='item'>
                                <img src={comp2} alt="img" />
                                <h5>JavaScript</h5>
                            </div>

                            <div className='item'>
                                <img src={comp3} alt="img" />
                                <h5>PHP</h5>
                            </div>

                            <div className='item'>
                                <img src={comp4} alt="img" />
                                <h5>MySQL</h5>
                            </div>
                            <div className='item'>
                                <img src={comp5} alt="img" />
                                <h5>PLPGSQL</h5>
                            </div>
                            
                            <div className='item'>
                                <img src={comp9} alt="img" />
                                <h5>Kotlin</h5>
                            </div>

                            <div className='item'>
                                <img src={comp10} alt="img" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className='item'>
                                <img src={comp11} alt="img" />
                                <h5>Jquery</h5>
                            </div>

                            <div className='item'>
                                <img src={comp12} alt="img" />
                                <h5>CSS</h5>
                            </div>
                            
                            <div className='item'>
                                <img src={comp13} alt="img" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Mes outils / logiciels</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>

                            <div className='item'>
                                <img src={comp14} alt="img" />
                                <h5>Github/Git</h5>
                            </div>

                            <div className='item'>
                                <img src={comp15} alt="img" />
                                <h5>IntelliJ</h5>
                            </div>

                            <div className='item'>
                                <img src={comp16} alt="img" />
                                <h5>PHPStorm</h5>
                            </div>

                            <div className='item'>
                                <img src={comp17} alt="img" />
                                <h5>UML</h5>
                            </div>
                            
                            <div className='item'>
                                <img src={comp18} alt="img" />
                                <h5>Visual Studio Code</h5>
                            </div>

                            <div className='item'>
                                <img src={comp19} alt="img" />
                                <h5>Wamp64</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-left' src={colorSharp} /> */}
        </section>
    )
}