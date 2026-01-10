"use client";

import { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "FULLSTACK DEVELOPER",
  "WRITER",
  "ATHLETE",
  "BACKPACKER",
];

export default function TypewriterEffect() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentRole.slice(0, displayText.length - 1));
          } else {
            // Finished deleting, move to next role
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            setTimeout(() => {}, pauseBeforeType);
          }
        }
      },
      isDeleting
        ? typingSpeed
        : displayText.length === currentRole.length
        ? 0
        : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="inline-block min-w-[280px] text-left">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
