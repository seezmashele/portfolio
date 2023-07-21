import Link from "next/link"

const SocialLinkCard = ({ item }) => {
  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="card_flat_shadow box_radius mr-3.5 mb-3"
    >
      <button className="box_radius card_styling select-none flex items-center flex-col justify-center w-20 py-3 cursor-pointer hover:shadow-md">
        <img
          draggable="false"
          className="h-6 w-6 object-contain"
          src={item.image}
          alt=""
        />
        <div className="mt-2 font-semiboldF">{item.title}</div>
      </button>
    </Link>
  )
}

export default SocialLinkCard
