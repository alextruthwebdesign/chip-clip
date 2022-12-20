import Footer from 'components/Footer';
import Header from 'components/Header';
import Seo from 'components/Seo';
import { Cart } from 'features/Cart/Cart';
import { CartProvider } from 'features/Cart/CartProvider';
import footerData from 'features/Footer/data.preval';
import navigationData from 'features/Navigation/data.preval';
import { Notification } from 'features/Notification/Notification';
import { QuickAddWithData } from 'features/QuickAdd/QuickAddWithData';
import { NextSeoProps } from 'next-seo';
import { PropsWithChildren } from 'react';

export interface LayoutProps {
  seo?: NextSeoProps;
}

export const Layout = ({ children, seo }: PropsWithChildren<LayoutProps>) => {
  return (
    <CartProvider>
      <div>
        <Seo {...seo} />

        {navigationData && <Header {...navigationData}/>}     
          {children}
        <Cart />
        <QuickAddWithData />
        <Notification />

        {footerData && <Footer {...footerData} />}
      </div>
    </CartProvider>
  );
};

export default Layout;
