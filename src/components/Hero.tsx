import Image from "next/image";

function Hero(){
    return <div className="px-[30px]">
        <div className="hero">
            <div>
                <h1>A simple idea brought to life</h1>
                <p>While Chip Clip Chain is a very difficult name to say three times fast, using it is as easy as can be!</p>
                <button className="secondaryBtn mt-[40px]">order now</button>
            </div>
            <div >
                <Image src='/images/Group.png' width={600} height={600} alt='img'/>
            </div>
        </div>
    </div>
}

export default Hero;