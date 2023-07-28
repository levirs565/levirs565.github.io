import { RiArrowRightLine } from "react-icons/ri";
import styles from "./ExternalLink.module.css";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: any;
}) {
  return (
    <a className={styles.link} href={href} target="_blank">
      <span>{children}</span>
      <RiArrowRightLine size="1.25rem" />
    </a>
  );
}
