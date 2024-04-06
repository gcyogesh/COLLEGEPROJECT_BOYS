import React from 'react'
import Banner from '../Banner/Banner'

const UpperAbout = () => {
  return (
    <>
         <div className='space-y-20 pb-20'>
                <section>
                    <Banner image={"https://images.pexels.com/photos/20881534/pexels-photo-20881534/free-photo-of-l-c-binh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} text={"About Us"} />
                </section>
            </div>



    <div className='about-wrapper p-2'>
    <div className="container max-w-[1280px] mx-auto row flex flex-col md:flex-row gap-6 ">
        <div className='col flex md:items-center'>
            <div className="row">
                <img src="https://images.pexels.com/photos/20881534/pexels-photo-20881534/free-photo-of-l-c-binh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='lg:w-[80rem]' />
            </div>
        </div>
        <div className='col flex flex-col justify-center align-center gap-6'>
            <div className="row">
                <h3 className='text-xl lg:text-3xl font-bold'>Welcome to best BBS college of this area, Choose best college nearyBy you.</h3>
            </div>
            <div className="row">
                <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under a day for free! Check list below.. Take the course for free</p>
            </div>
            <div className="row flex flex-col gap-4">
                <div className="row flex gap-6">
                    <div className="col">
                        <div className="row logo">
                            <img src="https://images.pexels.com/photos/20881534/pexels-photo-20881534/free-photo-of-l-c-binh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-[10rem]' />
                        </div>
                    </div>
                    <div className="col flex flex-col">
                        <div className="row">
                            <h3 className="text-xl font-bold">
                                400+ Courses
                            </h3>
                        </div>
                        <div className="row">
                            <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quae?</p>
                        </div>
                    </div>
                </div>
                <div className="row flex gap-6">
                    <div className="col">
                        <div className="row logo">
                            <img src="" alt="" className='w-[10rem]' />
                        </div>
                    </div>
                    <div className="col flex flex-col">
                        <div className="row">
                            <h3 className="text-xl font-bold">
                                Lifetime Access
                            </h3>
                        </div>
                        <div className="row">
                            <p className='text-gray-600 text-justify md:text-left'>You can start and finish one of these popular courses in under our site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quae?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default UpperAbout