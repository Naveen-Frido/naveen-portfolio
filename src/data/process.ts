import { ProcessStep } from "@/types";

export const designProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Listen deeply. Define the problem space. Understand business goals, user needs, and technical constraints before designing anything.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Talk to users. Analyze data. Study competitors. Map journeys. Build empathy through evidence, not assumptions.",
  },
  {
    number: "03",
    title: "Simplify",
    description:
      "Distill complexity into clarity. Find the core interaction. Remove everything that doesn't serve the user's primary goal.",
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "Make ideas tangible. Explore multiple directions through wireframes, flows, and interactive prototypes.",
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Test with real users. Measure against success metrics. Iterate based on evidence, not opinions.",
  },
  {
    number: "06",
    title: "Ship",
    description:
      "Collaborate closely with engineering. Sweat the details. Ensure what ships matches what was designed — pixel by pixel.",
  },
];
