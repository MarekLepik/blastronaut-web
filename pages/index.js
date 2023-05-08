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
      {/*
      <div className="w-full h-[50rem] relative mb-10">
        <video
          className="absolute right-0 bottom-0 min-w-full min-h-full w-auto h-auto object-cover overflow-hidden"
          autoPlay
          loop
          muted
        >
          <source
            src="/assets/BlastronautGameWavePitchVideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute w-full bottom-0 grid place-items-center">
          <div className=" w-full h-full bg-black bg-opacity-40 z-10 grid place-items-center pb-10">
            <img src="/assets/BlastroLogo.png" />
            <a href="https://store.steampowered.com/app/1392650/BLASTRONAUT/">
              <button className="pb-5 pt-5 pl-10 pr-10 rounded-xl bg-red-600 hover:bg-slate-500 hover:text-white">
                Play now on Steam
              </button>
            </a>
          </div>
        </div>
      </div>
      * */}
      <Hero />
      <M_Hero />
      <Details />
      <CTA2 />
    </div>
  );
}
