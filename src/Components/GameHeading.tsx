import { Genre } from '../hooks/useGenres'
import { Platform } from '../hooks/useGames'
interface Props{
  selectedGenre:Genre | null,
  selectedPlatform: Platform | null
}
const GameHeading = ({selectedGenre, selectedPlatform}:Props) => {
  return (
    <header>
      <h1 className='font-poppins lg:text-4xl text-3xl mt-2 ml-4 mb-4 font-semibold'>{selectedPlatform?.name} {selectedGenre?.name} Games</h1>
    </header>
  )
}

export default GameHeading