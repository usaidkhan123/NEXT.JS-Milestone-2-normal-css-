import Image from "next/image";
import image from '@/public/images/bgwimg.png';
import styles from "./page.module.css";

const Hero = () => {
    return (
        <section id="hero" className={styles.heroSection}>
            <div className={styles.heroBackground}>
                <div className={styles.heroTextContainer}>
                    <p className={styles.introText}>I am,</p>
                    <h1 className={styles.heroTitle}>
                        Muhammad <br />
                        <span className={styles.heroName}>Usaid</span>
                    </h1>
                    <p className={styles.subtitle}>FullStack Developer based in Karachi</p>
                    <button className={styles.connectButton}>Stay Connected</button>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    className={styles.heroImage}
                    src={image}
                    alt="hero image"
                />
            </div>
        </section>
    );
};

export default Hero;
