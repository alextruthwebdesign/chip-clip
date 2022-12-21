import AboutCta from 'components/AboutCta';
import AboutGroup from 'components/AboutGroup';
import AboutHeader from 'components/AboutHeader';
import Testimonial from 'components/Testimonial';
import { ResponsePage } from './types';

export interface PageProps {
  page: ResponsePage;
}

export const Page = ({ page }: PageProps) => {
  
  return (
    <>
      <AboutHeader/>
      <Testimonial/>
      <AboutGroup/>
      <AboutCta/>
    </>
  );
};

export default Page;
