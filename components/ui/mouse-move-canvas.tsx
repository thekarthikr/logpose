"use client";

import React, { useEffect, useRef } from "react";

export const MouseMoveCanvas = () => {
  const blockContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const blockContainer = blockContainerRef.current;
    const blockSize = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    const numBlocks = numCols * numRows;

    function createBlocks() {
      if (blockContainer) {
        for (let i = 0; i < numBlocks; i++) {
          const block = document.createElement("div");
          block.classList.add("block");
          block.dataset.index = i.toString();
          block.addEventListener("mousemove", highlightRandomNeighbors);
          blockContainer.appendChild(block);
        }
      }
    }

    function highlightRandomNeighbors(this: HTMLElement) {
      const index = parseInt(this.dataset.index || "0");
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

      this.classList.add("highlight");
      setTimeout(() => {
        this.classList.remove("highlight");
      }, 500);

      shuffleArray(neighbors)
        .slice(0, 1)
        .forEach((nIndex) => {
          const neighbor = blockContainer?.children[nIndex] as HTMLElement;
          if (neighbor) {
            neighbor.classList.add("highlight");
            setTimeout(() => {
              neighbor.classList.remove("highlight");
            }, 500);
          }
        });
    }

    function shuffleArray(array: number[]): number[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    createBlocks();
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-[107vw]">
      <div
        ref={blockContainerRef}
        id="blocks"
        className="absolute left-0 top-0 flex h-full w-full flex-wrap"
      ></div>
    </div>
  );
};

// This component was inspired by a tutorial created by Codegrid on Youtube.
// You can find the tutorial here: https://www.youtube.com/watch?v=oqTpc76-TtQ
