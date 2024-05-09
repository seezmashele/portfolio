import PageTitle from "@/components/widgets/PageTitle"
import PageTabs from "@/components/PageTabs"
import projectImage from "@/assets/img/projects/ip-tracker.webp"
import Image from "next/image"
import SectionTitle from "@/components/widgets/SectionTitle"
import SectionDivider from "@/components/widgets/SectionDivider"

export default function Home() {
  const techStack = ["React", "TailwindCSS", "Leaflet", "Ipify API"]
  const features = [
    "Get current users IP address",
    "Change longitute and latitue of address location",
    "Check whether an ip address or domain has been typed using a regular expression"
  ]

  return (
    <div>
      <PageTabs selectedPage={1} />

      <main className="main_container items-center">
        <div className="w-full max-w-xl">
          <PageTitle
            title="IP Tracker"
            address="https://frontend-ip-tracker.vercel.app"
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
            A Frontend Mentor Challenge to find the location of an IP address or
            domain. Works with the Ipify api to get data and Leaflet to render a
            map.
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
