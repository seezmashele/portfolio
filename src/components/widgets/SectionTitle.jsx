const SectionTitle = ({ title = "" }) => {
  return (
    <div className="mr-6 mb-2 mt-9 flex">
      <h2 className="box_radius whitespace-nowrap text-xl font-bold text-black select-none pointer-events-none">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
