import { useState } from "react";

const images = [
  "/images/lucidLogo.png",
  "/images/lucidLogo.png",
  "/images/lucidLogo.png",
  "/images/lucidLogo.png",
  "/images/lucidLogo.png",
  "/images/lucidLogo.png",
];

const CarouselWithThumbnails = () => {
  const [current, setCurrent] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0); // 控制縮圖起始

  const next = () => {
    setCurrent((current + 1) % images.length);
    if (current + 1 >= thumbIndex + 3) {
      setThumbIndex((thumbIndex + 1) % images.length);
    }
  };

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length);
    if (current - 1 < thumbIndex) {
      setThumbIndex((thumbIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* 大圖區 */}
      <div className="relative">
        <img
          src={images[current]}
          className="w-full h-64 object-cover rounded shadow"
        />
        <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-circle">❮</button>
        <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-circle">❯</button>
      </div>

      {/* 縮圖區 */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() =>
            setThumbIndex((thumbIndex - 1 + images.length) % images.length)
          }
          className="btn btn-sm"
        >
          ◀
        </button>
        {images
          .slice(thumbIndex, thumbIndex + 3)
          .map((img, index) => {
            const realIndex = (thumbIndex + index) % images.length;
            return (
              <img
                key={realIndex}
                src={img}
                onClick={() => setCurrent(realIndex)}
                className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${
                  current === realIndex
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            );
          })}
        <button
          onClick={() => setThumbIndex((thumbIndex + 1) % images.length)}
          className="btn btn-sm"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CarouselWithThumbnails;
