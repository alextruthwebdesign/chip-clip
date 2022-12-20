import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { PrimitiveAtom, useAtom } from 'jotai';
import { Fragment } from 'react';
import { pluralizeText } from 'utils/text';
import { CartItem as CartItemType } from '../types';

export interface CartItemProps {
  atom: PrimitiveAtom<CartItemType>;
  onRemove: () => void;
}

export const CartItem = ({ atom, onRemove }: CartItemProps) => {
  const [item, setItem] = useAtom(atom);
  const { imageSrc, imageAlt, name, href, currency, unitAmount, quantity, interval, intervalCount, variantName} = item;
  const variant = variantName.split('/');
 
  return (
    <Fragment>
      <div className="h-[160px] w-[100px] flex-shrink-0 overflow-hidden rounded-[20px] border border-body-200 relative">
        <NextImage
          src={imageSrc}
          alt={imageAlt}
          height={300}
          width={300}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-body-900">
            <div>
              <h3>
                <NextLink href={href} className="text-[#222222] hover:text-accent-900 text-[24px] uppercase">
                  {name}
                </NextLink>
              </h3>
              <p className="text-[#222222] mt-[20px]">Pantry door hook - <span className='font-bold'>{variant[1] ? 'Yes' : 'No'}</span></p>
              <p className="text-[#222222] mt-[10px]">Color - <span className='font-bold'>{variant[0]}</span></p>
            </div>
            <div>
              <div className="ml-4 text-right cursor-pointer" onClick={onRemove}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L2 14M2 2L14 14" stroke="#222222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </div>
              {intervalCount > 0 ? (
                <p className="ml-4 text-right text-xs text-body-500">
                  per {pluralizeText(intervalCount, interval.toLowerCase(), `${interval.toLowerCase()}s`)}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex-1 flex items-center justify-start">
            <div className="flex items-center ">
              <div className="flex space-x-[30px] border-2 border-[#222222] rounded-[10px] px-[13px] py-[8px]">
                <button
                  disabled={quantity < 2}
                  onClick={() => setItem({ ...item, quantity: item.quantity - 1 })}
                  className="text-body-400 hover:text-body-500 disabled:text-body-300 cursor-pointer"
                >
                  <span className="sr-only">One Less</span>
                  <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2H16" stroke="#222222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="flex justify-center items-center w-1 text-[#222222] font-baloo text-[20px]">{quantity}</div>

                <a
                  onClick={() => setItem({ ...item, quantity: item.quantity + 1 })}
                  className="text-body-400 hover:text-body-500 cursor-pointer"
                >
                  <span className="sr-only">One More</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2V16M2 9H16" stroke="#222222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
