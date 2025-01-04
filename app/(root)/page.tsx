"use client";

import Navbar from "@/components/custom/Navbar";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const elements = sectionRef.current.querySelectorAll(".fade-in");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

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
        duration: 3,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div
        ref={boxRef}
        className={`mx-auto w-full max-w-sm border-2 border-border rounded-lg bg-card p-8 mt-32`}
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

      <div ref={sectionRef} className="space-y-16 p-8">
        <div className="fade-in bg-blue-500 text-white p-8 rounded-lg">
          Content Block 1
        </div>
        <div className="fade-in bg-green-500 text-white p-8 rounded-lg">
          Content Block 2
        </div>
        <div className="fade-in bg-purple-500 text-white p-8 rounded-lg">
          Content Block 3
        </div>
        <div className="fade-in bg-red-500 text-white p-8 rounded-lg">
          Content Block 4
        </div>
        <div className="fade-in bg-yellow-500 text-white p-8 rounded-lg">
          Content Block 5
        </div>
        <div className="fade-in bg-gray-500 text-white p-8 rounded-lg">
          Content Block 6
        </div>
        <div className="fade-in bg-teal-500 text-white p-8 rounded-lg">
          Content Block 7
        </div>
        <div className="fade-in bg-orange-500 text-white p-8 rounded-lg">
          Content Block 8
        </div>
        <div className="fade-in bg-pink-500 text-white p-8 rounded-lg">
          Content Block 9
        </div>
      </div>
    </>
  );
}
