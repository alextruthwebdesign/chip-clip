import { Dialog, Transition } from '@headlessui/react';
import PageLoader from 'components/PageLoader';
import { isStorybook } from 'config';
import { useAtom, useAtomValue } from 'jotai';
import { Fragment } from 'react';
import { CartItem } from './components/CartItem';
import { CartCheckout } from './components/Checkout';
import { CartEmpty } from './components/Empty';
import { cartItemAtomsAtom, cartSubtotalAtom, isCartCheckingOutAtom, isCartOpenAtom } from './store';

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const isCartCheckingOut = useAtomValue(isCartCheckingOutAtom);
  const [items, dispatch] = useAtom(cartItemAtomsAtom);
  const subtotal = useAtomValue(cartSubtotalAtom);


  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={() => isStorybook || setIsCartOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 py-[30px] pr-[30px]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-600"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-600"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md relative rounded-[30px]">
                  {isCartCheckingOut && (
                    <div className="z-20 bg-gray-500 bg-opacity-75 absolute h-full w-full rounded-[30px]">
                      <PageLoader colorClass="text-background" />
                    </div>
                  )}

                  <div className="flex h-full flex-col bg-background shadow-xl bg-[#FFC943] rounded-[30px]">
                    <div className="flex-1 overflow-y-auto px-4 sm:px-6">
                      <div className="flex justify-center relative border-b-2 border-[#222222] leading-[43px] py-[40px]">
                        <Dialog.Title className="text-[48px] font-passion uppercase"> Shopping cart </Dialog.Title>
                        <div className="items-center absolute left-0 top-[50%] translate-y-[-50%]">
                          <button
                            type="button"
                            onClick={() => setIsCartOpen(false)}
                            className='outline-0'
                          >
                            <span className="sr-only">Close panel</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 2L2 20M2 2L20 20" stroke="#222222" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                          </button>
                        </div>
                      </div>

                      <div className="mt-[20px]">
                        {items.length ? (
                          <div className="flow-root">
                            <ul role="list" className="-my-6">
                              {items.map((atom) => (
                                <li key={atom.toString()} className="flex py-6 border-b-2 border-[#222222]">
                                  <CartItem atom={atom} onRemove={() => dispatch({ type: 'remove', atom })} />
                                </li>
                              ))}
                            </ul>
                            <div className='flex justify-between mt-[40px] text-[24px] uppercase'>
                              <p className='font-passion'>subtotal</p>
                              <p className='font-passion'>${subtotal}</p>
                            </div>
                          </div>
                        ) : (
                          <CartEmpty />
                        )}
                        
                      </div>
                    </div>

                    <div className="py-6 px-4 sm:px-6">
                      <div className="mt-6">
                        <CartCheckout />
                      </div>
                      <p className='text-center mt-[40px] pb-[20px] text-[18px] text-[#222222]'>Taxes and Shipping calculated at checkout</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
