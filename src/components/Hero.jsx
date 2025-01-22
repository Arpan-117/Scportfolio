import React from 'react'
import Lawyer from '../assets/Lawyer.png'

function Hero() {
  return (
    <>

        <div className='flex flex-row bg-[#F5EFE7] text-[#3E5879] h-screen px-40 justify-center items-center'>

          <div className='basis-2/3 py-40 px-10'>
            <p className='text-[#3E5879] text-4xl'>
              Expert Lawyer Specializing in Compliance, Risk and Governance
            </p>
            <br />
            <p className='text-[#3E5879] text-2xl'>
              Helping businesses navigate legal complexities with confidence and precision.
            </p>
            <br />
            <button className='bg-[#3E5879] text-[#F5EFE7] rounded-lg py-2 px-4'>Explore Services</button>
          </div>

          <div className='basis-1/3 py-40 px-10'>
            <img src={Lawyer} alt='Lawyer' />
          </div>
 {/* Starting with the hero... */}
        </div>
    </>
  )
}

export default Hero