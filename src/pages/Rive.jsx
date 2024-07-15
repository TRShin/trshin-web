import { useNavigate } from 'react-router-dom'; 
import '../index.css';
import styles from '../css/rive.module.css';
import RingSilent from '../components/RingSilent'; 
import Return from '../components/Return';

function Rive() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div className='content'>
            <div className={`container ${styles.container}`}>
                <Return to="/Mini-Projects" />
                <div className={styles.short_info}>
                    <h1 className={styles.name_1}>Rive for Web</h1>
                    <p className='secondary'>Simple, Efficient, Easy.</p>
                </div>
                <div className={styles.about}>
                    <p> 
                        If you are familiar with animating in software such as Adobe After Effects or Figma,
                        Rive provides a familiar interface for creating animations, with the benefit of its
                        state machine, a system for managing animation and defining logic for interactivity 
                        in an intuitive node-based graph. In the following interactive examples, I implement 
                        simple animations created using Rive with React JS.
                        <br /><br />
                        
                    </p>
                    <h1>1. Ring-Silent from IPhone</h1>
                </div>

                <div className={styles.work}>
                    <RingSilent />
                </div>


                <div className={styles.about}>
                    <p>
                        What I like about Rive is the ability to design in Illustrator, animate in After Effects,
                        and then import to Rive as a .json Lottie file via Bodymovin. This process is efficient 
                        (in the sense of following a standard workflow) and is definitely simpler and faster
                        for some cases of implementing animation, whether interactive or not.
                        <br /><br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Rive;