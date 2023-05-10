const SkillCard = ({ item }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noreferrer"
    className="border-neutral-500 solid_shadowF border w-28 pt-2 pb-3 mr-4 mb-4 rounded-mdF cursor-pointer hover:shadow-md flex-growF"
  >
    <img
      draggable="false"
      className="mt-2 mx-auto my-auto h-12 w-12 object-contain"
      src={item.image}
      alt=""
    />
    <h4 className="mt-2 py-1 text-center text-stone-600 font-semiboldF text-sm">
      {item.title}
    </h4>
  </a>
)

export default SkillCard
