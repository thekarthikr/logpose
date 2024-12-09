import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";
import { Icons } from "./ui/icons";

const Stacks = () => {
  const stack = [
    Icons.reactjs,
    Icons.nextjs,
    Icons.framer,
    Icons.tailwindcss,
    Icons.sass,
  ];
  return (
    <div className="relative z-20 mx-auto my-12 max-w-3xl">
      <InfiniteSlider gap={24} reverse>
        {stack.map((Logo, index) => (
          <div
            key={index}
            className="relative mx-[4rem] flex h-full w-fit items-center justify-start"
          >
            <Logo />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default Stacks;
