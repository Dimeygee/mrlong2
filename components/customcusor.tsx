"use client";

import React, { useState, useEffect } from "react";
import { useGlobalStateContext } from "../context/globalcontext";

export const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext();

  const [position, setPosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyles: React.CSSProperties = {
    width: 16,
    height: 16,
    backgroundColor: cursorType === "hovered" ? "transparent" : "#2f80ed",
    position: "fixed",
    top: position.y,
    left: position.x,
    borderRadius: "50%",
    zIndex: 1000,
    transform: "translate(-50%, -50%)",
  };

  return <div style={cursorStyles} className="cursor" />;
};

export default CustomCursor;
