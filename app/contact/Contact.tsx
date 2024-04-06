import React from 'react'
import Banner from '../components/Banner/Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    return (
        <>

            {/* Mathi ko banner ko photo ko part  */}
            <div className='space-y-20 pb-20'>
                <section>
                    <Banner image={"https://images.pexels.com/photos/20881534/pexels-photo-20881534/free-photo-of-l-c-binh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} text={"Contact Us"} />
                </section>
            </div>


            {/* Aru content ko Part  */}
            <div className="wrapper mt-20 mb-20">
                <div className="container max-w-[1280px] mx-auto ">
                    <div className="row flex flex-col wrap lg:flex-row gap-8">
                        <div className="col lg:w-1/3 space-y-8 order-2 md:order-1">
                            <div className="row text-center md:text-left">
                                <h2 className='font-extrabold text-2xl md:text-3xl text-purple-900'>Get in touch</h2>
                                <p className='text-gray-600 text-lg'>Looking for help? Send message to our mail. We Will reach you soon.</p>
                            </div>
                            <div className="row divider">
                                <hr />
                            </div>
                            <div className='flex flex-col md:flex-row lg:flex-col gap-8 flex-wrap'>
                                <div className="row flex flex-col gap-4">
                                    <div>
                                        <h3 className='font-bold text-lg'>Address</h3>
                                    </div>
                                    <div className="row flex gap-4">
                                        <div className="icon">🏠</div>
                                        <div>

                                            <a href="" target='_blank' className='text-gray-600'>Gangabu Kathmandu, Nepal</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex flex-col gap-4">
                                    <div>
                                        <h3 className='font-bold text-lg'>Contact No</h3>
                                    </div>
                                    <div className="row flex gap-4">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div>

                                            <a href="" target='_blank' className='text-gray-600'>9868234523</a>
                                        </div>
                                    </div>

                                    <iframe
                                    className=' rounded-md'
                                        title="Map"
                                        width="600"
                                        height="350"
                                        loading="lazy"

                                        allowFullScreen
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456789!2dlongitude!3dlatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM4JzE3LjAiTiAwwrAwNCcyNy4wIkU!5e0!3m2!1sen!2sus!4v1617630324605!5m2!1sen!2sus"
                                    ></iframe>
                                </div>

                            </div>
                        </div>

                        {/* form tira ko part  */}
                        <div className="col lg:grow bg-white p-2 md:p-8 order-1 md:order-2">
                            <div className='row text-center md:text-left'>
                                <h2 className='text-2xl md:text-3xl font-bold text-purple-900'>Contact Us</h2>
                                <p className='text-lg text-gray-600'>Do you have enquiry related to our college?</p>
                            </div>


                            <div className="form-wrapper mt-4 py-4">
                                <form action="">
                                    <div className='row flex flex-col gap-10'>
                                        <div className="row flex flex-col md:flex-row gap-4 md:gap-8">
                                            <input
                                                type="text"
                                                name="name"
                                                id="nameInput"
                                                placeholder='Your Name'
                                                className='md:w-1/2 outline-blue-200 bg-red-50 py-4 px-8 rounded-md border border-blue-900' // Set border color here
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                id="emailInput"
                                                placeholder='Your Email'
                                                className='md:w-1/2 outline-blue-200 bg-red-50 py-4 px-8 rounded-md border border-blue-900' // Set border color here
                                            />
                                        </div>
                                        <div className="row">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subjectInput"
                                                placeholder='Subject'
                                                className='w-full outline-blue-200 bg-red-50 py-4 px-8 rounded-md border border-blue-900' // Set border color here
                                            />
                                        </div>
                                        <div className="row">
                                            <textarea
                                                name="message"
                                                id="messageInput"
                                                rows={8}
                                                placeholder='How can we help?'
                                                className='w-full max-h-[20rem] outline-blue-200 bg-red-50 py-4 px-8 rounded-md border border-blue-900' // Set border color here
                                            ></textarea>
                                        </div>
                                        <div className="row">
                                            <button
                                                type="submit"
                                                className='bg-purple-800 hover:bg-purple-900 text-white font-semibold px-6 py-3 rounded-full'
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact