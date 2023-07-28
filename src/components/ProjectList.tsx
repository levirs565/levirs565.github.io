import Image from "next/image";
import styles from "./ProjectList.module.css";

export interface ProjectItem {
  name: string;
  desc: string;
  technologies: string[];
  githubUrl?: string;
  appUrl?: string;
  image: string;
}

export default function ProjectList({ list }: { list: ProjectItem[] }) {
  return (
    <ul className={`clean-list ${styles.list}`}>
      {list.map((item) => (
        <li key={item.name} className={styles.item}>
          <div className={styles["up-line"]}></div>
          <div className={styles["down-line"]}></div>
          <div className={styles["connect-line"]}></div>
          <div className={styles["item-detail"]}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>

            <div className={styles["item-technology"]}>
              <p>Technology:</p>
              <ul>
                {item.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="clean-list is-small-box-list">
              {item.githubUrl && (
                <a
                  className="small-box is-focusable"
                  href={item.githubUrl}
                  target="_blank"
                >
                  Open in Github
                </a>
              )}
              {item.appUrl && (
                <a
                  className="small-box is-focusable"
                  href={item.appUrl}
                  target="_blank"
                >
                  Open Application
                </a>
              )}
            </div>
          </div>
          <div className={styles["item-image"]}>
            <Image width={250} height={250} src={item.image} alt={item.name} />
          </div>
        </li>
      ))}
    </ul>
  );
}
