export const GifCard = ({ url, title }) => {
  return (
    <div className="bg-white rounded-lg md:basis-1/6 shadow-2xl">
      <img className="w-full rounded-t-xl" src={url} alt={title} />
      <div className="p-4">
        <h3 className="text-slate-800 font-bold">{title}</h3>
      </div>
    </div>
  );
};
