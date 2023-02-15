import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
 
export function Balance(){
      const [email, setEmail] = useState<string>();
      const [amount, setAmount] = useState<String>('Refresh check your balance');

      async function sendData(){
         const response = await api.post('balance', {
            email
         });
         const saldo = +(response.data.saldo);
         const number = typeof 0;
         if(Number.isNaN(saldo)) {
            return setAmount(response.data.errorMessage); 
         } else {
            return setAmount(saldo.toLocaleString('en', {style: 'currency', currency: 'USD'}));
         }
      }

   return (
      <div className="h-screen flex items-center justify-center bg-cyan-900 text-white uppercase font-extrabold">
         <div className="shadow-xl shadow-zinc-300 bg-cyan-700 p-4 border-2 rounded-lg border-zinc-400 h-4/5 w-2/5 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-5xl font-bold ">Balance</h1>
            <label htmlFor="yourEmail" className="text-2xl block uppercase tracking-wide text-white font-bold mb-2">Your email:</label>
            <input onChange={e => {setEmail(e.target.value)}} type="email" id="yourEmail" className="text-center font-bold text-4xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <label htmlFor="yourAmount" className="text-2xl block uppercase tracking-wide text-white font-bold mb-2">Current amount:</label>
            <input placeholder={amount.toString()} type="amount" id="yourAmount" className="text-center text-5xl font-bold bg-zinc-300 shadow-xl shadow-zinc-700 border-black rounded py-3" disabled/>
            <div className="w-full flex items-start justify-evenly">
            <Link to="/" className="flex items-center justify-center text-3xl w-2/6 h-20 bg-red-500 mb-6 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</Link>
            <button onClick={sendData} className="text-2xl w-2/6 h-20 bg-green-500 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Refresh balance</button>
            </div>
         </div>
      </div>
   )
}