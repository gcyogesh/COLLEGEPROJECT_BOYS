import React from 'react'

const OurProgram = () => {
  return (
    <>
      <section id="features">

        <h1 className=' flex justify-center mt-8 font-bold text-4xl'>Our Program</h1>
        
        <div className="flex container flex-col  mx-auto mt-60 space-y-1   md:space-y-0 md:flex-row  bg-blue-200" >
          <div className="flex flex-col space-y-12 md:w-1/2">
            <div className="relative flex">
              <img src="https://images.pexels.com/photos/19251205/pexels-photo-19251205/free-photo-of-a-cup-of-coffee-sits-on-a-table-next-to-a-pair-of-earbuds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Manage Image" className=" mx-auto h-4/5 rounded-lg relative  bottom-48" />
              <button className="absolute left-16 bg-blue-400  text-white py-5  px-8 rounded-md">Our Program</button>
            </div>
          </div>



          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="relative flex ">
              <img src="https://images.pexels.com/photos/19251205/pexels-photo-19251205/free-photo-of-a-cup-of-coffee-sits-on-a-table-next-to-a-pair-of-earbuds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Manage Image" className=" mx-auto h-4/5  rounded-lg relative  bottom-48" />

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default OurProgram 