import Image from "next/image";
import styles from "./page.module.css";
import AppBar from "@/components/AppBar";
import Hero from "@/components/Hero";
import SkillList from "@/components/SkillList";
import ProjectList, { ProjectItem } from "@/components/ProjectList";
import VWHanlder from "@/components/VWHandler";

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "Svelte",
  "TailwindCSS",
  "Node.js",
  "Deno.js",
  "Hugo",
];

const projectsList: ProjectItem[] = [
  {
    name: "DaunKoder",
    technologies: ["TailwindCSS", "Hugo", "JavaScript"],
    desc: "My blog which contains article about programming",
    image: "/project/daunkoder.png",
    appUrl: "https://www.daunkoder.my.id/",
  },
  {
    name: "Generator Daftar Pembayaran",
    technologies: ["React", "JavaScript", "PWA"],
    desc: "Aplikasi PWA sederhana berbasis React yang digunakan untuk menghasilkan dokumen daftar kekurangan beformat Office Word. Dokumen dihasilkan berdasarkan template yang disediakan user.",
    image: "/project/daftar-pembayaran.png",
    githubUrl: "https://github.com/levirs565/generator-daftar-pembayaran",
    appUrl: "https://daftar-pembayaran.levirs.my.id/",
  },
  {
    name: "Obsidian Dendron Tree",
    technologies: ["Svelte", "Obsidian", "TypeScript"],
    desc: "Obsidian plugin that add tree for exploring Dendron note",
    image:
      "https://github.com/levirs565/obsidian-dendron-tree/blob/master/images/dendron-tree.png?raw=true",
    githubUrl: "https://github.com/levirs565/obsidian-dendron-tree",
  },
];

export default function Home() {
  return (
    <>
      <VWHanlder></VWHanlder>
      <AppBar></AppBar>
      <main className={styles.main}>
        <Hero></Hero>
        <h2 className={styles.subtitle}>Skill List</h2>
        <SkillList list={skillList}></SkillList>
        <h2 className={styles.subtitle}>My Projects</h2>
        <ProjectList list={projectsList} />
      </main>
    </>
  );
}
