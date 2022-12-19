import Image from 'next/image';

type GroupType = {
  type: string;
};

function Group({ type }: GroupType) {
  return (
    <>
      {type === 'right' ? (
        <div className="px-[30px] mt-[60px]">
          <div className="group-container">
            <div className="group-images">
              <Image src="/images/Rectangle.png" alt="img" width={300} height={300} />
              <Image src="/images/Rectangle1.png" alt="img" width={300} height={300} className="max-h-[800px]" />
            </div>
            <div className="group-text-right">
              <p className="group-title">How it all started</p>
              <p>
                It all started with grandchildren. Lost chip clips. Stale cereal. Spills in the pantry. We knew we
                needed something better.
              </p>
              <p>
                Our first idea was to attach the chip clips to the wall with a bit of chain so the grandkids could reach
                them. That way the chips couldn’t be lost, right? It worked, but took up too much space.
              </p>
              <p>We made it better. We lengthened the chain and doubled the size by adding a second chain.</p>
              <p>
                Now each chain could house multiple clips. Now the product matched our appetite for chips and cereal.
              </p>
              <button className="generalBtn mt-[30px]">order now</button>
            </div>
          </div>
        </div>
      ) : type === 'left' ? (
        <div className="px-[30px] mt-[60px]">
          <div className='group-container-left'>
            <div className='group-text-left'>
              <p className='group-title-left'>But where to keep them?</p>
              <p>
                We tried the shelf, but it still took up too much space. We noticed the back of the pantry door was
                empty - perfect! We put a door hook at the top, and voila! Problem solved.</p><p> From there, everyone wanted
                one. It turns out that lots of people like chips. And what’s more, these Chip Clip Chains have value in
                other areas outside the pantry - teachers wanted one to display artwork in their classrooms. Mothers
                wanted one to organize their cars. Families wanted one to hang Christmas cards. Truck drivers wanted one
                to sort paperwork and receipts. The possibilities are endless!
              </p>
              
              <button className='generalBtn mt-[20px]'>order now</button>
            </div>
            <div>
                <Image src='/images/Rectangle2.png'alt="img" width={500} height={300} />
            </div>
          </div>
        </div>
      ): <div className='mt-[140px] px-[30px] flex flex-col items-center justify-center'>
            <p className='text-center text-[50px] md:text-[96px] font-passion max-w-[900px] uppercase text-[#FFC943] leading-[60px] md:leading-[86px]'>The simplicity in design is on purpose</p>
            <div className='relative mt-[70px]'>
                <Image src='/images/Rectangle3.png'width={1000} height={400} alt='img' />
            </div>
        </div>}
    </>
  );
}

export default Group;
