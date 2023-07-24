"use client"

import Image from "next/image"
import PageTabs from "@/components/PageTabs"
import PageTitle from "@/components/widgets/PageTitle"
import resumeImage from "@/assets/img/cv1.webp"

export default function Home() {
  return (
    <div>
      <PageTabs selectedPage={2} />

      <main className="page_width_wide box_radius select-none bg-white bg-opacity-75 border flat_shadow mt-8 mb-20 border-neutral-500 py-10 mx-auto flex w-full flex-col items-center">
        <div className="flex max-w-xl w-full">
          <PageTitle title="Latest resume" fileToDownload="/sizwe_cv.pdf" />
        </div>

        <div className="inline-block xs:m-auto max-w-xl md:m-0 w-full borderf border-neutral-500 flex-grow-0 bg-gray-100 box_radius overflow-hidden aspect-1/1.4 p-6">
          <Image
            draggable="false"
            className="w-full h-full object-contain shadow-xl"
            src={resumeImage}
            alt="my most professional pose"
          />
        </div>
      </main>
    </div>
  )
}
