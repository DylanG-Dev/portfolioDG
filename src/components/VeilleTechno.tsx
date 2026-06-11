/* React / Bootstrap */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* Tech watch subjects*/
import comp2 from "../assets/img/IAEnvironment.png";
import comp3 from "../assets/img/IAHealthcare.png";
import comp5 from "../assets/img/IACybersecurity.png";
import comp8 from "../assets/img/IAInnovation.png";

export const VeilleTechno = () => {

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

    const subjects = [
        { id: 1, subject: "Comment l'IA est utilisée dans l'innovation scientifique", link: "https://www.enseignementsup-recherche.gouv.fr/fr/intelligence-artificielle-de-quoi-parle-t-91190", image : comp8 },
        { id: 2, subject: "Comment l'IA impacte l'environnement", link: "https://www.ecologie.gouv.fr/actualites/intelligence-artificielle-durable", image: comp2 },
        { id: 3, subject: "Comment l'IA impacte le domaine de la santé", link: "https://www.inserm.fr/dossier/intelligence-artificielle-et-sante/", image: comp3 },
        { id: 4, subject : "Comment l'IA impacte le domaine de la cyber-sécurité", link: "https://cyber.gouv.fr/intelligence-artificielle-les-travaux-de-lanssi", image: comp5 }
    ];

    return (
        <section className="veille pt-5" id="veille">
            <Container>
                <h2>Veille Technologique</h2>
                <br></br>
                <h3>La veille technologique, c'est quoi ?</h3>
                <p>La veille technologique est un processus de surveillance des évolutions et des innovations dans un domaine précis. Elle permet de recueillir, analyser et exploiter des informations sur les nouvelles technologies afin d’anticiper les changements, innover, rester compétitif et saisir des opportunités. </p>
                <br></br>
                <h3>Le sujet de ma veille technologique</h3>
                <p>Ma veille parle de l’intelligence artificielle. J’ai regroupé plusieurs articles récents, en me basant sur des sites sérieux, des conférences et des recherches fiables. Le but est de mieux comprendre ce que l’IA change dans notre quotidien.</p>
                <br></br>
                <h3>Les points importants</h3>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Veille technologique</h2>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider pt-4'>
                            {subjects.map(subject =>
                                <div key={subject.id} className='item ps-2'>
                                    <img src={subject.image} alt="img" />
                                    <h5>{subject.subject} 
                                        <a href={subject.link} target="_blank" className="d-block pt-2">
                                            En savoir plus
                                        </a>
                                    </h5>
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