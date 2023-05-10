import Image from "next/image"
import SectionTitle from "../components/widgets/SectionTitle"
import profileImage from "../assets/img/seez2.jpg"
import SkillCard from "../components/cards/SkillCard"
import ProjectCard from "../components/cards/ProjectCard"
import SocialLinkCard from "../components/cards/SocialLinkCard"

// data
import { mainSkills, secondarySkills } from "../db/skills"
import projectsList from "../db/projects"
import { socialMediaLinks } from "../db/socialMediaLinks"

export default function Home() {
  return (
    <main className="page_width_wide bg-white bg-opacity-75 border m-10 mb-20 border-neutral-500 main_shadow pt-10 pb-4 mx-auto flex w-full flex-col">
      <div className="w-full text-sm flex xs:flex-col md:flex-row xs:space-x-0 xs:space-y-10 md:space-y-0 md:space-x-10">
        <div className="inline-block xs:m-auto md:m-0 w-40 flex-shrink-0 h-40 flex-grow-0 bg-gray-100 rounded-full overflow-hidden">
          <Image
            draggable="false"
            className="w-full h-full object-cover"
            src={profileImage}
            alt="my most professional pose"
          />
        </div>
        <div className="xs:w-full md:w-1/2 flex-grow ml-10F xs:text-center md:text-left">
          <h1 className="text-3xl font-bold w-full text-gray-700 leading-snug">
            Hi there, I'm Sizwe
          </h1>
          <div className="mb-4 mt-3 h-5 inline-block text-base font-semibold text-stone-700">
            A
            <span className="text-xl px-1 font-bold title_gradient">
              Frontend Dev
            </span>
            from Johannesburg
          </div>

          <div className="relative mt-4 mb-5 flex w-full flex-wrap xs:justify-center md:justify-start">
            {socialMediaLinks &&
              socialMediaLinks.map((item, index) => (
                <SocialLinkCard key={"socialmedia" + index} item={item} />
              ))}
          </div>
        </div>
      </div>

      {/* ====================================================================== */}

      <p className="block mt-5 mb-2 w-full max-w-2xl flex-grow leading-relaxed text-lgF">
        I have an strong interest in UX Design and building exciting projects.
      </p>

      {/* ====================================================================== */}

      <SectionTitle title="My favourite technologies include" />
      <div className="relative mt-5 mb-4f flex w-full flex-wrap">
        {mainSkills &&
          mainSkills.map((item, index) => (
            <SkillCard key={"socialmedia" + index} item={item} />
          ))}
      </div>

      {/* ====================================================================== */}

      <SectionTitle title="Honorable mentions" />
      {/* <p className=" w-full max-w-2xl flex-grow leading-relaxed">
        The less obvious tools and tech I've used to create awesome projects.
      </p> */}

      <div className="relative mt-5 flex w-full flex-wrap">
        {secondarySkills &&
          secondarySkills.map((item, index) => (
            <SkillCard key={"secondaryskillcard" + index} item={item} />
          ))}
      </div>

      {/* ====================================================================== */}

      <SectionTitle title="Recent projects" />
      <div className="relative mt-5 mb-10 flex w-full flex-wrap space-y-14">
        {projectsList &&
          projectsList.map((item, index) => (
            <ProjectCard key={"projectcard" + index} item={item} />
          ))}
      </div>
    </main>
  )
}
