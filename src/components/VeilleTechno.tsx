import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import comp1 from "../assets/img/IASoftwareEngineering.png";
import comp2 from "../assets/img/IAEnvironment.png";
import comp3 from "../assets/img/IAHealthcare.png";
import comp4 from "../assets/img/IAEducation.png";
import comp5 from "../assets/img/IACybersecurity.png";
import comp6 from "../assets/img/IAPoliticsChina.png";
import comp7 from "../assets/img/IAGenerativeArts.png";
import comp8 from "../assets/img/IAInnovation.png";
import comp9 from "../assets/img/AIEthics.png";

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

    return (
        <section className="veille" id="veille">
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
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={comp9} alt="img" />
                                <h5>Comment l'IA est utilisée en philosophie et dans la société <br></br><br></br><a href="https://www.radiofrance.fr/franceinter/podcasts/la-question-philo/la-question-philo-du-samedi-19-octobre-2024-8515780" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp1} alt="img" />
                                <h5>Comment l'IA impacte l'économie et l'emploi <br></br><br></br><a href="https://www.polytechnique-insights.com/tribunes/digital/intelligence-artificielle-quelles-consequences-pour-le-travail/" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp8} alt="img" />
                                <h5>Comment l'IA est utilisée dans l'innovation scientifique <br></br><br></br><a href="https://www.enseignementsup-recherche.gouv.fr/fr/intelligence-artificielle-de-quoi-parle-t-91190" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp2} alt="img" />
                                <h5>Comment l'IA impacte l'environnement <br></br><br></br><a href="https://www.ecologie.gouv.fr/actualites/intelligence-artificielle-durable" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp3} alt="img" />
                                <h5>Comment l'IA impacte le domaine de la santé <br></br><br></br><a href="https://www.inserm.fr/dossier/intelligence-artificielle-et-sante/" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp4} alt="img" />
                                <h5>Comment l'IA impacte l'éducation <br></br><br></br><br></br><a href="https://www.ac-paris.fr/l-intelligence-artificielle-dans-l-education-130992" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp5} alt="img" />
                                <h5>Comment l'IA impacte le domaine de la cyber-sécurité <br></br><br></br><a href="https://cyber.gouv.fr/intelligence-artificielle-les-travaux-de-lanssi" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp6} alt="img" />
                                <h5>Comment l'IA est utilisée en tant qu'instrument politique <br></br><br></br><a href="https://hommesetsciences.fr/geopolitque-des-ia-et-partition-du-monde/" target="_blank">En savoir plus</a></h5>
                            </div>
                            <div className='item'>
                                <img src={comp7} alt="img" />
                                <h5>Comment l'IA est utilisée dans l'art, les médias et la culture <br></br><br></br><a href="https://www.sorbonne-universite.fr/dossiers/intelligence-artificielle/quand-lart-rencontre-lintelligence-artificielle" target="_blank">En savoir plus</a></h5>
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