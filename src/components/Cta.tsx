import Image from "next/image";

function Cta(){
    return <div className="px-[30px] mt-[120px] flex items-center justify-center">
        <div className="w-[1400px] small:px-[100px]"><div className="cta">
            <p className="ctaTitle">We enjoy hearing about the many uses of Chip Clip Chain!</p>
            <p>We welcome feedback and would love to hear how you use it in your life. Feel free to leave a comment or email us!</p>
            <button className="secondaryBtn">get in touch</button>
            <div className="ctaImages left">
                <Image  src='/images/group1.png' fill alt='img'/>
            </div>
            <div className="ctaImages right">
                <Image  src='/images/group2.png' fill alt='img'/>
            </div>
        </div></div>
       
        
    </div>
}


export default Cta;