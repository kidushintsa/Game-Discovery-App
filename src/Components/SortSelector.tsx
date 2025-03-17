import useQueryStore from "../State-management/useQueryStore"

const SortSelector = () => {
  const {setSortOrder} = useQueryStore();
  return (
    <div className="flex items-center mx-4">
      <label className="mr-2 text-white font-poppins">Order By:</label>
      <select
        className="!bg-slate-700 rounded-md focus:ring-0 focus:!border-gray-500"
        
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option disabled value="">
          Select sorting...
        </option>
        <option value="Relevance">Relevance</option>
        <option value="Name">Name</option>
        <option value="Date added">Date Added</option>
        <option value="Release date">Release Date</option>
        <option value="Popularity">Popularity</option>
        <option value="Average rating">Average Rating</option>
      </select>
    </div>
  );
}

export default SortSelector