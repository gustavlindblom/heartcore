import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from './menu.module.css';

export default function InnerMenu({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    const innerMenuContent = show ? (
        <div className={styles.menu}>
            <div className={styles.menuOverlay}></div>
            <div className={styles.menuInner}>
                <button className={styles.menuCloseButton} onClick={() => onClose()}>x</button>
                <div className={styles.menuTopContainer}>
                    <div style={{ marginBottom: '4rem', marginTop: '2.rem' }}>
                        <h3 className={styles.menuTopHeading}>Gustav Lindblom</h3>
                        <h5 className={styles.menuTopSubheading}>Pentia</h5>
                    </div>
                </div>
            </div>
        </div>
        
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            innerMenuContent,
            document.getElementById('menu')
        );
    } else {
        return null;
    }
}