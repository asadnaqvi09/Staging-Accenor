"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ClientLogoPill } from "@/components/shared/ClientLogoPill";

export function ClientLogoCarousel({ clients }) {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragStartPos = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  // Triple set for seamless infinite loop on both sides.
  const items = [...clients, ...clients, ...clients];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || clients.length === 0) return;

    // Static display when user prefers reduced motion.
    if (reduceMotion) {
      track.style.transform = "translateX(0px)";
      return undefined;
    }

    const animate = () => {
      const singleSetWidth = track.scrollWidth / 3;

      if (!isDragging.current && !isHovered && singleSetWidth > 0) {
        positionRef.current += 0.45;

        if (positionRef.current >= singleSetWidth) {
          positionRef.current -= singleSetWidth;
        } else if (positionRef.current < 0) {
          positionRef.current += singleSetWidth;
        }

        track.style.transform = `translateX(-${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [clients.length, isHovered, reduceMotion]);

  function handleStart(clientX) {
    if (reduceMotion) return;
    isDragging.current = true;
    startX.current = clientX;
    dragStartPos.current = positionRef.current;
  }

  function handleMove(clientX) {
    if (!isDragging.current || !trackRef.current || reduceMotion) return;

    const singleSetWidth = trackRef.current.scrollWidth / 3;
    const deltaX = startX.current - clientX;
    let newPos = dragStartPos.current + deltaX;

    if (newPos >= singleSetWidth) {
      newPos -= singleSetWidth;
    } else if (newPos < 0) {
      newPos += singleSetWidth;
    }

    positionRef.current = newPos;
    trackRef.current.style.transform = `translateX(-${newPos}px)`;
  }

  function handleEnd() {
    isDragging.current = false;
  }

  if (!clients?.length) return null;

  return (
    <div
      className="relative w-full cursor-grab overflow-hidden select-none active:cursor-grabbing"
      aria-label="Client logos carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleEnd();
      }}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
      />

      <div
        ref={trackRef}
        className="flex w-max items-center gap-4 py-3 will-change-transform sm:gap-5 sm:py-4"
      >
        {items.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="group shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <ClientLogoPill
              client={client}
              className="pointer-events-none group-hover:border-brand/30"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
