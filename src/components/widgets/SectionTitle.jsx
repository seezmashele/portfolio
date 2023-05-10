const SectionTitle = ({ title = "" }) => {
  return (
    <div className="mr-6 mb-2 mt-8 flex">
      <h2 className="box_radius whitespace-nowrap text-lg font-semibold text-black select-none pointer-events-none">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
