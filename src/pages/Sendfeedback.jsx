import { useNavigate } from 'react-router-dom'; 
import '../css/index.css';
import styles from '../css/feedback.module.css';
import Return from '../components/Return';
import Feedback from '../components/Feedback';

function Sendfeedback() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className="content">
            <div className={`container ${styles.container}`}>
                <Return to="/Home" />
                <div className={styles.short_info}>
                    <p>Any issues or feedback, send them here.</p>
                </div>
                <div className={styles.feedbackWrap}>
                    <Feedback />
                </div>
            </div>
        </div>
    );
}

export default Sendfeedback;