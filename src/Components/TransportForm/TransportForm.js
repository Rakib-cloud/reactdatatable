import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";


const TransportForm = () => {
 

      
  return (
 <div className='mt-5'>
     <div className="w-full bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                <p className='text-center'>Student Details</p>
         <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl  ">
             <form className="mt-12 " action="" method="POST" >
                 <div className=' flex'>
                 <div className="relative ">
                     <input id="email" name="email" type="text"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                            placeholder="john@doe.com"/>
                     <label htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                         address</label>
                 </div>
                 <div className="relative ml-2">
                     <input id="password" type="password" name="password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                            placeholder="Password"/>
                     <label htmlFor="password"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                 </div>

                 <div className="relative ml-2">
                     <input id="password" type="password" name="password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                            placeholder="Password"/>
                     <label htmlFor="password"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                 </div>

                 </div>


             </form>


         </div>
     </div>
 </div>
  )
}

export default TransportForm