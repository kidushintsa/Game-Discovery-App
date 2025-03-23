import DefinationItem from './DefinationItem'
import CriticBadge from './CriticBadge'
import Games  from '../entities/Games'
interface Props{
  game:Games
}
const GameAttribute = ({game}:Props) => {
  return (
    <div className="my-4 grid grid-cols-2 md:w-1/2 gap-y-3">
      <DefinationItem term="Platform">
      {game.parent_platforms.map(({platform}) => (<p key={platform.name}>{platform.name}</p>))}
      </DefinationItem>

      <DefinationItem term="Metacritic">
      <CriticBadge score={game.metacritic}/>
      </DefinationItem>

      <DefinationItem term="Genres">
      {game.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
      </DefinationItem>
      <DefinationItem term="Publisher">
      {game.publishers.map(publisher => <p key={publisher.id}>{publisher.name}</p>)}
      </DefinationItem>
      </div>
  )
}

export default GameAttribute