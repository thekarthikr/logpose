import Hero from "@/components/hero";
import MouseMoveCanvas from "@/components/ui/mouse-move-canvas";
import Projects from "@/components/projects";
import Stacks from "@/components/stack";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Stacks />
      <Projects />
      <MouseMoveCanvas />
    </div>
  );
}
