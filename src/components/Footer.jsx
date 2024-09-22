/* eslint-disable react/prop-types */
export const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <div className="bg-roseTaupe text-center py-2 text-grey">
      {percentage === 100
        ? "You got everything! Ready to go ✈️"
        : `💼You have ${numItems} items on your list, and you already packed
         ${numPacked} (${percentage}%)`}
    </div>
  );
};
