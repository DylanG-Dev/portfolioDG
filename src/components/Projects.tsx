import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState} from "react";
import * as XLSX from 'xlsx';
import 'react-multi-carousel/lib/styles.css';
import comp1 from "../assets/img/JeuDuPendu.png";
import comp2 from "../assets/img/FormulaireHTMLCSSJS2.png";
import comp3 from "../assets/img/FormulaireHTMLCSSJQUERY1.png";
import comp4 from "../assets/img/appLog.png";
import comp5 from "../assets/img/formPizza.png";
import comp6 from "../assets/img/jeuRoulette.png";
import comp7 from "../assets/img/vitamines.png";
import comp8 from "../assets/img/WeatherApp.png";

export const Projects = () => {

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleOpen = async () => {
        try {

        const response = await fetch('/files/synthese-bts.xlsx');
        setShow(true);

        } catch (err) {
        console.error("Impossible de charger le fichier:", err);
        }
    };

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <h2>L'épreuve E5 c'est quoi ?</h2>
                    <p>L’épreuve E5 est une étape importante du BTS SIO. Elle demande de présenter au moins deux projets liés par un même contexte et en rapport avec l’option choisie, dans mon cas, SLAM. Cette épreuve sert à évaluer une des deux situations professionnelles réalisées pendant les deux années de formation. Elle est aussi accompagnée d’un tableau où sont détaillées les compétences développées et mises en œuvre à travers les projets présentés.</p>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <h2>Tableau de synthèse des réalisations professionnelles :</h2>
                </Row>
                <Row>
                <table className="table table-bordered table-striped table-responsive">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Gérer le patrimoine informatique</th>
                                <th scope="col">Répondre aux incidents et aux demandes d’assistance et
                                    d’évolution
                                </th>
                                <th scope="col">Développer la présence en ligne de l’organisation</th>
                                <th scope="col">Travailler en mode projet</th>
                                <th scope="col">Mettre à disposition des utilisateurs un service
                                    informatique</th>
                                <th scope="col">Organiser son développement professionnel</th>
                            </tr>
                        </thead>
                        <tbody><tr>
                            <th colSpan={7} className="text-center bg-light" scope="row">Réalisation en cours de formation<em style={{ color: 'grey', fontSize: 'smaller' }}></em>
                            </th>
                        </tr>
                        </tbody><tbody>
                            <tr>
                                <th className="l" scope="row">Linkedin</th>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className=" w-25 text-center align-middle btn_tab_synthese"><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Github<br></br></th>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>

                                <td className="w-25 btn_tab_synthese text-center align-middle"><a href="" target="_blank"><i className="fa-brands fa-github fa-2xl" aria-hidden="true"></i></a></td>
                            </tr>

                            <tr>
                                <th scope="row">Développement d'un jeu de la roulette avec html/css, php, MySQL, javascript et Jquery<br></br> </th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    {/* <a href={comp6} data-lightbox="jeu_roulette">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                    <a href={comp6} data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a> */}
                                </td> 
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp6} data-lightbox="jeu_roulette" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Développement d'un site web statique pour une pizzeria avec html/css<br></br></th>
                                <td className="w-25"></td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    {/* <a href={comp5} data-lightbox="">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a> */}



                                </td>
                                <td className="w-25"></td>
                                <td>
                                </td>
                                <td> </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp5} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a></td>
                            </tr>

                            <tr>
                                <th scope="row">Développement d'une interface graphique d'une application d'analyse de log d'agence de location de voiture avec partie admin et loueur réalisé en php, MySQL, html/css, bootstrap</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp4} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp4} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp4} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp4} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp4} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp4} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                            </tr>

                            <tr>
                                <th scope="row">Conception et développement d'un site web pour l'association VITAMINES</th>
                                <td className="w-25"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp7} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                    {/* <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a> */}
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp7} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp7} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td></td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp7} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                            </tr>
                            

                            <tr>
                                <th colSpan={7} className="text-center bg-light" scope="row">
                                    Réalisations en milieu professionnel en cours de première année
                                </th>
                            </tr><tr>
                                <th scope="row">Conception et développement d'un jeu du pendu avec HTML/CSS, javascript, xpx et bootstrap</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp1} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp1} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25"></td>
                                <td className=" w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp1} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                            </tr>

                            <tr>

                            </tr><tr>
                                <th scope="row">Conception et développement d'un formulaire pour insérer de la documentation avec HTML/CSS, javascript, xpx, bootstrap</th>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp2} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp2} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp2} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp2} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp2} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp2} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                            </tr>


                            <tr>

                            </tr><tr>
                                <th scope="row">Conception et développement d'un formulaire pour alimenter un wiki avec HTML/CSS, javascript, xpx, bootstrap et jquery</th>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp3} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp3} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp3} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp3} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp3} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp3} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                            </tr>
                            
                            <tr>
                                <th colSpan={7} className="text-center bg-light" scope="row">
                                    Exemple de réalisation en auto-didacte
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">Conception et développement d'une application météo avec html/css et javascript</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp8} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    {/* <a href={comp8} data-lightbox="">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a> */}

                                    {/* <a href={comp8} data-lightbox="Weather App"></a>
                                    <a href="" data-lightbox=""></a>
                                    <a href="" data-lightbox=""></a> */}
                                </td>
                                <td className="w-25"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp8} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
                <Row>
                    <a href="/files/synthese-bts.xlsx" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Télécharger le tableau de compétences
                    </a>
                </Row>
            </Container>
            {/* <img className='background-image-left' src={colorSharp} /> */}
        </section>
    )
}                   