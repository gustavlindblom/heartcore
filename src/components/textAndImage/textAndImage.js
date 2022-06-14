import styles from './textAndImage.module.css';

export default function TextAndImage({ component }) {
    return (
        <div className={styles.textAndImageContainer}>
            <h2>{component.title}</h2>
            <div dangerouslySetInnerHTML={{__html: component.text}}></div>
        </div>
    )
}