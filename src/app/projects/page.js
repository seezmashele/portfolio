import PageTitle from "@/components/widgets/PageTitle"
import ProjectCard from "@/components/cards/ProjectCard"
import projectsList from "@/db/projects"
import PageTabs from "@/components/PageTabs"

export default function Home() {
  return (
    <div>
      <PageTabs selectedPage={1} />

      <main className="page_width_wide box_radius select-none bg-white bg-opacity-75 border flat_shadow mt-8 mb-20 border-neutral-500 pt-10 pb-4 mx-auto flex w-full flex-col">
        <PageTitle title="My projects" />
        <div className="relative mb-10 flex gap-8 w-full flex-wrap">
          {projectsList &&
            projectsList.map((item, index) => (
              <ProjectCard key={"projectcard" + index} item={item} />
            ))}
        </div>
      </main>
    </div>
  )
}
