import useTrailer from '../hooks/useTrailer'
export interface Props{
  gameId: number
 }
const Trailer = ({gameId}:Props ) => {
  const {data, isLoading, error} = useTrailer(gameId);
  if (isLoading) return <div>Loading...</div>
  if (error) throw error 
  const first =data?.results[0]
  
  return (
    first ? <video src={first.data[480]} controls className=''></video>: null
  )
}

export default Trailer