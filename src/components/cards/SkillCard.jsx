import Link from "next/link"

const SkillCard = ({ item }) => (
  <Link
    href={item.url}
    target="_blank"
    rel="noreferrer"
    className="card_flat_shadow box_radius mr-4 mb-4"
  >
    <button className="card_styling hover_translatef box_radius select-none w-24 pt-2 pb-3 hover:shadow-md cursor-pointer">
      <img
        draggable="false"
        className="mt-2 mx-auto my-auto h-10 w-10 object-contain"
        src={item.image}
        alt=""
      />
      <h4 className="mt-2 py-1 text-center text-stone-600 font-semiboldF text-sm">
        {item.title}
      </h4>
    </button>
  </Link>
)

export default SkillCard
