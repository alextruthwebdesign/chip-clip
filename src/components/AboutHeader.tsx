import Image from 'next/image';

function AboutHeader() {
  return (
    <div className="px-[30px] mt-[80px]">
      <div className="about-hero">
        <h1>a simple gadget you never knew you needed</h1>
        <div className="about-image">
          <Image
            src="/images/Rectangle10.png"
            alt="hero"
            width={1200}
            height={500}
            className="rounded-[30px] shadow-cardShadow w-full"
          />
        </div>
        <p className="mt-[70px] font-passion text-[40px] md:text-[48px] uppercase leading-[43px]">About us</p>
        <div className="about-hero-description">
          <p>While Chip Clip Chain is a very difficult name to say three times fast, using it is as easy as can be!</p>
          <p>
            The simplicity in design is on purpose. It is our wish that this invention makes life easier for you,
            simplifying and organizing all the areas of your life. Every Chip Clip Chain is made in the Ozarks -
            Missouri to be exact.{' '}
          </p>
          <p>We are proud to say that our products are assembled and packaged in the USA.</p>
        </div>
        <button className='secondaryBtn mt-[40px]'>order now</button>
      </div>
    </div>
  );
}

export default AboutHeader;
