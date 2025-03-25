import { ClipLoader } from 'react-spinners';
import useTrailer from '../hooks/useTrailer'
export interface Props{
  gameId: number
 }
const Trailer = ({gameId}:Props ) => {
  const {data, isLoading, error} = useTrailer(gameId);
  if (isLoading) return <div className='grid place-items-center h-1/2'><ClipLoader
  size={40}
  color="#ffffff"
  aria-label="Loading Spinner"
  data-testid="loader"
/></div>
  if (error) throw error 
  const first =data?.results[0]
  
  return (
    first ? <video src={first.data[480]} controls className='w-full'></video>: null
  )
}

export default Trailer