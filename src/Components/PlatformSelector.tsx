import usePlatform from "../hooks/usePlatform";
import useQueryStore from "../State-management/useQueryStore";

const PlatformSelector = () => {
  const {
    setPlatform,
    gameQuery: { selectedPlatform },
  } = useQueryStore();
  const { data, error } = usePlatform();
  if (error) return <p className="text-red-500">Error loading platforms</p>;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") {
      setPlatform(null!);
    } else {
      setPlatform(JSON.parse(value));
    }
  };

  return (
    <select
      className="!bg-slate-700 rounded-md focus:ring-0 focus:!border-gray-500 "
      onChange={handleChange}
      value={selectedPlatform ? JSON.stringify(selectedPlatform) : ""}
    >
      <option value="" disabled>
        Select a platform
      </option>

      {selectedPlatform && <option value="">All Platforms</option>}

      {data?.results.map((platform) => (
        <option key={platform.id} value={JSON.stringify(platform)}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
