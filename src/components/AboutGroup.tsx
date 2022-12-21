import Image from "next/image"

const LIST:any = {
    'Organize your pantry!':'Hang on shelves or over the pantry door for chips, bread, cereal and more!',
    'Show off your artwork!':'Mount on the wall to easily display your creations!',
    'Bring order to your car or truck!':'Hang on the coat hook for long car trips to keep games, paper, bags of crayons and more at your child’s fingertips!',
    'Spread holiday cheer!':'Mount on a wall during the holiday season to display cards, stockings, and more!',
    'Arrange your classroom!':'Teachers, use the Chip Clip Chain to group materials, organize papers, or display student work!',
    'Impress your work friends!':'Use in your cubicle to bring a special organization to knick knacks, picture displays, or even paper sorting!',
    'Arrange your kitchen!':'Use in restaurants…dry fresh herbs, keep recipes close at hand, organize towels, and more!',
    'Form a first aid center!':"Hang on the back of a door at a clinic, hospital, or doctor's office for quick access to bandages, tape, and more!",
    'Sort your paperwork!':'Label your clips to group receipts, invoices, schoolwork, and more to keep your life orderly!'
}

function AboutGroup(){
    return <div className="mt-[120px] px-[30px]">
        <div className="about-group">
            <div className="about-image-section">
                <p>the many ways in which you can use your own chip clip chain</p>
                <div className="sm:absolute mt-[50px] sm:mt-[0px] sm:translate-x-[220px] top-[400px]">
                    <Image src='/images/group9.png' width={190} height={700} alt='img' className="max-h-[700px]"/>
                </div>
            </div>
            <div className="about-list">
                {Object.keys(LIST).map((item:string,index:number)=>{
                    return <div key={index} className='mb-[40px] max-w-[450px]'>
                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 0L19 3.26087L7.6 15L4.43333 11.7391L15.8333 0Z" fill="#FFC943"/>
                            <path d="M10.7667 11.7391L7.6 15L0 7.17391L3.16667 3.91304L10.7667 11.7391Z" fill="#FFC943"/>
                        </svg>
                        <div>
                            <p className="font-passion text-[24px] leading-[20px] text-[#222222]">{item}</p>
                            <p className="mt-[15px] text-[#686868]">{LIST[item]}</p>
                        </div>
                    </div>
                })}
                <button className="secondaryBtn ml-[30px]">order now</button>
            </div>
        </div>
    </div>
}


export default AboutGroup