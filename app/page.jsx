"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [width, setWidth] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    setWidth(ref1.current.offsetWidth);
    console.log(width);
  }, [])
  return (
    <main className="size-full" ref={ref1}>
      <div className="flex flex-col md:flex-row">
        {width ? 
        width <=	640 ? 
        <div>{width}SMALL</div> : 
        <div>{width}LARGE</div> 
        : <></>}
      </div>
    </main>
  );
}
// HOW TO SELECT FOR SMALL AND LARGE SCREENS
