import styles from "./SkillList.module.css";

export default function SkillList({ list }: { list: string[] }) {
  return (
    <ul className="clean-list is-small-box-list">
      {list.map((item) => (
        <li key={item} className="small-box">
          {item}
        </li>
      ))}
    </ul>
  );
}
