import { getImageUrl } from '@takeshape/routing';
import { FooterType, Section } from 'components/types/FooterTypes';
import Image from 'next/image';
import Link from 'next/link';

function Footer({navigation,SocialsText,Socials,Copyright}:FooterType) {

  return (
    <div className='py-[120px] px-[30px] bg-[#222222]'>
      <div className='footer-container'>
        <div>
          <div className='footer-links'>
            {navigation?.sections.map((item:Section,index:number)=>{
          
              return <Link key={index} href={item?.links[0]?.href || ''}>{item?.links[0]?.name}</Link>
            })}
           
          </div>
          <p className='mt-[30px] text-center mid:text-left'>{Copyright}</p>
        </div>
        <div className='socials'>
          <div>
            <p>{SocialsText}</p>
            {Socials.map((social:any,index:number)=>{
              return <div className='relative' key={index}>
                <Image  src={getImageUrl(social)} width={24} height={24} alt='image'/>
              </div>
            })}
            
          </div>
          <p>Design by <span>TRUTH WEB</span></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
