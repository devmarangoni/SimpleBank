import { useState } from "react";
 
export function Balance(){
      const [email, setEmail] = useState<string>();
      const [name, setName] = useState<String>();
      const [phone, setPhone] = useState<String>();

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
            if(status === 200){
               console.log('Operação realizada com sucesso')
            } else {
              console.log('Falha no envio de dados')
            }
         })
         .catch(error => console.error(error))
      }


   return (
      <div className="h-1/2 w-full max-w-lg flex flex-col gap-5 items-center justify-center">
         <label htmlFor="email" className="text-xl block uppercase tracking-wide text-gray-700font-bold mb-2">Email:</label>
         <input onChange={e => {setEmail(e.target.value)}} type="email" id="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
         <label htmlFor="name" className="h-full w-full max-w-lg flex flex-col gap-5 items-center justify-center">Name:</label>
         <input onChange={e => {setName(e.target.value)}} type="text" id="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
         <label htmlFor="telefone" className="h-full w-full max-w-lg flex flex-col gap-5 items-center justify-center">Phone:</label>
         <input onChange={e => {setPhone(e.target.value)}} type="tel" id="telefone" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
         <button onClick={sendData}  id="submit" className="text-3xl w-2/6 h-20 bg-green-500 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Teste</button>
      </div>
   )
}