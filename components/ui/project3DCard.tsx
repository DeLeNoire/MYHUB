import React from "react";
import {ThreeDCard} from "./projectCard";

const cardsData = [
  {
    title: "Card 1 Title",
    description: "Card 1 Description",
    imageUrl: "/window3d.png",
    websiteLink: "https://twitter.com/example1",
    githubLink: "https://github.com/example1",
  },
  {
    title: "Card 2 Title",
    description: "Card 1 Description",
    imageUrl: "/window3d.png",
    websiteLink: "https://twitter.com/example1",
    githubLink: "https://github.com/example1",
  },
  {
    title: "Card 3 Title",
    description: "Card 1 Description",
    imageUrl: "/window3d.png",
    websiteLink: "https://twitter.com/example1",
    githubLink: "https://github.com/example1",
  },
  {
    title: "Card 4 Title",
    description: "Card 1 Description",
    imageUrl: "/window3d.png",
    websiteLink: "https://twitter.com/example1",
    githubLink: "https://github.com/example1",
  },
  {
    title: "Card 5 Title",
    description: "Card 1 Description",
    imageUrl: "/window3d.png",
    websiteLink: "https://twitter.com/example1",
    githubLink: "https://github.com/example1",
  },
  {
    title: "Card 6 Title",
    description: "Card 1 Description",
    imageUrl: "/window3d.png",
    websiteLink: "https://twitter.com/example1",
    githubLink: "https://github.com/example1",
  },
  // Add similar objects for other cards
];

export default function ProjectCard() {
  return (
    <div className="flex  overflow-x-auto w-full">
        <div className="flex  gap-4 w-screen">

      {cardsData.map((card, index) => (
        <ThreeDCard
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          websiteLink={card.websiteLink}
          githubLink={card.githubLink}
        />
      ))}
        </div>
    </div>
  );
}
