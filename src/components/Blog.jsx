import React from 'react'

function Blog() {
  return (
    <>
        <div className='bg-[#F5EFE7] px-40 py-40'>

            <h2 className='text-center text-5xl'>Blogs</h2>

            <div className='flex flex-row py-20'>

                <div className='basis-3/4'>
                    <h3 className='text-3xl'>Latest Post</h3>
                    <br />
                    <p>An image</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    <br />
                    <p>An image</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>

                <div className='basis-1/4'>
                    <h3 className='text-xl'>Trending News</h3>
                    <br />
                    <div className='flex flex-row'>
                        <div className='basis-1/3'>
                            <p>An image</p>
                        </div>
                        <div className='basis-2/3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Blog