import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 
export function Balance(){
      const [email, setEmail] = useState<string>();
      const [amount, setAmount] = useState<String>('Refresh check your balance');
      const navigate = useNavigate();

         //setAmount(initialAmount.toLocaleString('en', {style: 'currency', currency: 'USD'}))



      async function sendData(){
         const data = {
            email: email,
         }
         
         await fetch('http://localhost:3333/balance',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
               "Content-Type": "application/json; charset=UTF-8"
            }
         })
         .then(response => response)
         .then(body => console.log(body))
         .catch(error => console.error(error))
      }

   return (
      <div className="h-screen flex items-center justify-center bg-zinc-300">
         <div className="bg-zinc-100 p-4 border-2 rounded-lg border-zinc-400 h-4/5 w-2/5 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-5xl font-bold ">Transfer</h1>
            <label htmlFor="yourEmail" className="text-xl block uppercase tracking-wide text-gray-700 font-bold mb-2">Your email:</label>
            <input onChange={e => {setEmail(e.target.value)}} type="email" id="yourEmail" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <label htmlFor="yourAmount" className="text-xl block uppercase tracking-wide text-gray-700 font-bold mb-2">Current amount:</label>
            <input placeholder={amount?.toString()} type="amount" id="yourAmount" className="text-center text-4xl font-bold bg-gray-200 border border-gray-400 rounded py-3" disabled/>
            <div className="w-full flex items-start justify-evenly">
            <Link to="/" className="flex items-center justify-center text-3xl w-2/6 h-20 bg-red-500 mb-6 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</Link>
            <button onClick={sendData} className="text-2xl w-2/6 h-20 bg-green-500 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Refresh balance</button>
            </div>
         </div>
      </div>
   )
}