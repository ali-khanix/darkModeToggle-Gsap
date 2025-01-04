"use client";

import Navbar from "@/components/custom/Navbar";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: -800,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div
        ref={boxRef}
        className={`mx-auto w-full max-w-sm border-2 border-border rounded-lg bg-card p-8 mt-[50%]`}
      >
        <h4 className="mb-4 mt-2 w-full text-3xl font-bold text-copy-primary">
          Dark Mode
        </h4>
        <p className="text-copy-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          aspernatur dolor beatae at quia. Molestiae non perspiciatis esse
          consequuntur, veniam autem nostrum minus maxime error! Facilis
          consequuntur nesciunt neque magni quam eligendi qui quos nemo, quo
          inventore hic molestiae eum architecto! Repudiandae illo nemo ut neque
          laborum dignissimos, ducimus hic?
        </p>
      </div>
    </>
  );
}
