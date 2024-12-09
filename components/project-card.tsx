import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/data";
import { Badge } from "./ui/badge";

export function ProjectCard(project: Project) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "4px",
        }}
        className="z-20 border bg-neutral-900/20 p-3 backdrop-blur-md"
      >
        <div className="flex items-center space-x-3 p-3">
          <MorphingDialogImage
            src={project.bannerImage}
            alt={project.summary}
            className="h-48 w-48 rounded-md object-cover object-top"
          />
          <div className="flex flex-col items-start justify-center space-y-0">
            <MorphingDialogTitle className="text-lg font-medium text-foreground sm:text-xs md:text-xl">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-foreground/70 sm:text-sm md:text-base">
              {project.summary}
            </MorphingDialogSubtitle>
            <div className="space-x-2 pt-3">
              {project.techStacks.map((stack) => (
                <Badge variant="secondary" key={stack}>
                  {" "}
                  {stack}{" "}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border bg-neutral-900"
        >
          <ScrollArea className="h-[90vh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src={project.bannerImage}
                  alt={project.summary}
                  className="h-auto w-72 rounded-md"
                />{" "}
              </div>
              <div className="">
                <MorphingDialogTitle className="text-foreground">
                  {project.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="font-light text-gray-400">
                  {project.description}
                </MorphingDialogSubtitle>
                <div className="space-x-2 pt-3">
                  {project.techStacks.map((stack) => (
                    <Badge variant="secondary" key={stack}>
                      {" "}
                      {stack}{" "}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <ul className="space-y-4">
                    <h2 className="text-xl md:text-2xl"> Key Features</h2>
                    {project.content.map((list, index) => (
                      <li key={index}>
                        <h3 className="text-md text-foreground/70 md:text-lg">
                          {" "}
                          {list.title}{" "}
                        </h3>
                        <p className="text-sm text-foreground/40">
                          {" "}
                          {list.description}{" "}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-foreground" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
