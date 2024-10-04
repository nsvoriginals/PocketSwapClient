export const Card = ({ title, ImgSource, Description }) => {
    return (
      <div className="card w-1/3 rounded-lg border border-black">
        <h1 className="text-xl font-bold">{title}</h1>
        <img src={ImgSource} alt={title} className="rounded-t-lg w-15 h-25" />
        <p className="p-4">{Description}</p>
      </div>
    );
  };
  