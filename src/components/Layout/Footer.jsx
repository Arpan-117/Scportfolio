
function Footer() {
  return (
    <div className='bg-[#213555] bg-opacity-95 text-[#F5EFE7] px-20'>

        <div className='flex flex-row'>

          <div className='basis-1/3 pt-20'>
            <p className='font-bold text-xl text-center'>Your trusted partner in Legal Excellence</p>
          </div>

          <div className='basis-1/3 text-center pt-10'>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className='basis-1/3 pt-20'>
            <div className='flex flex-row'>
              <div className='basis-1/3'>LinkedIn</div>
              <div className='basis-1/3'>Facebook</div>
              <div className='basis-1/3'>Instagram</div>
            </div>
            <br />
            <button className='bg-[#F5EFE7] text-[#213555] px-10 py-2 rounded-md'>Book a free consultation</button>
          </div>

        </div>

        <div className='pt-20'>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Terms of Service/Cookie Policy</p>
        </div>

        <div className='text-center py-20'>
          <p>© 2025 Sougat Chowdhury. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer