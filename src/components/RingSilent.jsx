import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import styles from '../css/ringsilent.module.css';

function RingSilent() {

    const STATE_MACHINES = ["Bar-State-Machine", "Bell-State-Machine"];

    const { rive, RiveComponent } = useRive({
        src: "./ring.riv",
        stateMachines: STATE_MACHINES, 
        autoplay: true,
    });

    const outIdle = useStateMachineInput(rive, "Bar-State-Machine", "idle");

    const buttonAction = () => {
        if (outIdle) {
            outIdle.fire();
        }
    }

    return (
        <div className={styles.all}>
            <div className={ styles.holding }>
                <RiveComponent style={{ width: "250px" }}/>
            </div>
            <div className={ styles.buttonContainer }>
                    <button onClick={buttonAction}>Idle</button>
            </div>
        </div>
    );
}

export default RingSilent;