import { useState, useEffect } from 'react'

const EXPIRATION_HOURS = 24;

function Agreement() {

    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        const savedAgreement = localStorage.getItem('userAgreed');
        const savedTimestamp = localStorage.getItem('agreementTimestamp');

        if (savedAgreement === 'true' && savedTimestamp) {
            const timeElapsed = Date.now() - parseInt(savedTimestamp, 10);
            const hoursElapsed = timeElapsed / (1000 * 60 * 60);

            if (hoursElapsed < EXPIRATION_HOURS) {
                setAgreed(true);
            } else {
                localStorage.removeItem('userAgreed');
                localStorage.removeItem('agreementTimestamp');
            }
        }
    }, []);

    const handleAgree = () => {
        setAgreed(true);
        localStorage.setItem('userAgreed', 'true');
        localStorage.setItem('agreementTimestamp', Date.now().toString());
    }

    return (
        !agreed && (
            <div className='fixed z-[100] inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                <div className='bg-white p-6 rounded-lg shadow-lg w-3/4'>
                    <h2 className='text-lg font-semibold mb-4 text-center'>DISCLAIMER</h2>
                    <p className='text-sm mb-4'>
                        The rules of the Bar Councilof India prohibit law firms from soliciting work or advertising in any manner. By clicking on 'I Agree', the user acknowledges that:
                    </p>
                    <p className='text-sm mb-4'>The user wishes to gain more informaton about Phoenix Legal, its practice areas and its attorneys, for his/her own information and use.</p>
                    <p className='text-sm mb-4'>The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and
                        None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
                    </p>
                    <p className='text-sm mb-4'>Phoenix Legal is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.</p>
                    <button
                        onClick={handleAgree}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        I Agree
                    </button>
                </div>
            </div>
        )
    );
}

export default Agreement