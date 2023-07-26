"use client";

import { useEffect } from "react";

export default function VWHanlder() {
  useEffect(() => {
    const setVw = () => {
      const newVw = document.body.clientWidth + "px";
      const oldVw = document.body.style.getPropertyValue("--vw");
      if (newVw !== oldVw) {
        document.body.style.setProperty("--vw", newVw);
      }
    };
    setVw();
    window.addEventListener("load", setVw);
    window.addEventListener("resize", setVw);
    return () => {
      window.removeEventListener("load", setVw);
      window.removeEventListener("resize", setVw);
    };
  }, []);
  return null;
}
