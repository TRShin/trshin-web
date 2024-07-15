import { useNavigate } from 'react-router-dom'; 
import '../index.css';
import styles from '../css/home.module.css';

function Home() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className='content'>
            <div className='container'>
                <div className={styles.short_info}>
                    <h1>Trentin Shin</h1>
                    <p className='secondary'>Software Engineer, </p>
                </div>

                <div className={styles.about}>
                    <p> 
                        As a current student pursuing a <span className='highlight'>B.S. of Computer Science</span>, I engage in the 
                        full-stack development process of software.
                        <br /><br />
                        I am also a learner of math and engineering, aspiring to apply skills 
                        at their intersection with computer science in professional and 
                        personal projects.
                    </p>
                </div>

                <div className={styles.two_col}>
                    <div className={styles.projects}>
                        <p className={styles.projects_p}>Projects</p>
                        <div className={styles.proj_list}>
                            <div className={styles.p_body} onClick={() => handleNavigation()}>
                                <div className={styles.p_title}>
                                    <span>TBD</span>
                                </div>
                                <div className={styles.p_des}>
                                    <span>TBD (maybe c++) </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blog}>
                        <p className={styles.blog_p}>Play</p>
                        <div className={styles.proj_list}>
                            <div className={styles.p_body} onClick={() => handleNavigation()}>
                                <div className={styles.p_title}>
                                    <span>Motion</span>
                                </div>
                                <div className={styles.p_des}>
                                    <span>3D/2D Motion Design</span>
                                </div>
                            </div>
                            <div className={styles.p_body} onClick={() => handleNavigation('/Mini-Projects')}>
                                <div className={styles.p_title}>
                                    <span>Mini Projects</span>
                                </div>
                                <div className={styles.p_des}>
                                    <span>UI, R3F, C++, Math, and More</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className={styles.work_h}>
                    <div className={styles.work_name}>
                        <p>Work</p>
                    </div>
                    <div className={styles.work_body_h}>
                        <div className={styles.work_text}>
                            <span className={styles.work_t}>Project Work</span>
                            <div className={styles.line}></div>
                            <p className={styles.work_date}>2023 to Now</p>
                        </div>
                    </div>
                </div>

                <div className={styles.contact_wrapper}>
                    <div className={styles.contact_big}>
                        <p>Contact</p>
                    </div>
                    <p className={styles.contact_text}>
                        Reach me at&nbsp;<a href="mailto:trshin@uci.edu">trshin@uci.edu</a>&nbsp;or find me on&nbsp;<a href="https://www.linkedin.com/in/trentin-shin-b1b4a226b/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">LinkedIn</a>.
                    </p>
                </div>
                <div className={styles.contact}>
                    {/*<div className={styles.buttons}>
                        <a href="https://github.com/TRShin" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <button className={styles.b1}>
                                <img src="./src/assets/github inv.png" alt="github" />
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/trentin-shin-b1b4a226b/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                            <button className={styles.b2}>
                                <img src="./src/assets/linked in inv.png" alt="linkedin" />
                            </button>
                        </a>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Home;