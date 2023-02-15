import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
 
export function Withdraw(){
      const [email, setEmail] = useState<string>();
      const [amount,setAmount] = useState<String>();
      const [responseStatus, setResponseStatus] = useState<String>("Request status");

      async function sendData(){
         const response = await api.post('withdraw',{
            email,
            amount,
         }) 
         const successMessage = response.data.successMessage;
         const errorMessage = response.data.errorMessage;
         if(successMessage != undefined) {
            return setResponseStatus(successMessage);
         } else {
            return setResponseStatus(errorMessage);
         }
      }

      return (
         <div className="h-screen flex items-center justify-center bg-cyan-900 uppercase text-white font-extrabold">
            <div className="shadow-xl shadow-zinc-300 bg-cyan-700 p-4 border-2 rounded-lg border-zinc-300 h-4/5 w-2/5 flex flex-col gap-10 items-center justify-center">
               <h1 className="text-5xl font-bold ">Withdraw</h1>
               <label htmlFor="email" className="text-3xl block uppercase tracking-wide text-white font-bold mb-2">Email:</label>
               <input onChange={e => {setEmail(e.target.value)}} type="email" id="email" className="text-center font-bold text-3xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
               <label htmlFor="amount" className="text-3xl block uppercase tracking-wide text-white font-bold mb-2">Amount:</label>
               <input onChange={e => {setAmount(e.target.value)}} type="number" id="amount" className="text-center font-bold text-3xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
               <input placeholder={responseStatus.toString()} type="text" id="yourAmount" className="w-full text-center text-2xl font-bold bg-gray-200 border border-gray-400 rounded py-3" disabled/>
               <div className="w-full flex items-start justify-evenly">
               <Link to="/" className="flex items-center justify-center text-3xl w-2/6 h-20 bg-red-500 mb-6 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</Link>
               <button onClick={sendData} className="text-3xl w-2/6 h-20 bg-green-500 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Finalize</button>
               </div>
            </div>
         </div>
      )
}