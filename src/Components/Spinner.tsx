import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="grid place-items-center h-1/2">
      <ClipLoader
        size={40}
        color="#ffffff"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Spinner;
