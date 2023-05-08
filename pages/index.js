import Head from "next/head";
import Details from "../components/Details";
import Hero from "../components/Hero";
import CTA2 from "../components/CTA2";
import M_Hero from "../components/Mobile/M_Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ShowAnimVisible-Left");
        } else {
          entry.target.classList.remove("ShowAnimVisible-Left");
        }
      });
    });
    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ShowAnimVisible-Right");
        } else {
          entry.target.classList.remove("ShowAnimVisible-Right");
        }
      });
    });

    const observerBlur = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ShowAnimVisible-Blur");
        } else {
          entry.target.classList.remove("ShowAnimVisible-Blur");
        }
      });
    });

    const leftElements = document.querySelectorAll(".ShowAnimHidden-Left");
    const rightElements = document.querySelectorAll(".ShowAnimHidden-Right");
    const blurElements = document.querySelectorAll(".ShowAnimHidden-Blur");
    leftElements.forEach((el) => observerLeft.observe(el));
    rightElements.forEach((el) => observerRight.observe(el));
    blurElements.forEach((el) => observerBlur.observe(el));
  });
  return (
    <div className="bg-Blastro imgDiv">
      <Hero />
      <M_Hero />
      <Details />
      <CTA2 />
    </div>
  );
}
