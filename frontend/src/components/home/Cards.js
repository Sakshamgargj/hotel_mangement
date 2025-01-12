export default function Cards({ item, isActive, isPrev, isNext }) {
  return (
    <div
      className={`relative flex-shrink-0 w-[250px] h-[400px] md:w-[300px] md:h-[500px] transition-all duration-500 ease-in-out ${
        isActive
          ? 'scale-90 md:scale-110 z-10 opacity-100'
          : isPrev || isNext
          ? 'scale-80 opacity-70'
          : 'scale-70 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col bg-white text-black h-full rounded-lg shadow-lg overflow-hidden transform hover:shadow-2xl transition-all">
        {/* Title */}
        <h3 className="text-center text-base md:text-lg font-semibold py-5 uppercase">
          {item.title}
        </h3>

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="h-2/5 md:h-3/5 w-full object-cover"
        />

        {/* Description */}
        <div className="p-4 flex flex-col justify-between h-2/5">
          <p className="text-center text-sm md:text-base font-sans text-gray-600">
            {item.description}
          </p>
          <a
            href={item.link}
            className="mt-4 mx-auto bg-black text-white px-4 py-2 md:px-6 md:py-2.5 rounded hover:bg-gray-800 transition"
          >
            View Property
          </a>
        </div>
      </div>
    </div>
  );
}
