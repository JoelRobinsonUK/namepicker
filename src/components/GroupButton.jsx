const GroupButton = ({ title, names }) => {
  const handleClick = (e) => {
    console.log(title);
  };

  return (
    <div className="col-span-6 grid grid-cols-4 overflow-hidden rounded-xl border-2 border-black md:col-span-4 lg:col-span-3">
      <button className="col-span-3 p-5" onClick={handleClick}>
        <span className="grow">{title}</span>
      </button>
      <button className="col-span-1 aspect-square bg-red-500 p-5">D</button>
    </div>
  );
};

export default GroupButton;
