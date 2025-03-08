const SortSelector = () => {
  return (
    <select
    className="!bg-slate-700 rounded-md mx-4 focus:ring-0 focus:!border-gray-500"
   
  >Order By:
    {/* <option value="">{selectedPlatform ? selectedPlatform.name : "Select a platform"}</option>
    {data?.results.map((platform) => (
      <option key={platform.id} value={JSON.stringify(platform)}>
        {platform.name}
      </option>
    ))} */}
    <option value="Relevance">Relevance</option>
    <option value="Name">Name</option>
    <option value="Date added">Date Added</option>
    <option value="Realease date">Realease Date</option>
    <option value="Popularity">Popularity</option>
    <option value="Average rating">Average Rating</option>

  </select>
  )
}

export default SortSelector