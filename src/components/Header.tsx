import { getImageUrl } from '@takeshape/routing';
import { HeaderType, Section } from "components/types/HeaderTypes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




function Header({ sections,Button,logo}:HeaderType){
  
    const [openMenu,setOpenMenu] = useState(false);

    return <div className="px-[30px]">
        <div className="header-container">
            <div className="w-[170px] h-[190px] relative translate-y-[20px]">
                <Image src={getImageUrl(logo)} fill alt='logo'/>
            </div>
            <div className={`header`}>
                {sections.map((section:any,index:number)=>{
                    return  <Link href={section?.link?.href}key={index}>
                   {section?.name}
                </Link>
                })}
                <button className='generalBtn'>order now</button>
                <svg width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 34.5C21 35.7435 22.008 36.75 23.25 36.75C24.492 36.75 25.5 35.7435 25.5 34.5C25.5 33.258 24.492 32.25 23.25 32.25C22.008 32.25 21 33.258 21 34.5ZM15.75 32.25C16.992 32.25 18 33.2565 18 34.5C18 35.7435 16.992 36.75 15.75 36.75C14.508 36.75 13.5 35.7435 13.5 34.5C13.5 33.258 14.508 32.25 15.75 32.25ZM6.294 6.75L11.4405 27.75H14.5935L10.782 11.25H36L29.0775 30.75H9.219L4.008 9.75H0.740997L0 6.75H6.294Z" fill="#222222"/>
                    <circle cx="35" cy="12.25" r="12" fill="#FFC943"/>
                <path d="M35.472 7.154C37.4773 7.154 38.48 8.02333 38.48 9.762C38.48 10.2847 38.384 10.7167 38.192 11.058C38 11.3993 37.6853 11.7087 37.248 11.986V12.05C37.7387 12.274 38.0907 12.5727 38.304 12.946C38.5173 13.3087 38.624 13.7833 38.624 14.37C38.624 15.3407 38.3467 16.0927 37.792 16.626C37.2373 17.1487 36.432 17.41 35.376 17.41C34.8533 17.41 34.4053 17.362 34.032 17.266C33.6693 17.1807 33.2 17.0153 32.624 16.77L33.184 14.53C34.0693 14.85 34.6827 15.01 35.024 15.01C35.5253 15.01 35.776 14.7327 35.776 14.178C35.776 13.5807 35.44 13.282 34.768 13.282H33.776V11.186H34.784C35.0827 11.186 35.2907 11.122 35.408 10.994C35.536 10.8553 35.6 10.6527 35.6 10.386C35.6 9.874 35.3493 9.618 34.848 9.618C34.496 9.618 33.872 9.79933 32.976 10.162L32.352 8.002C32.9387 7.682 33.4613 7.46333 33.92 7.346C34.3787 7.218 34.896 7.154 35.472 7.154Z" fill="#222222"/>
                </svg>
            </div>
            <svg onClick={()=>setOpenMenu(true)} className="hamburger-menu" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H19M1 1H19M1 13H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div style={{display:openMenu ? 'flex' : 'none'}} className={`mobile-menu`}>
            {sections.map((section:Section,index:number)=>{
                    return  <Link href={section?.link?.href || ''}key={index}>
                   {section?.name}
                </Link>
                })}
                <button className='secondaryBtn'>{Button}</button>
                <svg width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 34.5C21 35.7435 22.008 36.75 23.25 36.75C24.492 36.75 25.5 35.7435 25.5 34.5C25.5 33.258 24.492 32.25 23.25 32.25C22.008 32.25 21 33.258 21 34.5ZM15.75 32.25C16.992 32.25 18 33.2565 18 34.5C18 35.7435 16.992 36.75 15.75 36.75C14.508 36.75 13.5 35.7435 13.5 34.5C13.5 33.258 14.508 32.25 15.75 32.25ZM6.294 6.75L11.4405 27.75H14.5935L10.782 11.25H36L29.0775 30.75H9.219L4.008 9.75H0.740997L0 6.75H6.294Z" fill="#222222"/>
                    <circle cx="35" cy="12.25" r="12" fill="white"/>
                <path d="M35.472 7.154C37.4773 7.154 38.48 8.02333 38.48 9.762C38.48 10.2847 38.384 10.7167 38.192 11.058C38 11.3993 37.6853 11.7087 37.248 11.986V12.05C37.7387 12.274 38.0907 12.5727 38.304 12.946C38.5173 13.3087 38.624 13.7833 38.624 14.37C38.624 15.3407 38.3467 16.0927 37.792 16.626C37.2373 17.1487 36.432 17.41 35.376 17.41C34.8533 17.41 34.4053 17.362 34.032 17.266C33.6693 17.1807 33.2 17.0153 32.624 16.77L33.184 14.53C34.0693 14.85 34.6827 15.01 35.024 15.01C35.5253 15.01 35.776 14.7327 35.776 14.178C35.776 13.5807 35.44 13.282 34.768 13.282H33.776V11.186H34.784C35.0827 11.186 35.2907 11.122 35.408 10.994C35.536 10.8553 35.6 10.6527 35.6 10.386C35.6 9.874 35.3493 9.618 34.848 9.618C34.496 9.618 33.872 9.79933 32.976 10.162L32.352 8.002C32.9387 7.682 33.4613 7.46333 33.92 7.346C34.3787 7.218 34.896 7.154 35.472 7.154Z" fill="#222222"/>
                </svg>
                <svg onClick={()=>setOpenMenu(false)} className="closeMenu" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>
        </div>
    </div>
}

export default Header;