import tabItems from "@/db/tabItems"
import Link from "next/link"

const PageTabs = ({ selectedPage = -1 }) => {
  return (
    <div className="w-full flex justify-center mt-6 gap-4 flex-wrap">
      {tabItems.map((item, index) => {
        return (
          <Link href={item.path} className="flat_shadow box_radius">
            <button
              className={`border hover_translate border-neutral-500 box_radius px-5 pt-2 text-sm select-none cursor-pointer pb-2.5 text-center ${
                index === selectedPage
                  ? "bg-neutral-500 text-white"
                  : "bg-white"
              }`}
            >
              {item.title}
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default PageTabs
