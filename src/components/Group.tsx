import { getImageUrl } from '@takeshape/routing';
import Image from 'next/image';


function Group({left,right,Button,Description,title,Image:{path}}:any) {

  return (
    <>
      {right ? (
        <div className="px-[30px] mt-[60px]">
          <div className="group-container">
            <div className="group-images">
              <Image src={getImageUrl(path)} alt="img" width={650} height={300} />
            </div>
            <div className="group-text-right">
              <p className="group-title">{title}</p>
              <p dangerouslySetInnerHTML={{__html: Description.replaceAll('\n','</br>')}}>
              </p>
              <button className="generalBtn mt-[30px]">{Button}</button>
            </div>
          </div>
        </div>
      ) : left ? (
        <div className="px-[30px] mt-[60px]">
          <div className='group-container-left'>
            <div className='group-text-left'>
              <p className='group-title-left'>{title}</p>
              <p dangerouslySetInnerHTML={{__html: Description.replaceAll('\n','</br>')}}>
              </p>
              
              <button className='generalBtn mt-[20px]'>order now</button>
            </div>
            <div>
                <Image src={getImageUrl(path)} alt="img" width={500} height={300} className='shadow-cardShadow rounded-[30px]' />
            </div>
          </div>
        </div>
      ): <div className='mt-[140px] px-[30px] flex flex-col items-center justify-center'>
            <p className='text-center text-[50px] md:text-[96px] font-passion max-w-[900px] uppercase text-[#FFC943] leading-[60px] md:leading-[86px]'>{title}</p>
            <div className='relative mt-[70px]'>
                <Image src={getImageUrl(path)} width={1000} height={400} alt='img' />
            </div>
        </div>}
    </>
  );
}

export default Group;
