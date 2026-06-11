/* React / Bootstrap */
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


/* Skills */
import htmlLogo from "../assets/img/html.png";
import javascriptLogo from "../assets/img/javascript.png";
import phpLogo from "../assets/img/php.png";
import mysqlLogo from "../assets/img/MySQL.png";
import postgresqlLogo from "../assets/img/PostgreSQL.png";
import laravelLogo from "../assets/img/Laravel.png";
import javaLogo from "../assets/img/Java_Logo.png";
import javafxLogo from "../assets/img/JAVAFx.png";
import bootstrapLogo from "../assets/img/bootstrap.png";
import cssLogo from "../assets/img/CSS.png";
import pythonLogo from "../assets/img/Python.png";
import plsqlLogo from "../assets/img/plsql.svg";
import linuxLogo from "../assets/img/linux.png";
import bashLogo from "../assets/img/bash.png";
import githubLogo from "../assets/img/logoGitHub.png";

/* Tools */
import wampLogo from "../assets/img/wamp64.png";
import intellijLogo from "../assets/img/IntelliJ.png";
import phpstormLogo from "../assets/img/phpstorm.png";
import umlLogo from "../assets/img/uml.png";
import vscodeLogo from "../assets/img/visualstudiocode.png";
import dbeaverLogo from "../assets/img/DBeaver.png";


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

    const skills = [
        { id: 1, name: 'Laravel' , image: laravelLogo },
        { id: 2, name: 'Java', image: javaLogo },
        { id: 3, name: 'JavaFX', image: javafxLogo },
        { id: 4, name: 'HTML', image: htmlLogo },
        { id: 5, name: 'JavaScript', image: javascriptLogo },
        { id: 6, name: 'PHP', image: phpLogo },
        { id: 7, name: 'Bootstrap', image: bootstrapLogo },
        { id: 8, name: 'CSS', image: cssLogo },
        { id: 9, name: 'Python', image: pythonLogo },
        { id: 10, name: 'UML', image: umlLogo },
        { id: 11, name: 'GitHub / Git', image: githubLogo },
        { id: 12, name: 'MySQL', image: mysqlLogo },
        { id: 13, name: 'PostgreSQL', image: postgresqlLogo },
        { id: 14, name: 'SQL / PL/pgSQL', image: plsqlLogo },
        { id: 15, name: 'Linux', image: linuxLogo },
        { id: 16, name: 'Scripting Bash', image: bashLogo }
    ];

    const tools = [
        { id: 1, name: 'IntelliJ', image: intellijLogo },
        { id: 2, name: 'PHPStorm', image: phpstormLogo },
        { id: 3, name: 'Visual Studio Code', image: vscodeLogo },
        { id: 4, name: 'Wamp64', image: wampLogo },
        { id: 5, name: 'DBeaver', image: dbeaverLogo }
    ];

    

    return (
        <section className="skill pt-5 mt-5" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Compétences</h2>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider pt-4'>
                            {skills.map(skill =>
                                <div key={skill.id} className='item'>
                                    <img src={skill.image} alt="img" />
                                    <h5>{skill.name}</h5>
                                </div>
                            )}
                        </Carousel>
                    </div>
                    </Col>
                </Row>
                <Row className="pt-5 mt-5">
                    <Col>
                    <div className='skill-bx'>
                        <h2>Mes outils / logiciels</h2>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider pt-4'>
                            {tools.map(tool =>
                                <div key={tool.id} className='item'>
                                    <img src={tool.image} alt="img" />
                                    <h5>{tool.name}</h5>
                                </div>
                            )}
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}