import PageTitle from "@/components/widgets/PageTitle"
import PageTabs from "@/components/PageTabs"
import projectImage from "@/assets/img/projects/publik.png"
import Image from "next/image"
import SectionTitle from "@/components/widgets/SectionTitle"
import SectionDivider from "@/components/widgets/SectionDivider"

export default function Home() {
  const techStack = [
    "React",
    "Firebase",
    "TailwindCSS",
    "Lexical - rich text editor"
  ]
  const features = [
    "Firebase auth - create user accounts, login, logout",
    "Upload Events - select and upload images to Firebase storage, rich text editor",
    "Responsive grid"
  ]

  return (
    <div>
      <PageTabs selectedPage={1} />

      <main className="page_width_wide box_radius select-none bg-white bg-opacity-75 border flat_shadow mt-8 mb-20 border-neutral-500 pt-10 pb-24 mx-auto flex w-full flex-col items-center">
        <div className="w-full max-w-xl">
          <PageTitle
            title="Publik Events"
            address="https://publik-events.vercel.app"
          />
          <div className="w-full aspect-[4/3] box_radius bg-neutral-100 overflow-hidden">
            <Image
              draggable={false}
              className="object-contain bg-neutral-200 object-top w-full h-fullf left-0"
              src={projectImage}
              alt="project image"
            />
          </div>
          <SectionTitle title="About this project" />
          <p className="block mt-5 w-full max-w-2xl flex-grow leading-relaxed text-lgF">
            A Next.js website to find and share events. Styled with TailwindCSS
            and MUI. Data and images are stored on Firebase.
          </p>
          <SectionDivider />
          <SectionTitle title="Tech stack" />
          <div className="mt-4">
            {techStack.map((item, index) => {
              return (
                <div
                  key={"techstack" + index}
                  className="flex items-centerf mb-0.5"
                >
                  <div className="rounded-full mt-[0.6rem] bg-black h-1.5 w-1.5 mr-3.5 flex-shrink-0"></div>
                  {item}
                </div>
              )
            })}
          </div>
          <SectionDivider />
          <SectionTitle title="Features" />
          <div className="mt-4">
            {features.map((item, index) => {
              return (
                <div
                  key={"techstack" + index}
                  className="flex items-centerf mb-0.5"
                >
                  <div className="rounded-full bg-black h-1.5 w-1.5 mr-3.5 mt-[0.6rem] flex-shrink-0"></div>
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
