import { ReactNode } from 'react'
interface Props{
  term:string;
  children: ReactNode | ReactNode[]
}
const DefinationItem = ({term, children}:Props) => {
  return (
    <div>
      <h2 className='text-slate-400'>{term}</h2>
      <div>
      {children}
      </div>
    </div>
  )
}

export default DefinationItem