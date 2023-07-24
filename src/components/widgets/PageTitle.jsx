import Link from "next/link"
import { DownloadIcon, ExternalLinkIcon } from "@radix-ui/react-icons"

const PageTitle = ({ title = "", address = "", fileToDownload = "" }) => {
  return (
    <div className="flex items-center justify-between mb-4 w-full">
      <h3 className="text-lg w-full flex-grow font-semibold py-2.5 whitespace-nowrap text-ellipsisf overflow-hiddenf">
        {title}
      </h3>
      {address && (
        <Link href={address} target="_blank" rel="noreferrer">
          <div className="bg-neutral-100 border-neutral-500 text-black box_radius text-sm px-3 py-2.5 flex items-center whitespace-nowrap gap-2 cursor-pointer hover:shadow-md font-semibold">
            <ExternalLinkIcon />
            <span>Live preview</span>
          </div>
        </Link>
      )}
      {fileToDownload && (
        <div>
          <a
            download
            alt="alt text"
            rel="noopener noreferrer"
            id="resume-download-button"
            href={fileToDownload}
            className="hidden"
          />
          <button
            onClick={() => {
              document.getElementById("resume-download-button").click()
            }}
            className="bg-neutral-100 border-neutral-500 text-black box_radius text-sm px-3 py-2.5 flex items-center whitespace-nowrap gap-2 cursor-pointer hover:shadow-md font-semibold"
          >
            <DownloadIcon />
            Download PDF
          </button>
        </div>
      )}
    </div>
  )
}

export default PageTitle
