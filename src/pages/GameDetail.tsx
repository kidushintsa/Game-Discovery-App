import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
const GameDetail = () => {
const {slug} =  useParams();
const {data:game, isLoading, error} = useGame(slug!);
 if(isLoading) return "Loading..."
 if(error || !game) throw error?.message

  return (
    <>
        <h1 className='font-poppins text-white text-3xl ms-4 mt-2 font-semibold'>{game.name}</h1>
        <p className='font-poppins text-white p-4'>{game.description_raw}</p>
    </>

  )
}

export default GameDetail