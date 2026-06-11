import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';

import comp1 from "../assets/img/JeuDuPendu.png";
import cond_expr from "../assets/img/cond_expr_infocosme.png";

import xpx_doc from "../assets/img/xpx_doc.png";

import comp21 from "../assets/img/FormulaireHTMLCSSJS2.png";
import comp22 from "../assets/img/firstFormFilledPART1.png";
import comp23 from "../assets/img/firstFormFilledPART2.png";
import comp24 from "../assets/img/resultFirstForm.png";

import comp31 from "../assets/img/secondFormFilled.png";
import comp32 from "../assets/img/FactorielleInputPART2.png";
import comp33 from "../assets/img/FactorielleOutPutPART2.png";
import comp34 from "../assets/img/resultSecondForm.png";

import comp4 from "../assets/img/appLog.png";
import commit_php_log from "../assets/img/commit_app_php_log.png"
import tree_php_log from "../assets/img/tree_php_log.png";

import arianeScreen from "../assets/img/ariane.jpg";
import comp42 from "../assets/img/exempleRecréationDisque.png";
import software_architecture_renaissance from "../assets/img/software_architecture_renaissance.png";

import page_inscription_laravel from "../assets/img/page_inscription_larvel.png";
import comp54 from "../assets/img/pageAccueil.png";
import update_function from "../assets/img/update_function_cinema_laravel.png";
import tree_project_laravel from "../assets/img/tree_project_laravel_cinema.png";
import global_schedule from "../assets/img/global_schedule_lot2_3_4.png";

import proj_boxe_rhone_architecture from "../assets/img/architecture_projet_boxe_rhone.png";
import creation_groupe from "../assets/img/creation_groupe_compta.png";

import sshd_config from "../assets/img/sshd_config_kaliLinux.png";
import red_flag_ssh from "../assets/img/red_flag_ssh_hardening.png";

import infra_racine_carree from "../assets/img/infra_racineCarree.png";
import webpage_tp11 from "../assets/img/webpage_ort_tp11.png";

import web_page from "../assets/img/web_page_tp_debian_mysql.png";
import maria_db_cli from "../assets/img/Maria_DB_Debian_mysql.png";


import main_analyze_log from "../assets/img/java_analyze_log_main.png";
import java_table_log from "../assets/img/table_log_java.png"

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

    return (
        <section className="projects pt-5" id="projects">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h2>L'épreuve E5 c'est quoi ?</h2>
                        <p>
                            L’épreuve E5 est une étape importante du BTS SIO. Cette épreuve vise à évaluer chez la personne candidate l’acquisition des compétences décrites dans le bloc de compétences « Support et mise à disposition de services informatiques », à savoir :
                        </p>
                        <ul>
                            <li>Gérer le patrimoine informatique ;</li>
                            <li>Répondre aux incidents et demandes d’assistance et d’évolution ;</li>
                            <li>Développer la présence en ligne de l’organisation ;</li>
                            <li>Travailler en mode projet ;</li>
                            <li>Mettre à disposition des utilisateurs un service informatique ;</li>
                            <li>Organiser son développement professionnel.</li>
                        </ul>
                    </Col>
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
                        </tbody>
                        <tbody>
                            <tr>
                                <th className="l" scope="row">Linkedin</th>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className=" w-25 text-center align-middle btn_tab_synthese"><a href="https://www.linkedin.com/in/dylan-gamet-70678a309/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Github<br></br></th>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25"></td>

                                <td className="w-25 btn_tab_synthese text-center align-middle"><a href="https://github.com/DylanG-Dev/" target="_blank"><i className="fa-brands fa-github fa-2xl" aria-hidden="true"></i></a></td>
                            </tr>

                            <tr>
                                <th scope="row">Mise en place d'un système d'information avec DHCP, Active Directory, site web, serveur web et d'une administration pour le comité départemental du  Rhône de boxe française<br></br> </th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={proj_boxe_rhone_architecture} data-lightbox="jeu_roulette" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td> 
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={proj_boxe_rhone_architecture} data-lightbox="jeu_roulette" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td> 
                                <td className="w-25"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={creation_groupe} data-lightbox="jeu_roulette" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={proj_boxe_rhone_architecture} data-lightbox="jeu_roulette" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle"></td>
                            </tr>

                            <tr>
                                <th scope="row">Evolution de l'infrastructure réseau de l'ORT via la société Racine Carée<br></br></th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={infra_racine_carree} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={infra_racine_carree} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={infra_racine_carree} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={infra_racine_carree} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={webpage_tp11} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle"></td>
                            </tr>

                            <tr>
                                <th scope="row">Développement d'une interface graphique d'une application pour visualiser les log d'agences de location de voiture, avec partie admin et loueur réalisé en PHP, MySQL, HTML/CSS, Bootstrap</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={tree_php_log} data-lightbox="" target="_blank">
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
                                    <a href={commit_php_log} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25">
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                </td>

                            </tr>

                            <tr>
                                <th scope="row">Mise en œuvre d'une infrastructure LAMP (Linux, Apache, MySQL, PHP) et déploiement d'une application web de gestion de parc automobile sous Debian</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={maria_db_cli} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={web_page} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={web_page} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={web_page} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={web_page} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                </td>

                            </tr>

                            <tr>
                                <th scope="row">Conception et développement d'une application Java d'analyse de fichier de log d'agences de location de voiture</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={main_analyze_log} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={main_analyze_log} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle"></td>
                                <td className="w-25">
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={java_table_log} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                </td>

                            </tr>

                            <tr>
                                <th scope="row">Hardening d'un service SSH sous Linux Debian</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={sshd_config} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={red_flag_ssh} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={sshd_config} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle"></td>

                            </tr>


                            <tr>
                                <th scope="row">Conception et développement d'une application web de gestion et de réservation de séance au cinéma pour l'établissement "CineForAll" avec le framework Laravel</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={tree_project_laravel} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={update_function} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp54} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={global_schedule} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                        
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={page_inscription_laravel} data-lightbox="" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                </td>

                            </tr>
                            

                            <tr>
                                <th colSpan={7} className="text-center bg-light" scope="row">
                                    Réalisations en milieu professionnel en cours de première année
                                </th>
                            </tr><tr>
                                <th scope="row">Développement d'une application web interactive. Programmation d'un jeu du pendu en XPX, JavaScript et Bootstrap avec parsing de données CSV</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp1} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={cond_expr} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25"></td>
                                <td className=" w-25"></td>
                                <td className="w-25"></td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    
                                </td>
                            </tr>

                            <tr>

                            </tr><tr>
                                <th scope="row">Conception et développement d'un module de création de documentation interne. Interface dynamique (JavaScript, Bootstrap) et traitement côté serveur via le langage propriétaire XPX</th>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={xpx_doc} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp21} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp24} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp23} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp22} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>

                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                </td>

                            </tr>


                            <tr>

                            </tr><tr>
                                <th scope="row">Conception et développement d'un module de création de documentation interne. Interface dynamique (JavaScript, Bootstrap, JQuery) et traitement côté serveur via le langage propriétaire XPX</th>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={xpx_doc} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp31} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp34} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp33} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp32} target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className=" w-25 btn_tab_synthese text-center align-middle">
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={7} className="text-center bg-light" scope="row">
                                    Réalisations en milieu professionnel en cours de seconde année
                                </th>
                            </tr>

                            <tr>
                                <th scope="row">Projet Renaissance : Maintenance et évolution d'un outil logiciel de sauvegarde et de restauration sur un parc hétérogène en Linux</th>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={software_architecture_renaissance} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={comp42} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25">
                                </td>
                                <td className="w-25">
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                    <a href={arianeScreen} data-lightbox="jeuPendu" target="_blank">
                                        <i className="fa-solid fa-image fa-2xl" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td className="w-25 btn_tab_synthese text-center align-middle">
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </Row>
            </Container>
        </section>
    )
} 
