import React from 'react'
import Corp from '../assets/services/corporate.jpg'

function Details() {
    return (
        <>
            <div className='flex bg-[#F5EFE7] text-[#3E5879] px-40 py-20 justify-center items-center'>

                <div>
                    <h2 className='text-center text-5xl pb-14'>Service Details</h2>

                    <div>

                        <div className='flex flex-row py-20'>
                            <div className='basis-1/2 pr-4'>
                                <img src={Corp} alt='Corporate' className='w-full h-auto object-contain' />
                            </div>
                            <div className='basis-1/2 pl-4'>
                                <h3 className='text-3xl pb-4'>General Corporate</h3>
                                <p className='pb-2 text-justify'>Navigating corporate legal complexities requires expert guidance to ensure compliance, efficiency, and strategic growth. Our firm provides comprehensive General Corporate legal services tailored to businesses of all sizes.</p>
                                <p className='pb-2 text-justify'>We assist with entity formation, corporate governance, regulatory compliance, contract drafting and negotiation, mergers and acquisitions, shareholder agreements, and risk management. Our team ensures that businesses operate within legal frameworks while mitigating risks and optimizing opportunities.</p>
                                <p className='pb-2 text-justify'>With a client-centric approach, we offer practical solutions that align with your business objectives. Whether you need ongoing legal support or assistance with a specific transaction, our expertise in corporate law ensures seamless operations and informed decision-making.</p>
                                <p className='text-justify'>From startups to multinational corporations, we provide strategic counsel to help businesses thrive in an ever-evolving regulatory landscape. Trust us to safeguard your corporate interests with precision, diligence, and a commitment to excellence.</p>
                            </div>
                        </div>

                        <div className='flex flex-row py-20'>
                            <div className='basis-1/2 pr-4'>
                                <h3 className='text-3xl pb-4'>Income Tax</h3>
                                <p className='pb-2 text-justify'>Navigating tax laws requires precision, strategy, and up-to-date knowledge. Our firm provides expert legal counsel on both <strong>Direct and Indirect Taxation</strong>, ensuring compliance while optimizing tax efficiency for businesses and individuals.</p>
                                <p className='pb-2 text-justify'>We assist with <strong>corporate tax planning, income tax advisory, transfer pricing, GST compliance, customs duties, VAT, and litigation support.</strong> Our team ensures that your financial transactions align with regulatory frameworks, minimizing tax liabilities and mitigating risks.</p>
                                <p className='pb-2 text-justify'>From startups to multinational corporations, we offer tailored solutions, including tax structuring, dispute resolution, audits, and regulatory representation. Whether you need assistance with tax filings, compliance audits, or complex cross-border tax matters, we provide strategic insights and proactive solutions.</p>
                                <p className='text-justify'>With a commitment to accuracy and legal excellence, we help clients navigate evolving tax laws, ensuring seamless financial operations.</p>
                            </div>
                            <div className='basis-1/2 pl-4'>
                                <img src={Corp} alt='Corporate' className='w-full h-auto object-contain' />
                            </div>
                        </div>

                        <div className='flex flex-row py-20'>
                            <div className='basis-1/2 pr-4'>
                                <img src={Corp} alt='Corporate' className='w-full h-auto object-contain' />
                            </div>
                            <div className='basis-1/2 pl-4'>
                                <h3 className='text-3xl pb-4'>Startup Consultation</h3>
                                <p className='pb-2 text-justify'>Launching a startup requires more than just a great idea—it demands a solid legal foundation. Our firm provides <strong>comprehensive Startup Consulting services</strong>, helping entrepreneurs navigate legal complexities with ease.</p>
                                <p className='pb-2 text-justify'>We assist with <strong>business formation, funding agreements, intellectual property protection, contract drafting, compliance, employment laws, and taxation strategies</strong>. From structuring your company to securing investments, we ensure your startup is legally sound and investor-ready.</p>
                                <p className='pb-2 text-justify'>Our team works closely with founders to mitigate risks, protect assets, and ensure regulatory compliance. Whether you’re negotiating with investors, drafting partnership agreements, or setting up employee policies, we provide strategic legal guidance tailored to your business needs.</p>
                                <p className='text-justify'>With deep expertise in startup law and a commitment to innovation, we help businesses scale efficiently while staying legally compliant. <strong>Partner with us</strong> to build a strong legal framework for your startup’s success.</p>
                            </div>
                        </div>

                        <div className='flex flex-row py-20'>
                            <div className='basis-1/2 pr-4'>
                                <h3 className='text-3xl pb-4'>Intellectual Property Consultation</h3>
                                <p className='pb-2 text-justify'>In today’s innovation-driven world, safeguarding your intellectual assets is crucial. Our firm offers <strong>comprehensive Intellectual Property (IP) Consulting</strong> to help businesses and individuals protect, manage, and enforce their creative and commercial rights.</p>
                                <p className='pb-2 text-justify'>We specialize in <strong>trademarks, copyrights, patents, trade secrets, licensing, and IP litigation.</strong> Whether you’re registering a new trademark, filing a patent application, or drafting licensing agreements, our expert legal team ensures your intellectual property is secure and strategically leveraged.</p>
                                <p className='pb-2 text-justify'>Our proactive approach helps clients mitigate infringement risks, navigate regulatory compliance, and maximize the commercial value of their IP assets. From startups to established enterprises, we provide tailored legal solutions that align with your business goals.</p>
                                <p className='text-justify'>Stay ahead in a competitive market with robust IP protection.</p>
                            </div>
                            <div className='basis-1/2 pl-4'>
                                <img src={Corp} alt='Corporate' className='w-full h-auto object-contain' />
                            </div>
                        </div>

                        <div className='flex flex-row py-14'>
                            <div className='basis-1/2 pr-4'>
                                <img src={Corp} alt='Corporate' className='w-full h-auto object-contain' />
                            </div>
                            <div className='basis-1/2 pl-4'>
                                <h3 className='text-3xl pb-4'>Corporate Compliance Consultation</h3>
                                <p className='pb-2 text-justify'>Ensuring corporate compliance is essential for mitigating risks and maintaining regulatory integrity. Our firm provides <strong>comprehensive Corporate Compliance Consulting</strong>, helping businesses adhere to legal, ethical, and industry-specific standards.</p>
                                <p className='pb-2 text-justify'>We assist with <strong>regulatory compliance, risk assessments, corporate governance, anti-bribery & anti-corruption (ABAC) policies, data protection, ESG compliance, and internal audits</strong>. Our team ensures your organization meets all statutory obligations while implementing best practices for sustainable operations.</p>
                                <p className='pb-2 text-justify'>With a proactive approach, we help companies navigate complex regulatory landscapes, conduct due diligence, and establish compliance frameworks that minimize legal exposure. Whether you need assistance with policy development, training programs, or compliance monitoring, we provide tailored solutions to safeguard your business.</p>
                                <p className='pb-2 text-justify'>Stay ahead of regulatory changes and protect your organization from potential liabilities. <strong>Partner with us</strong> to build a strong compliance culture and ensure seamless business operations</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Details