// import React from 'react'
interface badge {
  score: number
}

const CriticBadge = ({score}: badge) => {
 const color = score > 75 ? "green-400" : score > 60 ?"red-600":''
  return (
    <span className={`inline-flex items-center rounded-md bg-gray-600 px-2 py-1 text-xs font-bold text-${color} ring-1 ring-inset ring-gray-500/10 `}>{score}
    </span>

  )
}

export default CriticBadge