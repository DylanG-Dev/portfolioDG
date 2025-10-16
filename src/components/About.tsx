import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =  ["étudiant en BTS SIO option SLAM"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    

    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h2 className="tagline justify-content-center">A propos</h2>
                        <br></br>
                        <h3>Présentation</h3>
                        <p>Actuellement étudiant en BTS SIO option SLAM au lycée ORT, je vous invite à découvrir sur ce portfolio un aperçu de mon parcours académique et professionnel. Vous y trouverez mon CV ainsi qu’une présentation des différents projets que j’ai réalisés au cours de ma formation. </p>
                        <br></br>
                        <h2>Qu'est-ce que le BTS SIO ?</h2>
                        <p>Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de niveau Bac+2. Il forme des experts en informatique, compétents aussi bien en développement qu'en administration et maintenance des réseaux informatiques.</p>
                        <br></br>
                        <h2>Le BTS SIO propose deux options :</h2>
                        <h6>Option SISR</h6>
                        <p>L’option Solutions d’infrastructure, systèmes et réseaux prépare des spécialistes en réseaux et équipements informatiques (installation, maintenance, sécurité). En obtenant un BTS SIO option SISR, vous serez en mesure de gérer et administrer le réseau d’une organisation tout en garantissant sa sécurité et sa maintenance.</p>
                        <p>Les titulaires du BTS SIO option SISR peuvent exercer les métiers suivants : </p>
                        <ul>
                            <li>Administrateur systèmes et réseaux</li>
                            <li>Informaticien support et déploiement</li>
                            <li>Pilote d’exploitation</li>
                            <li>Support systèmes et réseaux</li>
                        </ul>
                        <br></br>
                        <h6>Option SLAM</h6>
                        <p>L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société).</p>
                        <p>Les techniciens supérieurs en informatique option SLAM, sont préparés aux métiers de : </p>
                        <ul>
                            <li>Développeur d’applications informatiques</li>
                            <li>Développeur informatique</li>
                            <li>Analyste d’applications ou d’études</li>
                        </ul>
                        <br></br>
                        <h2>Mon parcours</h2>
                        <br></br>
                        <h4>Mes expériences Professionnelles</h4>
                        <br></br>
                        <p>Stage à la piscine au mois de mars 2024</p>
                        <p>Stage chez infocosme pour ma 1ère année de BTS SIO du 26 mai au 4 juillet 2025 <br></br><a href="/files/RapportStageDylanGamet.pdf" target="_blank" rel="noopener noreferrer">Rapport de stage</a></p>
                        <br></br>
                        <h2>Mon parcours scolaire</h2>
                        <br></br>
                        <h4>2024-2026</h4>
                        <h4>Lycée ORT, Lyon, France</h4>
                        <p>BTS Services informatiques aux organisations Option Solutions Logicielles et Applications Métiers </p>
                        <a href="https://ort-france.fr/lyon/" target="_blank">Site ORT</a>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}