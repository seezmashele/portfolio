import Image from 'next/image'
import SectionTitle from '../components/widgets/SectionTitle'
import profileImage from '../assets/img/seez3.jpg'
import SkillCard from '../components/cards/SkillCard'
import ProjectCard from '../components/cards/ProjectCard'
import SocialLinkCard from '../components/cards/SocialLinkCard'
import { mainSkills } from '../db/skills'
import projectsList from '../db/projects'
import { socialMediaLinks } from '../db/socialMediaLinks'
import PageTabs from '@/components/PageTabs'
import SectionDivider from '@/components/widgets/SectionDivider'

export default function Home() {
  return (
    <div>
      <PageTabs selectedPage={0} />

      <main className="main_container">
        <div className="w-full text-sm flex xs:flex-col md:flex-row xs:space-x-0 xs:space-y-10 md:space-y-0 md:space-x-10">
          <div className="inline-block xs:m-auto md:m-0 w-48 border-neutral-500 flex-shrink-0 h-48 flex-grow-0 bg-gray-100 rounded-full overflow-hidden">
            <Image
              draggable="false"
              className="w-full h-full object-cover"
              src={profileImage}
              alt="my most professional pose"
            />
          </div>
          <div className="xs:w-full md:w-1/2 flex-grow ml-10F xs:text-center md:text-left">
            <h1 className="text-4xl font-bold w-full text-gray-700 leading-snug">
              Hi there, I'm Sizwe 👋
            </h1>
            <div className="mb-5 mt-4 h-5 inline-block text-xl font-semibold text-stone-700">
              A
              <span className="text-xlf px-1.5 font-bold title_gradient text-[#F9384D]f">
                Frontend dev
              </span>
              from Johannesburg
            </div>

            <div className="relative mt-4 flex w-full flex-wrap xs:justify-center md:justify-start">
              {socialMediaLinks &&
                socialMediaLinks.map((item, index) => (
                  <SocialLinkCard key={'socialmedia' + index} item={item} />
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

        <SectionDivider />

        {/* ====================================================================== */}

        <SectionTitle title="My main skills" />
        <div className="relative mt-5 flex w-full flex-wrap max-w-2xlf">
          {mainSkills &&
            mainSkills.map((item, index) => (
              <SkillCard key={'socialmedia' + index} item={item} />
            ))}
        </div>
        <p className="block mt-5 mb-2 w-full max-w-2xl flex-grow leading-relaxed text-lgF">
          React, Next.js and UI design are my main strengths with 5+ years of
          self taught app design and freelancing.
        </p>

        <SectionDivider />

        {/* ====================================================================== */}

        <SectionTitle title="Recent projects" />
        <div className="relative mt-5 mb-4 flex gap-8 w-full flex-wrap items-stretch justify-stretch">
          {projectsList &&
            projectsList.map((item, index) => (
              <ProjectCard key={'projectcard' + index} item={item} />
            ))}
        </div>
      </main>
    </div>
  )
}
