import { useState } from 'react';
import InnerMenu from './innerMenu';
import styles from './menu.module.css';

export default function Menu() {

    const [showInnerMenu, setShowInnerMenu] = useState(false);

    return (
        <div className={styles.menuNode}>
            <a href="#" onClick={() => setShowInnerMenu(true)}>Menu</a>
            <InnerMenu 
                onClose={() => setShowInnerMenu(false)}
                show={showInnerMenu}>

            </InnerMenu>
        </div>
        
    )
}