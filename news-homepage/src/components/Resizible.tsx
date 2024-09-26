"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Widths = Record<string, number>;
type ResizibleProps = {
  widths: Widths;
};

const getPath = (widths: Widths, deviceWidth: number) => {
  let path = "";
  let lastWidth = Number.MAX_SAFE_INTEGER;
  let maxWidth = -Number.MAX_SAFE_INTEGER;
  let maxPath = "";

  for (const key of Object.keys(widths)) {
    const currWidth = widths[key];
    if (currWidth < lastWidth && deviceWidth <= currWidth) {
      path = key;
      lastWidth = currWidth;
    }
    if (currWidth > maxWidth) {
      maxWidth = currWidth;
      maxPath = key;
    }
  }

  return path ? path : maxPath;
};

export function Resizible({ widths }: ResizibleProps) {
  const [imagePath, setImagePath] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const deviceWidth = window.innerWidth;
      const path = getPath(widths, deviceWidth);
      if (imagePath !== path) setImagePath(path);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widths, imagePath]);

  return (
    <Image
      src={imagePath}
      height={500}
      width={320}
      alt="A visual representation of the future of Web 3.0, showcasing a digital landscape."
      className="w-full"
      quality={100}
    />
  );
}
