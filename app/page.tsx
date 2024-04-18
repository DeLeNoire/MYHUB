import { CollegePin } from "@/components/ui/collegePin";
import { DotBackground } from "@/components/ui/gridBackground";
import { BentoGridFun } from "@/components/ui/gridFun";
import { BentoGridPlain } from "@/components/ui/gridplain";
import { Lamp } from "@/components/ui/lamp";
import ProjectCard from "@/components/ui/project3DCard";
import { ThreeDCard } from "@/components/ui/projectCard";
import { SchoolPin } from "@/components/ui/schoolPin";
import { GeminiEffect } from "@/components/ui/scrollEffect";
import { SparklesCore } from "@/components/ui/sparkles";
import { SparklesHero } from "@/components/ui/sparkleshero";
import SphereWords from "@/components/ui/sphere"

export default function Home() {
  return (
    <>
    <GeminiEffect/>
    <div className="flex">
    <SchoolPin/>
    <div className="h-[40rem] w-full flex items-center justify-center ">
    <SphereWords/>
    </div>
    <CollegePin/>
    </div>
    <ProjectCard/>
    <div className="overflow-x-auto w-full">
    <DotBackground/>
    </div>
    </>
  );
}
