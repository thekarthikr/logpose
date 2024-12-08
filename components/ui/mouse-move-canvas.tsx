"use client";
import React, { useEffect, useRef, useState } from "react";

const MouseMoveCanvas = () => {
  const blockContainerRef = useRef<HTMLDivElement | null>(null);
  const [numBlocks, setNumBlocks] = useState(0);
  const blockSize = 50;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    setNumBlocks(numCols * numRows);
  }, []);

  const highlightRandomNeighbors = (index: number) => {
    const blockContainer = blockContainerRef.current!;
    const numCols = Math.ceil(window.innerWidth / blockSize);

    const neighbors = [
      index - 1,
      index + 1,
      index - numCols,
      index + numCols,
      index - numCols - 1,
      index - numCols + 1,
      index + numCols - 1,
      index + numCols + 1,
    ].filter(
      (i) =>
        i >= 0 &&
        i < numBlocks &&
        Math.abs((i % numCols) - (index % numCols)) <= 1,
    );

    const block = blockContainer.children[index] as HTMLDivElement;
    block.classList.add("highlight");

    setTimeout(() => {
      block.classList.remove("highlight");
    }, 500);

    const randomNeighborIndex =
      neighbors[Math.floor(Math.random() * neighbors.length)];
    const neighborBlock = blockContainer.children[
      randomNeighborIndex
    ] as HTMLDivElement;
    if (neighborBlock) {
      neighborBlock.classList.add("highlight");
      setTimeout(() => {
        neighborBlock.classList.remove("highlight");
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 h-full w-full">
      <div
        id="blocks"
        ref={blockContainerRef}
        className="flex h-[100vh] w-[105vw] flex-wrap overflow-hidden"
      >
        {Array.from({ length: numBlocks }).map((_, i) => (
          <div
            key={i}
            className="h-[50px] w-[50px] border transition-colors duration-300 ease-in-out"
            onMouseMove={() => highlightRandomNeighbors(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default MouseMoveCanvas;

// This component was inspired by a tutorial created by Codegrid on Youtube.
// You can find the tutorial here: https://www.youtube.com/watch?v=oqTpc76-TtQ
