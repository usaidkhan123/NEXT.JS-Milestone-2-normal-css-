import styles from "./page.module.css";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>
                © 2024 My Footer. All rights reserved
            </p>
        </div>
    );
};

export default Footer;
