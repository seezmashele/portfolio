import PageTitle from "@/components/widgets/PageTitle"
import ProjectCard from "@/components/cards/ProjectCard"
import projectsList from "@/db/projects"
import PageTabs from "@/components/PageTabs"

export default function Home() {
  return (
    <div>
      <PageTabs selectedPage={1} />

      <main className="main_container">
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
