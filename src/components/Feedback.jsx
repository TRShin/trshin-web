import React from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';    
import styles from '../css/feedback.module.css';

function Feedback() {
    const { register, control, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log('Form Submitted', data);
    }

    return (
        <div className={styles.feedback}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Name</label>
                <input 
                    type="text" 
                    id="username" 
                    {...register("username")}
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email"  
                    {...register("email")}
                />
                
                <label htmlFor="feedback">Feedback</label>
                <textarea id="feedback" {...register("feedback")}></textarea>

                <button type="submit" className={styles.submit}>Submit</button>
            </form>
            <DevTool control={control}/>
        </div>
    );
}

export default Feedback;