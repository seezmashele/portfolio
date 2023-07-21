import Image from "next/image"
import SectionTitle from "../components/widgets/SectionTitle"
import profileImage from "../assets/img/seez3.jpg"
import SkillCard from "../components/cards/SkillCard"
import ProjectCard from "../components/cards/ProjectCard"
import SocialLinkCard from "../components/cards/SocialLinkCard"
import { mainSkills } from "../db/skills"
import projectsList from "../db/projects"
import { socialMediaLinks } from "../db/socialMediaLinks"
import PageTabs from "@/components/PageTabs"

export default function Home() {
  return (
    <div>
      <PageTabs selectedPage={0} />

      <main className="page_width_wide box_radius bg-white bg-opacity-75 border flat_shadow mt-8 mb-20 border-neutral-500 py-10 mx-auto flex w-full flex-col">
        <div className="w-full text-sm flex xs:flex-col md:flex-row xs:space-x-0 xs:space-y-10 md:space-y-0 md:space-x-10">
          <div className="inline-block xs:m-auto md:m-0 w-48 borderf border-neutral-500 flex-shrink-0 h-48 flex-grow-0 bg-gray-100 box_radius overflow-hidden">
            <Image
              draggable="false"
              className="w-full h-full object-cover"
              src={profileImage}
              alt="my most professional pose"
            />
          </div>
          <div className="xs:w-full md:w-1/2 flex-grow ml-10F xs:text-center md:text-left">
            <h1 className="text-3xl font-bold w-full text-gray-700 leading-snug">
              Hi there, I'm Sizwe 👋
            </h1>
            <div className="mb-5 mt-4 h-5 inline-block text-base font-semibold text-stone-700">
              A
              <span className="text-xl px-1.5 font-bold title_gradient">
                Frontend dev
              </span>
              from Johannesburg
            </div>

            <div className="relative mt-4 flex w-full flex-wrap xs:justify-center md:justify-start">
              {socialMediaLinks &&
                socialMediaLinks.map((item, index) => (
                  <SocialLinkCard key={"socialmedia" + index} item={item} />
                ))}
            </div>
          </div>
        </div>

        {/* ====================================================================== */}
        <p className="block mt-5 mb-2 w-full max-w-2xl flex-grow leading-relaxed select-text">
          <span className="mr-3 select-none">✉️</span>seez.mash@gmail.com
        </p>
        <p className="block mt-5 mb-2 w-full max-w-2xl flex-grow leading-relaxed text-lgF">
          I have an strong interest in UX Design and building exciting projects.
        </p>

        <div className="w-full h-1 border-t mt-8 border-neutral-500"></div>

        {/* ====================================================================== */}

        <SectionTitle title="My main skills" />
        <div className="relative mt-5 mb-4f flex w-full flex-wrap max-w-2xlf">
          {mainSkills &&
            mainSkills.map((item, index) => (
              <SkillCard key={"socialmedia" + index} item={item} />
            ))}
        </div>

        <div className="w-full h-1 border-t mt-8 border-neutral-500"></div>

        {/* ====================================================================== */}

        <SectionTitle title="Recent projects" />
        <div className="relative mb-4 flex gap-8 w-full flex-wrap">
          {projectsList &&
            projectsList.map((item, index) => (
              <ProjectCard key={"projectcard" + index} item={item} />
            ))}
        </div>
      </main>
    </div>
  )
}
