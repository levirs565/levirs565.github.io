import Image from "next/image";
import styles from "./ProjectList.module.css";
import { CSSProperties } from "react";
import { ExternalLink } from "./ExternalLink";

const lineColors = ["green", "red", "blue"];

function getUpDownStyle(index: number): CSSProperties {
  const color = lineColors[index % lineColors.length];
  return {
    "--from": `var(--color-${color}-500)`,
    "--to": `var(--color-${color}-950)`,
  } as CSSProperties;
}

function getConnectStyle(index: number): CSSProperties {
  const from = lineColors[index % lineColors.length];
  const to = lineColors[(index + 1) % lineColors.length];
  return {
    "--from": `var(--color-${from}-950)`,
    "--to": `var(--color-${to}-950)`,
  } as CSSProperties;
}

function getImageStyle(index: number): CSSProperties {
  const color = lineColors[index % lineColors.length];
  return {
    "--bg": `var(--color-${color}-500)`,
  } as CSSProperties;
}
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
      {list.map((item, index) => (
        <li key={item.name} className={styles.item}>
          <div
            className={styles["up-line"]}
            style={getUpDownStyle(index)}
          ></div>
          <div
            className={styles["down-line"]}
            style={getUpDownStyle(index)}
          ></div>
          <div
            className={styles["connect-line"]}
            style={getConnectStyle(index)}
          ></div>
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
                <ExternalLink href={item.githubUrl}>
                  Open in Github
                </ExternalLink>
              )}
              {item.appUrl && (
                <ExternalLink href={item.appUrl}>Open Application</ExternalLink>
              )}
            </div>
          </div>
          <div className={styles["item-image"]} style={getImageStyle(index)}>
            <Image width={250} height={250} src={item.image} alt={item.name} />
          </div>
        </li>
      ))}
    </ul>
  );
}
