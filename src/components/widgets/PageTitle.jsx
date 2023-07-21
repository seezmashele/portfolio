const PageTitle = ({ title = "" }) => {
  return (
    <div className="mb-6 mt-0 flex">
      <h2 className="box_radius whitespace-nowrap text-lg font-semibold text-black select-none pointer-events-none">
        {title}
      </h2>
    </div>
  )
}

export default PageTitle
