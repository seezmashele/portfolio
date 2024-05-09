// import Image from "next/image"
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const ProjectCard = ({ item, isLastItem = false }) => {
  let tagsList = [
    'Gears of War',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'FB Gaming',
    'MOBA',
    'Cosplay'
  ]
  let shortTags = tagsList
  shortTags.splice(3)
  return (
    <div className="xs:w-full md:w-[40%] flex-grow flex flex-col select-none pb-3">
      <div className="w-full aspect-[4/3] box_radius card_flat_shadow">
        <Link href={item.pagePath} rel="noreferrer">
          <div className="relative box_radius card_styling left-0 w-full h-full overflow-hidden cursor-pointer hover:shadow-md transition-allf hover_translatef">
            <img
              className="absolute p-3 rounded-lg overflow-hidden shadow-lg object-cover object-top w-full h-full left-0"
              src={item.image}
              alt={item.title}
            />
          </div>
        </Link>
      </div>
      <div className="flex mt-5">
        <Link href={item.externalUrl} target="_blank" rel="noreferrer">
          <div className="bg-blackf borderf bg-neutral-100 border-neutral-500 text-black box_radius w-auto text-sm px-3 py-2.5 flex items-center gap-2 cursor-pointer hover:shadow-md font-semibold">
            <ExternalLinkIcon />
            <span>Live preview</span>
          </div>
        </Link>
      </div>
      <a
        href={item.pagePath}
        // target="_blank"
        rel="noreferrer"
        className="hover:underline decoration-2 text-xl font-semibold text-blue-800 w-full mt-3 overflow-hidden"
      >
        {item.title}
      </a>
      <div className="group_text_medium mt-2.5 text-sm w-full overflow-hidden">
        {item.overview}
      </div>
      {/* <div className="border-b border-neutral-500 mt-6"></div> */}
    </div>
  )
}

export default ProjectCard
