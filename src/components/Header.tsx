import { getImageUrl } from '@takeshape/routing';
import { Section } from 'components/types/HeaderTypes';
import { cartQuantityAtom, isCartOpenAtom } from 'features/Cart/store';
import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

function Header({ sections, button, logo }:any) {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const cartQuantity = useAtomValue(cartQuantityAtom);
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false)
  const router = useRouter();

useEffect(()=>{
    setIsLoaded(true)
},[])

  return (
    <div className="px-[30px]">
      <div className="header-container">
        <div className="w-[170px] h-[190px] relative translate-y-[20px] cursor-pointer" onClick={()=>router.push('/')}>
          <Image src={getImageUrl(logo)} fill alt="logo" />
        </div>
        <div className={`header`}>
          {sections.map((section: any, index: number) => {
            return (
              <Link href={section?.link?.href} key={index}>
                {section?.name}
              </Link>
            );
          })}
          <button className="generalBtn">{button}</button>
          <div className="cartIcon" onClick={() => (isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true))}>
            {isLoaded && <div className="cartQuantity">{cartQuantity}</div>}
            <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 28.5C21 29.7435 22.008 30.75 23.25 30.75C24.492 30.75 25.5 29.7435 25.5 28.5C25.5 27.258 24.492 26.25 23.25 26.25C22.008 26.25 21 27.258 21 28.5ZM15.75 26.25C16.992 26.25 18 27.2565 18 28.5C18 29.7435 16.992 30.75 15.75 30.75C14.508 30.75 13.5 29.7435 13.5 28.5C13.5 27.258 14.508 26.25 15.75 26.25ZM6.294 0.75L11.4405 21.75H14.5935L10.782 5.25H36L29.0775 24.75H9.219L4.008 3.75H0.740997L0 0.75H6.294Z"
                fill="#222222"
              />
            </svg>
          </div>
        </div>
        <svg
          onClick={() => setOpenMenu(true)}
          className="hamburger-menu"
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H19M1 1H19M1 13H19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: openMenu ? 'flex' : 'none' }} className={`mobile-menu`}>
          {sections.map((section: Section, index: number) => {
            return (
              <Link href={section?.link?.href || ''} key={index}>
                {section?.name}
              </Link>
            );
          })}
          <button className="secondaryBtn">{button}</button>
          <div className="cartIcon" onClick={() => (isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true))}>
          {isLoaded && <div className="cartQuantity" style={{background:'white'}}>{cartQuantity}</div>}
            <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 28.5C21 29.7435 22.008 30.75 23.25 30.75C24.492 30.75 25.5 29.7435 25.5 28.5C25.5 27.258 24.492 26.25 23.25 26.25C22.008 26.25 21 27.258 21 28.5ZM15.75 26.25C16.992 26.25 18 27.2565 18 28.5C18 29.7435 16.992 30.75 15.75 30.75C14.508 30.75 13.5 29.7435 13.5 28.5C13.5 27.258 14.508 26.25 15.75 26.25ZM6.294 0.75L11.4405 21.75H14.5935L10.782 5.25H36L29.0775 24.75H9.219L4.008 3.75H0.740997L0 0.75H6.294Z"
                fill="#222222"
              />
            </svg>
          </div>
          <svg
            onClick={() => setOpenMenu(false)}
            className="closeMenu"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13M1 1L13 13"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
