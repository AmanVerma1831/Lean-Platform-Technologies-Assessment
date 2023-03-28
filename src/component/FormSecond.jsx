import React, { useState } from 'react'
import { ReactComponent as Eye } from '../svg/Eye.svg'

function FormSecond() {

    const [inputType1, setInputType1] = useState(false);
    const [inputType2, setInputType2] = useState(false);
    const [inputType3, setInputType3] = useState(false);
    const [inputType4, setInputType4] = useState(false);
    const [inputType5, setInputType5] = useState(false);
    const [inputType6, setInputType6] = useState(false);

    const eye1 = () => {
        setInputType1(!inputType1);
    }
    const eye2 = () => {
        setInputType2(!inputType2);
    }
    const eye3 = () => {
        setInputType3(!inputType3);
    }
    const eye4 = () => {
        setInputType4(!inputType4);
    }
    const eye5 = () => {
        setInputType5(!inputType5);
    }
    const eye6 = () => {
        setInputType6(!inputType6);
    }

    return (
        <div className='flex justify-center items-center my-4'>
            <div className="p-16 md:min-w-[915px] h-auto rounded-md border border-[#7B61FF]">
                <h1>Basic Details</h1>

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First Name" required />
                        </div>
                        <div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Second Name" required />
                        </div>
                        <div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Degree Name" required />
                        </div>
                        <div>
                            <input type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="College Name" required />
                        </div>
                        <div>
                            <input type="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Degree Start Date" required />
                        </div>
                        <div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Degree End Date" required />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-16">
                        <div className="items-center flex justify-end">
                            <Eye onClick={eye1} className='absolute px-1' />
                            <input type={inputType1 ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 1" required />
                        </div>
                        <div className="items-center flex justify-end">
                            <Eye onClick={eye2} className='absolute px-1' />
                            <input type={inputType2 ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 2" required />
                        </div>
                        <div className="items-center flex justify-end">
                            <Eye onClick={eye3} className='absolute px-1' />
                            <input type={inputType3 ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 3" required />
                        </div>
                        <div className="items-center flex justify-end">
                            <Eye onClick={eye4} className='absolute px-1' />
                            <input type={inputType4 ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 4" required />
                        </div>
                        <div className="items-center flex justify-end">
                            <Eye onClick={eye5} className='absolute px-1' />
                            <input type={inputType5 ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 5" required />
                        </div>
                        <div className="items-center flex justify-end">
                            <Eye onClick={eye6} className='absolute px-1' />
                            <input type={inputType6 ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 6" required />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-16">
                        <div className="items-center flex justify-end">
                            <p className='text-sky-500 absolute p-2'>EDIT</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Input Text 7" required />
                        </div>
                        <div className="items-center flex justify-end">
                            <p className='text-sky-500 absolute p-2'>EDIT</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Resume" required />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FormSecond
