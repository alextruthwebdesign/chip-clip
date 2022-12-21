import Image from "next/image";

function AboutCta(){
    return <div className="mt-[190px] px-[30px]">
        <div className="about-cta">
            <div className="absolute w-[100px] h-[130px] top-[-90px]">
                <Image src='/images/group10.png' fill alt='img'/>
            </div>
            <div>
                <p className="font-passion uppercase text-[36px] sm:text-[48px] leading-[36px] sm:leading-[43px]">SIGN UP TO RECEIVE the latest OFFERS, updates & much more</p>
                <input type='text' placeholder="youremail@example.com"/>
                <button className="secondaryBtn w-full mt-[20px]">sign up</button>
            </div>
        </div>
    </div>
}

export default AboutCta;