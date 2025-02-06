import React from 'react'
import Corp from '../assets/services/corporate.jpg'

function Details() {
    return (
        <>
            <div className='flex bg-[#F5EFE7] text-[#3E5879] px-40 py-20 justify-center items-center'>

                <div>
                    <h2 className='text-center text-5xl pb-20'>Service Details</h2>

                    <div>

                        <div className='flex flex-row'>
                            <div className='basis-1/2'>
                                <img src={Corp} alt='Corporate' className='w-full h-auto object-contain' />
                            </div>
                            <div className='basis-1/2'>
                                <h3 className='text-3xl pb-4'>General Corporate</h3>
                                <p>Navigating corporate legal complexities requires expert guidance to ensure compliance, efficiency, and strategic growth. Our firm provides comprehensive General Corporate legal services tailored to businesses of all sizes.</p>
                                <p>We assist with entity formation, corporate governance, regulatory compliance, contract drafting and negotiation, mergers and acquisitions, shareholder agreements, and risk management. Our team ensures that businesses operate within legal frameworks while mitigating risks and optimizing opportunities.</p>
                                <p>With a client-centric approach, we offer practical solutions that align with your business objectives. Whether you need ongoing legal support or assistance with a specific transaction, our expertise in corporate law ensures seamless operations and informed decision-making.</p>
                                <p>From startups to multinational corporations, we provide strategic counsel to help businesses thrive in an ever-evolving regulatory landscape. Trust us to safeguard your corporate interests with precision, diligence, and a commitment to excellence.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Details