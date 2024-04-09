import React from 'react'
import Banner from '../Banner/Banner'

const UpperAbout = () => {
  return (
    <>
         <div className='space-y-20 pb-20'>
                <section>
                    <Banner image={"https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600"} text={"About Us"} />
                </section>
            </div>  



            <div className='about-wrapper p-2'>
    <div className="container max-w-[1280px] mx-auto flex flex-col md:flex-row gap-6">
        <div className='w-full md:w-1/2 flex items-center'>
            <img src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full ' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center gap-6'>
            <h1 className='text-xl lg:text-3xl font-bold'>Something International College</h1>
            <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under a day for free! Check list below.. Take the course for freeYou can start and finish one of these popular courses in under a day for free! Check lis
            </p>
           
        </div>
    </div>
</div>

    </>
  )
}

export default UpperAbout