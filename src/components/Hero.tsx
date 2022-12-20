import { getImageUrl } from '@takeshape/routing';
import Image from 'next/dist/client/image';

function Hero({buttonText,image,primaryText,secondaryText}:any) {
 
  return (
    <div className="px-[30px] mt-[200px]">
      <div className="hero">
        <div>
          <h1>{primaryText}</h1>
          <p>{secondaryText}</p>
          <button className="secondaryBtn mt-[40px]">{buttonText}</button>
        </div>
        <div className="relative rounded-[30px]">
          <Image
            src={getImageUrl(image)}
            width={600}
            height={600}
            alt="img"
            className="shadow-cardShadow rounded-[30px]"
          />
          <div className="heroImage left">
            <Image src="/images/group55.png" width={130} height={130} alt="img" />
          </div>
          <div className="heroImage right">
            <Image src="/images/group44.png" width={130} height={130} alt="img" />
          </div>
          <svg className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer' width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="62" cy="62" r="62" fill="#FFC943" />
            <path
              d="M80 58.5359C82.6667 60.0755 82.6667 63.9245 80 65.4641L56 79.3205C53.3333 80.8601 50 78.9356 50 75.8564L50 48.1436C50 45.0644 53.3333 43.1399 56 44.6795L80 58.5359Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
