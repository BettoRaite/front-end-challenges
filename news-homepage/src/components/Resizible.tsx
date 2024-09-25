"use client";

import Image from "next/image";
type Widths = Record<string, number>;
type ResizibleProps = {
  widths: Widths;
};
const getPath = (widths: Widths) => {
  const deviceWidth = window.innerWidth;

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
  return (
    <Image
      src={getPath(widths)}
      height={500}
      width={320}
      alt="A visual representation of the future of Web 3.0, showcasing a digital landscape."
      className="w-full"
      quality={100}
    />
  );
}
