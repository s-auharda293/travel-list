/* eslint-disable react/prop-types */
export const TripItems = ({ items, onCheck }) => {
  return (
    <>
      <div className="w-full bg-lightYellow mt-9 py-9 px-20 h-96 overflow-y-auto flex flex-row flex-wrap gap-x-32 gap-y-13">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="item flex flex-row items-center gap-2 h-20"
            >
              <input
                type="checkbox"
                name={item.description}
                id={item.id}
                checked={item.packed}
                onClick={() => {
                  onCheck(item.id);
                }}
              />
              {item.packed === true ? (
                <span className="text-4xl line-through">
                  <span>{item.quantity} </span>
                  {item.description}
                </span>
              ) : (
                <span className="text-4xl">
                  <span>{item.quantity} </span>
                  {item.description}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
