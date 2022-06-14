import styles from './header.module.css';

export default function Header({children}) {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                {children}
            </div>
        </header>
    )
}