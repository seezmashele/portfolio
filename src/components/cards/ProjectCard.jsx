import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ item, isLastItem = false }) => {
  let tagsList = [
    "Gears of War",
    "Apex Legends",
    "Twitch",
    "YouTube",
    "FB Gaming",
    "MOBA",
    "Cosplay"
  ]
  let shortTags = tagsList
  shortTags.splice(3)
  return (
    <div className="xs:w-full md:w-[40%] flex-grow flex flex-col select-none pb-2">
      <div className="w-full aspect-[4/3] box_radius card_flat_shadow">
        <Link href={item.externalUrl} target="_blank" rel="noreferrer">
          <div className="relative box_radius card_styling left-0 w-full h-full overflow-hidden cursor-pointer hover:shadow-md transition-allf hover_translatef">
            <img
              className="absolute object-cover object-top w-full h-full h-fullF left-0 image_visibility"
              src={item.image}
              alt={item.title}
            />
          </div>
        </Link>
      </div>
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noreferrer"
        className="hover:underline decoration-2 text-xl font-semibold text-blue-800 w-full mt-6 overflow-hidden"
      >
        {item.title}
      </a>
      <div className="group_text_medium mt-2.5 text-sm w-full overflow-hidden">
        {item.overview}
      </div>
      {/* {!isLastItem && <div className="border-b border-neutral-500 mt-12"></div>} */}
      {/* <div className="overview_text flex mt-1">
    {#if shortTags}
      {#each shortTags as item}
        <div
          className="flex box_radius mr-2 rounded-full px-1.5 pt-1 pb-1.5 bg-gray-50F text-xs font-semibold text-gray-500 bg-gray-50 truncate"
          >
          {item}
        </div>
      {/each}
    {/if}
  </div> */}
    </div>
  )
}

export default ProjectCard
