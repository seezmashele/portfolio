import PageTitle from "@/components/widgets/PageTitle"
import PageTabs from "@/components/PageTabs"
import projectImage from "@/assets/img/projects/publik.png"
import Image from "next/image"
import SectionTitle from "@/components/widgets/SectionTitle"

export default function Home() {
  return (
    <div>
      <PageTabs selectedPage={1} />

      <main className="page_width_wide box_radius select-none bg-white bg-opacity-75 border flat_shadow mt-8 mb-20 border-neutral-500 py-10 mx-auto flex w-full flex-col">
        <PageTitle title="publik-events" />
        <div className="w-full max-w-xl">
          <div className="w-full aspect-[4/3] box_radius bg-neutral-100 overflow-hidden">
            <Image
              draggable={false}
              className="object-contain bg-neutral-200 object-top w-full h-fullf left-0"
              src={projectImage}
              alt="project image"
            />
          </div>
          <SectionTitle title="About this project" />
          <p className="block mt-5 mb-2 w-full max-w-2xl flex-grow leading-relaxed text-lgF">
            I have an strong interest in UX Design and building exciting
            projects.
          </p>
        </div>
      </main>
    </div>
  )
}
