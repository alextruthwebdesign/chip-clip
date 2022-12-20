import { signedInCheckout } from 'config';
import { getCheckoutUrl } from 'features/Cart/transforms';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { CartCreateMutationResponse, CartCreateMutationVariables } from 'types/storefront';
import { useStorefrontMutation } from 'utils/storefront';
import { CartCreateMutation } from '../queries.storefront';
import { cartItemsAtom, cartQuantityAtom, cartSubtotalAtom, isCartCheckingOutAtom } from '../store';
import { getCartVariables } from '../utils';

export const CartCheckout = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);
  const quantity = useAtomValue(cartQuantityAtom);
  const items = useAtomValue(cartItemsAtom);
  const subtotal = useAtomValue(cartSubtotalAtom);

  const [setCartMutation, { data }] = useStorefrontMutation<CartCreateMutationResponse, CartCreateMutationVariables>(
    CartCreateMutation
  );

  const handleCheckout = useCallback(() => {
    if (signedInCheckout && !session) {
      push(`/auth/signin?error=CheckoutSessionRequired&callbackUrl=${encodeURIComponent('/_checkout')}`);
      return;
    }

    setIsCartCheckingOut(true);
    setCartMutation({
      variables: getCartVariables(items, session)
    });
  }, [session, setIsCartCheckingOut, setCartMutation, items, push]);

  useEffect(() => {
    const checkoutUrl = getCheckoutUrl(data);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [data]);

  return (
    <div className='bg-[#222222] rounded-[20px] flex justify-between px-[40px] py-[20px] text-white uppercase text-[20px] cursor-pointer' onClick={()=>{
      if(quantity === 0)return;
      handleCheckout()
    }
    }>
      <p className='font-passion'>Checkout</p>
      <p className='font-passion'>${subtotal}</p>
    </div>
  );
};
