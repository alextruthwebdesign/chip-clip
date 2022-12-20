import { getImageUrl } from '@takeshape/routing';
import Image from 'next/image';

function Gallery({ Gallery, Title }: any) {
  return (
    <div className="px-[30px] py-[120px]">
      <div className="gallery">
        <p className="text-center font-passion text-[48px] uppercase text-[#222222]">{Title}</p>
        <div className="gallery-images">
          {Gallery.slice(0, 3).map((image: any, index: number) => {
            return (
              <div
                className={
                  index === 0 ? 'relative md:w-[33%] lg:w-[50%] h-full' : 'relative md:w-[33%] lg:w-[25%] h-full'
                }
                key={index}
              >
                <Image src={getImageUrl(image)} fill alt="image" className="rounded-[30px] object-cover" />
              </div>
            );
          })}
        </div>
        <div className="gallery-images">
          {Gallery.slice(3).map((image: any, index: number) => {
            return (
              <div
                className={
                  index === 0 || index === 1
                    ? 'relative md:w-[33%] lg:w-[25%] h-full'
                    : 'relative md:w-[33%] lg:w-[50%] h-full'
                }
                key={index}
              >
                <Image src={getImageUrl(image)} fill alt="image" className="rounded-[30px] object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
