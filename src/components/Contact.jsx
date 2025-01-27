import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex flex-row bg-[#F5EFE7] text-[#3E5879] h-screen px-40 justify-center items-center'>
        <div>
          <h2 className='text-center text-5xl'>Contact Me</h2>

          <div className='py-14'>

            <form className='space-y-4'>

              <div>
                <label htmlFor='name' className='block text-[#3E5879] text-2xl'>Name</label>
                <input type='text' id='name' name='name' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl' />
              </div>
              <div>
                <label htmlFor='email' className='block text-[#3E5879] text-2xl'>Email</label>
                <input type='email' id='email' name='email' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl' />
              </div>
              <div>
                <label htmlFor='phone' className='block text-[#3E5879] text-2xl'>Phone</label>
                <input id='phone' name='phone' type='tel' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl' />
              </div>
              <div>
                <label htmlFor='message' className='block text-[#3E5879] text-2xl'>Message</label>
                <textarea id='message' name='message' required className='w-full mt-2 p-1 rounded-md text-[#3E5879] border-2 border-[#3E5879] shadow-xl'></textarea>
              </div>
              <div>
                <button type='submit' className='bg-[#3E5879] text-[#F5EFE7] rounded-lg py-2 px-4'>Send Message</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Contact