import  { useState } from 'react'
import Lawyer from '../assets/Lawyer.png'
import Statue from '../assets/home/about_photo.jpg'

function About() {

    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(section === activeSection ? null : section);
    };

    return (
        <>

            <div id="about" className='flex bg-[#F5EFE7] text-[#3E5879] h-screen px-40 py-40 justify-center items-center'>

            <div>   

                <h2 className='text-center text-5xl'>About Me</h2>

                <div className='flex flex-row customAbout'>

                    <div className='basis-1/2 py-20 px-10'>
                        <img src={Lawyer} alt='Lawyer' />
                    </div>

                        <div className='basis-1/2 py-20 px-10'>
                            <h2 className='text-[#3E5879] text-3xl py-2' onClick={() => handleSectionClick('Introduction')}>Introduction</h2>
                            {activeSection === 'Introduction' && (
                                <div>
                                    {/* Content for Introduction */}
                                    <p>This is the introduction content.</p>
                                </div>
                            )}

                            <h2 className='text-[#3E5879] text-3xl py-4' onClick={() => handleSectionClick('Experience')}>Experience</h2>
                            {activeSection === 'Experience' && (
                                <div>
                                    {/* Content for Experience */}
                                    <p>This is the experience content.</p>
                                </div>
                            )}

                            <h2 className='text-[#3E5879] text-3xl py-4' onClick={() => handleSectionClick('Details')}>Details</h2>
                            {activeSection === 'Details' && (
                                <div>
                                    {/* Content for Details */}
                                    <p>This is the details content.</p>
                                </div>
                            )}

                            <h2 className='text-[#3E5879] text-3xl py-4' onClick={() => handleSectionClick('Values')}>Core Values</h2>
                            {activeSection === 'Values' && (
                                <div className='grid grid-cols-2 gap-4'>
                                    {/* Content for Details */}
                                    <p>- Integrity</p>
                                    <p>- Client centric approach</p>
                                    <p>- Precision</p>
                                </div>
                            )}
                        </div>

                </div>

            </div>

            </div>
        </>
    )
}

export default About