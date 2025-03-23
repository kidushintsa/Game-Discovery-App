import useScreenshoot from "../hooks/useScreenshoot"
interface Props{
  gameId:number
}
const ScreenShoots = ({gameId}:Props) => {
   const {data, isLoading, error} = useScreenshoot(gameId);
   if(isLoading) return <h1>Loading....</h1>
   if(error) throw error
  return (
    <div className="grid md:grid-cols-2 gap-3 mt-2">
      {data?.results.map(file => <img  key={file.id} src={file.image} className="rounded-md"/>)}
    </div>
  )
}

export default ScreenShoots