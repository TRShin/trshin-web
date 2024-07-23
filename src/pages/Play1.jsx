import { useNavigate } from 'react-router-dom'; 
import '../css/index.css';
import styles from '../css/play1.module.css';
import Return from '../components/Return';

function Play1() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className='content'>
            <div className={`container ${styles.container}`}>
                <Return to="/Home" />

                <div className={styles.short_info}>
                    <h1 className={styles.name_1}>Mini Projects</h1>
                    <p className='secondary'>UI, C++, Math, Stuff I'm Learning</p>
                </div>

                <div className={styles.work}>
                    <div className={styles.work_body} onClick={() => handleNavigation('/Mini-Projects/Rive')}>
                        <div className={styles.work_text}>
                            <p>Rive Interactions</p>
                            <div className={styles.line}></div>
                            <p className={styles.work_date}>7.8.24</p>
                            <div className={styles.tag}>
                                <div className={styles.js_icon}></div>
                                <p>web</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play1;