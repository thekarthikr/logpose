type Content = {
    title :string,
    description:string
}

export interface Project {
    title: string;
    summary: string;
    techStacks: string[];
    bannerImage: string;
    description: string;
    content: Content[]; 
  }
  
  export const projects: Project[] = [
    {
      title: "DevConnect",
      summary:
        "DevConnect is a social platform for developers to share their projects, collaborate, and connect with other developers. Users can create profiles, post updates, join discussions, and showcase their work.",
      techStacks: ["Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
      bannerImage:
        "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "DevConnect is designed to bring developers together. It allows users to create personal profiles, share their projects, and interact with other developers through comments and likes. The platform also features a discussion forum where users can ask for help, share knowledge, and discuss industry trends.",
      content: [
        {
          title: "User Authentication",
          description:
            "Implemented using Firebase for secure login and registration."
        },
        {
          title: "Profile Management",
          description:
            "Users can create and update their profiles, showcasing their skills and projects."
        },
        {
          title: "Project Sharing",
          description:
            "Users can post their projects, including descriptions, screenshots, and links to repositories."
        },
        {
          title: "Real-time Discussions",
          description: "A forum for users to engage in real-time discussions."
        },
        {
          title: "Responsive Design",
          description:
            "Ensured compatibility across various devices using Tailwind CSS."
        },
        {
          title: "Animations",
          description:
            "Used Framer Motion for smooth and interactive animations."
        }
      ]
    },
    {
      title: "FitTrack",
      summary:
        "FitTrack is a fitness tracking dashboard that helps users monitor their workouts, track progress, and set fitness goals. It features interactive charts and graphs to visualize data.",
      techStacks: ["React", "Tailwind CSS", "Chart.js", "Firebase", "Framer Motion"],
      bannerImage:
        "https://images.unsplash.com/photo-1625027589035-0844e7f91b1b?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "FitTrack helps users maintain their fitness journey by tracking workouts and progress. The dashboard features an intuitive interface, making it easy for users to log their exercises and view their progress over time.",
      content: [
        {
          title: "User Authentication",
          description:
            "Implemented using Firebase for user accounts and secure data storage."
        },
        {
          title: "Workout Logging",
          description:
            "Users can log their workouts, including exercise type, duration, and intensity."
        },
        {
          title: "Progress Visualization",
          description:
            "Interactive charts and graphs created with Chart.js to show progress over time."
        },
        {
          title: "Goal Setting",
          description: "Users can set and track fitness goals."
        },
        {
          title: "Responsive Design",
          description:
            "Designed to work seamlessly on both desktop and mobile devices using Tailwind CSS."
        },
        {
          title: "Animations",
          description:
            "Framer Motion used to add engaging animations to the user interface."
        }
      ]
    },
    {
      title: "ArtGallery",
      summary:
        "ArtGallery is an online platform for artists to showcase their artwork. Users can browse through various art pieces, learn about the artists, and get inspired.",
      techStacks: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion"],
      bannerImage:
        "https://images.unsplash.com/photo-1719339285288-0790b8867c6e?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "ArtGallery provides a virtual space for artists to exhibit their work. Users can explore a variety of art forms, read artist bios, and leave comments to appreciate the artwork.",
      content: [
        {
          title: "User Authentication",
          description:
            "Used for artists to manage their profiles and upload artwork."
        },
        {
          title: "Artwork Display",
          description:
            "Beautiful gallery layout to display artwork with details."
        },
        {
          title: "Artist Profiles",
          description:
            "Dedicated profiles for artists, showcasing their bio and portfolio."
        },
        {
          title: "Comment Section",
          description: "Allows users to leave comments and feedback on artwork."
        },
        {
          title: "Responsive Design",
          description:
            "Tailwind CSS ensures a seamless viewing experience on all devices."
        },
        {
          title: "Animations",
          description:
            "Smooth transitions and animations powered by Framer Motion."
        }
      ]
    }
  ];
  
  export default projects;
  