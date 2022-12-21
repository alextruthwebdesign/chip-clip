import Image from "next/image"

function Testimonial(){
    return <div className="mt-[120px] px-[30px] flex items-center justify-center">
        <div className="w-[1400px] small:px-[60px]">
            <div className="testimonial">
            <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.288 17.376C36.288 22.432 33.44 24.96 27.744 24.96C22.048 24.96 19.2 22.08 19.2 16.32C19.2 10.496 23.232 5.056 31.296 0L36.96 2.112L31.008 9.888L31.2 10.368C34.592 11.072 36.288 13.408 36.288 17.376ZM17.088 17.376C17.088 22.432 14.24 24.96 8.544 24.96C2.848 24.96 0 22.08 0 16.32C0 10.496 4.032 5.056 12.096 0L17.76 2.112L11.808 9.888L12 10.368C15.392 11.072 17.088 13.408 17.088 17.376Z" fill="#222222"/>
            </svg>
            <p className="testimonial-title">I never thought I could find so many uses for it! I’m so happy i bought it. Thank you!</p>
            <p className="mt-[40px] text-white font-passion text-[24px] uppercase">Dianne - illinois</p>
            <div className="testimonial-image left">
                    <Image  src='/images/group7.png' fill alt='img'/>
            </div>
            <div className="testimonial-image right">
                    <Image  src='/images/group8.png' fill alt='img'/>
            </div>
            </div>
        </div>
       
    </div>
}


export default Testimonial