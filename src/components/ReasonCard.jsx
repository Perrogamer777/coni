import React, { useState, useEffect } from 'react';
import InteractiveText from './InteractiveText';
import styles from '../styles/Home.module.css';

const ReasonCard = ({ reason, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, index * 100);

        return () => clearTimeout(timer);
    }, [index]);

    const isInteractiveReason = reason.includes('Me gusta que nos riamos los D, V y N');
    console.log('Checking reason:', reason);
    console.log('Is interactive?', isInteractiveReason);

    return (
        <div 
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{ 
                '--index': index,
                animationDelay: `${index * 0.1}s`
            }}
        >
            <p>
                {isInteractiveReason ? (
                    <InteractiveText text={reason} />
                ) : (
                    reason
                )}
            </p>
        </div>
    );
};

export default ReasonCard;