import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 
export function NewCostumer(){
      const [email, setEmail] = useState<string>();
      const [name, setName] = useState<String>();
      const [phone, setPhone] = useState<String>();
      const navigate = useNavigate();



      async function sendData(){
         const data = {
            email: email,
            name: name,
            phone: phone
         }
         
         await fetch('http://localhost:3333/teste',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
               "Content-Type": "application/json; charset=UTF-8"
            }
         })
         .then(response => response.status)
         .then(status => {
            checkStatus(status);
         })
         .catch(error => console.error(error))
      }

      const checkStatus = (status:number) => {
         if(status === 200) {
            navigate('/completed');
         } else {
            navigate('/failed');
         }
      }

   return (
      <div className="h-screen flex items-center justify-center bg-zinc-300">
         <div className="bg-zinc-100 p-4 border-2 rounded-lg border-zinc-400 h-4/5 w-2/5 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-5xl font-bold ">New costumer</h1>
            <label htmlFor="email" className="text-xl block uppercase tracking-wide text-gray-700 font-bold mb-2">Email:</label>
            <input onChange={e => {setEmail(e.target.value)}} type="email" id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <label htmlFor="name" className="text-xl block uppercase tracking-wide text-gray-700 font-bold mb-2">Name:</label>
            <input onChange={e => {setName(e.target.value)}} type="text" id="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <label htmlFor="telefone" className="text-xl block uppercase tracking-wide text-gray-700 font-bold mb-2">Phone:</label>
            <input onChange={e => {setPhone(e.target.value)}} type="tel" id="telefone" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
            <div className="w-full flex items-start justify-evenly">
            <Link to="/" className="flex items-center justify-center text-3xl w-2/6 h-20 bg-red-500 mb-6 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Back</Link>
            <button onClick={sendData} className="text-3xl w-2/6 h-20 bg-green-500 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Finalize</button>
            </div>
         </div>
      </div>
   )
}

function useRef(arg0: number) {
   throw new Error("Function not implemented.");
}
function useEffect(arg0: () => void, arg1: number[]) {
   throw new Error("Function not implemented.");
}

