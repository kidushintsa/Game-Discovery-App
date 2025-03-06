import usePlatform, { platform } from "../hooks/usePlatform";

interface Props {
  setSelectedPlatform: (p: platform) => void;
  selectedPlatform: platform | null; // Allow null
}

const PlatformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return <p className="text-red-500">Error loading platforms</p>;

  return (
    <select
      className="!bg-slate-700 rounded-md mx-4 focus:ring-0 focus:!border-gray-500"
      onChange={(e) => setSelectedPlatform(JSON.parse(e.target.value))}
    >
      <option value="">{selectedPlatform ? selectedPlatform.name : "Select a platform"}</option>
      {data?.results.map((platform) => (
        <option key={platform.id} value={JSON.stringify(platform)}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
