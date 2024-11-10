import Image from "next/image";
import pimage2 from '@/public/images/projectimg.jpg';
import pimg3 from '@/public/images/pimg3.jpg';
import styles from "./page.module.css";

const Projects = () => {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>PortFolio Projects</h1>

                <div className={styles.projectItem}>
                    <div className={styles.projectText}>
                        <h1 className={styles.projectTitle}>Project1</h1>
                        <h2 className={styles.projectSubtitle}>Resume-Builder</h2>
                        <p className={styles.projectDescription}>
                            is simply dummy text of the printing and typesetting industry. Lorem
                            has been the industry s standard dummy text ever since the 1500s when
                            specimen book. It has survived not only five centuries is simply dummy
                            text of the printing and typesetting industry. Lorem has been the
                            industry s standard dummy text ever since the 1500s when specimen book.
                            It has survived not only five centuries
                        </p>
                        <div className={styles.projectLinks}>
                            <a href="https://static-intereactive-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className={styles.projectButton}>Vercel Link</button>
                            </a>
                            <a href="https://github.com/usaidkhan123/Hackathon-all-milestone.git" target="_blank" rel="noopener noreferrer">
                                <button className={styles.projectButton}>Repo Link</button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.projectImageContainer}>
                        <Image src={pimage2} alt="Project image 1" width={250} height={250} className={styles.projectImage} />
                    </div>
                </div>

                <div className={styles.projectItem}>
                    <div className={styles.projectText}>
                        <h1 className={styles.projectTitle}>Project2</h1>
                        <h2 className={styles.projectSubtitle}>SimpleWebsite By Using Next.Js</h2>
                        <p className={styles.projectDescription}>
                            is simply dummy text of the printing and typesetting industry. Lorem
                            has been the industry s standard dummy text ever since the 1500s when
                            specimen book. It has survived not only five centuries is simply dummy
                            text of the printing and typesetting industry. Lorem has been the
                            industry s standard dummy text ever since the 1500s when specimen book.
                            It has survived not only five centuries
                        </p>
                        <div className={styles.projectLinks}>
                            <a href="https://static-intereactive-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button className={styles.projectButton}>Vercel Link</button>
                            </a>
                            <a href="https://github.com/usaidkhan123/Next.Js-Assignment-3-Tailwind-css-.git" target="_blank" rel="noopener noreferrer">
                                <button className={styles.projectButton}>Repo Link</button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.projectImageContainer}>
                        <Image src={pimg3} alt="Project image 2" width={250} height={250} className={styles.projectImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
