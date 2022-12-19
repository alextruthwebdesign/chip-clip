import Image from "next/image";

function Gallery(){
    return <div className="px-[30px] py-[120px]">
        <div className="gallery">
            <p className="text-center font-passion text-[48px] uppercase text-[#222222]">see it in action</p>
            <div className="gallery-images">
                <div className="relative md:w-[33%] lg:w-[50%] h-full">
                    <Image src='/images/Rectangle4.png' fill alt='image' className="rounded-[30px] object-cover"/>
                </div>
                <div className="relative md:w-[33%] lg:w-[25%] h-full">
                    <Image src='/images/Rectangle5.png' fill alt='image'className="rounded-[30px] object-cover"/>
                </div>
                <div className="relative md:w-[33%] lg:w-[25%] h-full">
                    <Image src='/images/Rectangle6.png' fill alt='image'className="rounded-[30px] object-cover"/>
                </div>
            </div>
            <div className="gallery-images"> 
                <div className="relative md:w-[33%] lg:w-[25%] h-full">
                    <Image src='/images/Rectangle7.png' fill alt='image'className="rounded-[30px] object-cover"/>
                </div>
                <div className="relative md:w-[33%] lg:w-[25%] h-full">
                    <Image src='/images/Rectangle8.png' fill alt='image'className="rounded-[30px] object-cover"/>
                </div>
                <div className="relative md:w-[33%] lg:w-[50%] h-full">
                    <Image src='/images/Rectangle9.png' fill alt='image'className="rounded-[30px] object-cover"/>
                </div>
            </div>
        </div>
    </div>
}

export default Gallery;