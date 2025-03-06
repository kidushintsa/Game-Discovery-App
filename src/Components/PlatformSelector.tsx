import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const {data, error} = usePlatform();
  if(error) return
  return (
        <>
      <select className="!bg-slate-700 rounded-md mx-4 focus:ring-0 focus:!border-gray-500">
        {data?.results.map(platform => <option key={platform.id} value={platform.name}>{platform.name}</option>)}
      </select>
    </>
  );
};

export default PlatformSelector;
