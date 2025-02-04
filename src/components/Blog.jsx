import 'react'
import {easeInOut, motion as m} from "framer-motion"
import { container, item } from '../customJs/AnimationContext';
import LawyerL from '../assets/pexels-sora-shimazaki-5673498.jpg'
import Client from '../assets/pexels-pavel-danilyuk-8111884.jpg'
function Blog() {
    console.log('Blog component rendered'); // Add this line

  return (
    <>
        <m.div className='bg-[#E2DFE0] px-40 py-40'
                    initial={{y:'100%'}}
                    animate={{y: '0%'}}
                    exit={{opacity:0}}
                    transition={{duration: .85, ease:easeInOut}}>

            <div className="blogHeader overflow-hidden">
                <m.h2 className='text-center text-5xl p-2'
                initial={{y:'100%'}}
                animate={{y: '0%'}}
                exit={{opacity:1}}
                transition={{duration: .75, ease:easeInOut, delay:.75}}>Blogs</m.h2>
            </div>

            <div className='flex flex-row py-20'>

                <m.div className='basis-3/4' variants={container} initial='hidden' animate='show'>
                    <m.h3 className='text-3xl' variants={item}>Latest Post</m.h3>
                    <br />
                    <m.img className='w-1/4' src={LawyerL} alt='A Lawyer walking'/>
                    <m.p variants={item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</m.p>
                    <br />
                    <m.img className='w-1/4' variants={item} src={Client} alt='A Lawyer walking'/>
                    <m.p variants={item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</m.p>
                </m.div>

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
        </m.div>
    </>
  )
}

export default Blog