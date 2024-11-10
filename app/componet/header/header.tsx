import Image from "next/image";
import codeimage from "@/public/images/img.jpg";
import Link from "next/link";
import styles from "./page.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logoImage}
                    src={codeimage}
                    width={35}
                    height={35}
                    alt="logo"
                />
                <h1 className={styles.title}>PortFolio.X</h1>
            </div>
            
            <div className={styles.menuButtonContainer}>
                <button className={styles.menuButton}>☰</button>
            </div>
        
            <nav className={styles.navLinks}>
                <Link href="#hero" className={styles.navLink}>Home</Link>
                <Link href="#projects" className={styles.navLink}>Projects</Link>
                <Link href="#aboutus" className={styles.navLink}>About Us</Link>
                <Link href="#experience" className={styles.navLink}>Experiences</Link>
            </nav>
        
            <button className={styles.cvButton}>CV</button>
        </div>
    );
};

export default Header;
