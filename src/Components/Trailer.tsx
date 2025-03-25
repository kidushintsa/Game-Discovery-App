import useTrailer from "../hooks/useTrailer";
import Spinner from "./Spinner";
export interface Props {
  gameId: number;
}
const Trailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} controls className="w-full"></video>
  ) : null;
};

export default Trailer;
