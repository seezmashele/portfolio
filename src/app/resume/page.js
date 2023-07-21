"use client"

import Image from "next/image"
import SectionTitle from "@/components/widgets/SectionTitle"
import resumeImage from "@/assets/img/cv1.webp"
// import ExamplePdf from "./sizwe_mashele_cv_1.pdf"

import PageTabs from "@/components/PageTabs"
// import cvFile from "@/assets/cv-latest.pdf"

export default function Home() {
  // const handleDownload = () => {
  //   const link = document.createElement("a")
  //   link.download = "Example-PDF-File"
  //   link.href = ExamplePdf
  //   link.click()
  // }

  return (
    <div>
      <PageTabs selectedPage={2} />

      <main className="page_width_wide box_radius select-none bg-white bg-opacity-75 border flat_shadow mt-8 mb-20 border-neutral-500 py-10 mx-auto flex w-full flex-col">
        <div className="mb-0 h-14 bg-slate-400f mt-0 flex items-centerf max-w-xlf">
          <h2 className="box_radius whitespace-nowrap text-lg max-w-[14rem]f font-semibold text-black select-none pointer-events-none flex-grow">
            My latest resume
          </h2>
          <div className="">
            <a
              download
              alt="alt text"
              rel="noopener noreferrer"
              id="resume-download-button"
              href="/sizwe_cv.pdf"
              className="hidden"
              // target="_blank"
            ></a>
            <div className="flat_shadow box_radius">
              <button
                onClick={() => {
                  document.getElementById("resume-download-button").click()
                }}
                className="border -mt-4 transition-all duration-150 border-neutral-500 box_radius px-3 pt-2.5 pb-3 bg-blackf text-whitef hover:translate-x-1 hover:translate-y-1 bg-white text-sm"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* ================================================== */}

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
