import Hero from "@/components/hero";
import MouseMoveCanvas from "@/components/ui/mouse-move-canvas";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      <Projects />

      <MouseMoveCanvas />
    </div>
  );
}
