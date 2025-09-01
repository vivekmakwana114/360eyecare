'use client'

function BookFreeConsultation() {
    return (
        <div className='bg-white p-8 flex justify-center md:hidden'>
            <div className='text-[#FBBC05] bg-[#28305F] rounded-full p-3 flex items-center w-80 gap-x-3' onClick={() => {
                document.getElementById("form-section").scrollIntoView({
                    behavior: "smooth",
                });
            }}>
                <img src="/public/Right.png" alt="not available" />
                <span>Book Free Consultation Now</span>
                
            </div>

        </div>
    )
}

export default BookFreeConsultation
