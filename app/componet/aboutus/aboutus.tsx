import styles from "./page.module.css";

const About = () => {
    return (
        <section id="aboutus">
            <div className={styles.aboutBackground}>
                <div className={styles.aboutContent}>
                    <h1 className={styles.aboutTitle}>About Me</h1>
                    <p className={styles.aboutText}>
                        is simply dummy text of the printing and typesetting industry. Lorem <br />
                        has been the industry s standard dummy text ever since the 1500s when <br />
                        specimen book. It has survived not only five centuries is simply dummy <br />
                        text of the printing and typesetting industry. Lorem has been the industry s <br />
                        standard dummy text ever since the 1500s when specimen book. It has survived not only five centuries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
