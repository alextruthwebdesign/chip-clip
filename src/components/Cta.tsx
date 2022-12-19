import Image from "next/image";

function Cta({Button,Description,title}:any){

    return <div className="px-[30px] mt-[120px] flex items-center justify-center">
        <div className="w-[1400px] small:px-[100px]"><div className="cta">
            <p className="ctaTitle">{title}</p>
            <p>{Description}</p>
            <button className="secondaryBtn">{Button}</button>
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