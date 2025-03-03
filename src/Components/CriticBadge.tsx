interface Badge {
  score: number;
}

const CriticBadge = ({ score }: Badge) => {
  let color = '';
  
  if (score > 75) {
    color = 'text-green-400'; // Green for score > 75
  } else if (score > 60) {
    color = 'text-red-400'; // Red for score between 60 and 75
  } else {
    color = 'text-gray-500'; // Default color if score is below 60
  }

  return (
    <span
      className={`inline-flex items-center rounded-md bg-gray-600 px-2 py-1 text-xs font-bold ${color} ring-1 ring-inset ring-gray-500/10`}
    >
      {score}
    </span>
  );
};

export default CriticBadge;
