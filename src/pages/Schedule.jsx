import { useState } from 'react'
import { format } from "date-fns"

function Schedule() {

    const [date, setDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <>
            <div id='contact' className='flex flex-row bg-[#F5EFE7] text-[#3E5879] h-screen px-40 justify-center items-center'>
                <div>
                    <h2 className='text-center text-5xl'>Schedule a Consultation</h2>

                    <div className='py-14'>

                        <form className='space-y-4'>

                            <div>
                                <label htmlFor='name' className='block text-[#3E5879] text-2xl'>Name</label>
                                <input type='text' id='name' name='name' required className='w-full mt-2 py-2 px-4 rounded text-[#3E5879] border bg-white shadow' />
                            </div>

                            <div>
                                <label htmlFor='phone' className='block text-[#3E5879] text-2xl'>Contact Number</label>
                                <input id='phone' name='phone' type='tel' required className='w-full mt-2 py-2 px-4 rounded text-[#3E5879] border bg-white shadow' />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-[#3E5879] text-2xl'>Query in short</label>
                                <textarea id='message' name='message' required className='w-full mt-2 py-2 px-4 rounded text-[#3E5879] border bg-white shadow'></textarea>
                            </div>

                            <div>
                                <div
                                    onClick={() => setShowCalendar(!showCalendar)}
                                    className="border px-4 py-2 rounded bg-white shadow"
                                >
                                    {date ? format(date, "PPP") : "Select a date"}
                                </div>
                                {showCalendar && (
                                    <div className="bg-white border shadow p-2 inline-block">
                                        <input
                                            type="date"
                                            onChange={(e) => {
                                                setDate(new Date(e.target.value));
                                                setShowCalendar(false);
                                            }}
                                            className="border p-2 rounded"
                                        />
                                    </div>
                                )}

                            </div>

                            <div>
                                <button type='submit' className='bg-[#3E5879] text-[#F5EFE7] rounded-lg py-2 px-4'>Send Message</button>
                            </div>
                        </form>

                    </div>

                    <div className='grid grid-cols-3 py-14 px-8 text-center bg-[#3E5879] text-[#F5EFE7]'>
                        <div className='px-2'>
                            <p>Email : abc@email.com</p>
                        </div>
                        <div className='px-2'>
                            <p>Office : 0657-2300301</p>
                        </div>
                        <div className='px-2'>
                            <p>Mobile : +91-8235278909</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Schedule