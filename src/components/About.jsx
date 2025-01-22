import React, { useState } from 'react'
import Lawyer from '../assets/Lawyer.png'

function About() {

    const [activeHeading, setActiveHeading] = useState(null);

    // Content for each heading
    const headings = [
        { id: 'introduction', title: 'Introduction', content: 'This is the introduction content.' },
        { id: 'experience', title: 'Experience', content: 'This is the experience content.' },
        { id: 'details', title: 'Details', content: 'This is the details content.' },
        { id: 'values', title: 'Values', content: 'This is the core values content.' },
    ];

    // Toggle the active heading
    const toggleHeading = (id) => {
        setActiveHeading((prev) => (prev === id ? null : id));
    };

    return (
        <>

            <div className='flex bg-[#F5EFE7] text-[#3E5879] h-screen px-40 justify-center items-center'>

            <div>

                <h2 className='text-center text-5xl'>About Me</h2>

                <div className='flex flex-row'>

                    <div className='basis-1/2 py-20 px-10'>
                        <img src={Lawyer} alt='Lawyer' />
                    </div>

                    {/* <div className='basis-1/2 py-40 px-10'>
                        <ul className='text-[#3E5879] text-2xl'>
                            <br />
                            <li>Introduction</li>
                            <br />
                            <li>Experience</li>
                            <br />
                            <li>Details</li>
                            <br />
                            <li>Core Values</li>
                        </ul>
                    </div> */}

                    <div className='basis-1/2 py-40 px-10'>
                    <ul>
                    {headings.map((heading) => (
                        <li key={heading.id}>
                            {/* Render the heading */}
                            <h2 className='text-[#3E5879] text-3xl' onClick={() => toggleHeading(heading.id)}>
                                {heading.title}
                            </h2>
                            {/* Render the content if the heading is active */}
                            {activeHeading === heading.id && (
                                <p className='text-[#3E5879] text-xl'>{heading.content}</p>
                            )}
                        </li>
                    ))}
                    </ul>
                    </div>

                </div>

                </div>

            </div>

        </>
    )
}

export default About