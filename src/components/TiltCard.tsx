/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  id?: string;
  key?: React.Key;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 1000,
  scale = 1.02,
  id,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Use normalized range to map degrees
    const rangeX = rect.width / 2 + 80;
    const rangeY = rect.height / 2 + 80;

    const percentX = Math.min(Math.max(mouseX / rangeX, -1), 1);
    const percentY = Math.min(Math.max(mouseY / rangeY, -1), 1);

    const rotX = -percentY * maxTilt;
    const rotY = percentX * maxTilt;

    // Directly transform DOM styles to bypass React state cycle for maximum frames
    card.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    cardRef.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id={id}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
