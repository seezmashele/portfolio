const SocialLinkCard = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="border flex items-center flex-col justify-center border-neutral-500 w-20 h-14F py-3 mr-3.5 mb-3 shadowF cursor-pointer hover:shadow-md flex-growF"
    >
      <img
        draggable="false"
        className="h-6 w-6 object-contain"
        src={item.image}
        alt=""
      />
      <div className="mt-2 font-semiboldF">{item.title}</div>
    </a>
  )
}

export default SocialLinkCard
