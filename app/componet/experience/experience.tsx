import Image from 'next/image';
import htmlimg from '@/public/images/bghtml3.png';
import cssimg from '@/public/images/bgcss.png';
import jsimg from '@/public/images/bgjs.png';
import styles from "./page.module.css";

const Experience = () => {
    return (
        <section id='experience'>
            <div className={styles.experienceContainer}>
                <h1 className={styles.experienceTitle}>Experiences</h1>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.htmlImage}
                        src={htmlimg}
                        width={250}
                        height={250}
                        alt="HTML experience"
                    />
                    <Image
                        className={styles.cssImage}
                        src={cssimg}
                        width={155}
                        height={155}
                        alt="CSS experience"
                    />
                    <Image
                        className={styles.jsImage}
                        src={jsimg}
                        width={130}
                        height={130}
                        alt="JavaScript experience"
                    />
                </div>
            </div>
        </section>
    )
}

export default Experience;
