import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCertificate, faLowVision, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons/faObjectGroup'


type FeatureProps ={
    icon:IconDefinition,
    title:string,
    description:string
}

const FeatureCard:React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className='bg-blue-50 px-4 py-10 w-full md:w-[45%] lg:w-[31%] flex flex-col justify-center gap-4'>
            <div className="icon text-blue-700 text-6xl">
            <FontAwesomeIcon icon={icon} />
            </div>
            <div className="title">
                <h2 className="font-bold text-2xl">{title}</h2>
            </div>
            <div className="description">
                <p className="text-lg text-justify">{description}</p>
            </div>
        </div>
    )
}

const OurFeatures = () => {
    return (
        <>
            <div className="features-wrapper mt-10 mb-10">
                <div className="container max-w-[1280px] mx-auto flex flex-col gap-[4rem]">
                    <div className="row text-center">
                        <h2 className='font-bold text-3xl'>Primary Goals</h2>
                        <p className='text-lg'>A brief overview of the features or services offered.</p>
                    </div>
                    <div className="row boxes flex gap-6 flex-wrap justify-center">
                        <FeatureCard
                         icon={faBullseye} 
                         title="Our Mission"
                          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsam optio necessitatibus 
                          excepturi quas minima quisquam deleniti, id expedita amet placeat maxime.`}
                           />
                        <FeatureCard
                         icon={faLowVision} 
                         title="Our Vision"
                          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsam optio necessitatibus 
                          excepturi quas minima quisquam deleniti, id expedita amet placeat maxime.`}
                           />
                        <FeatureCard
                         icon={faObjectGroup} 
                         title="Our Objective"
                          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsam optio necessitatibus 
                          excepturi quas minima quisquam deleniti, id expedita amet placeat maxime.`}
                           />

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFeatures;