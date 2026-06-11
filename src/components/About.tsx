import { Container, Row, Col, Nav } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h2 className="tagline justify-content-center">A propos</h2>
                        <br></br>
                        <h3>Présentation</h3>
                        <p>Actuellement étudiant en BTS SIO option SLAM au sein de l'ORT, je vous invite à découvrir sur ce portfolio un aperçu de mon parcours académique et professionnel. Vous y trouverez mon CV ainsi qu’une présentation des différents projets que j’ai réalisés au cours de ma formation. </p>
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
                        <h4>Mes expériences professionnelles</h4>
                        <br></br>
                        <p>Stage en tant que développeur web Full-Stack chez Infocosme pour ma 1ère année de BTS SIO option SLAM du 26 mai 2025 au 4 juillet 2025 
                            <br></br>
                            </p>
                        <p>Stage en tant que DevOps chez GTD Sistemas de Informacion pour ma 2ème année de BTS SIO option SLAM du 5 janvier 2026 au 13 février 2026 
                            <br></br>
                        </p>
                        <br></br>
                        <h2>Mon parcours</h2>
                        <br></br>
                        <h4>2024-2026</h4>
                        <h4>ORT Lyon, Lyon, France</h4>
                        <p>BTS Services informatiques aux organisations Option Solutions Logicielles et Applications Métiers </p>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}