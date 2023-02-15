import { useNavigate } from 'react-router';

export function PageNotFound(){
   const navigate = useNavigate();

   return (
      <div className="bg-cyan-900 w-full h-screen box-border flex flex-col gap-20 items-center justify-center">
         <div className='flex flex-row items-center justify-center'>
            <h1 className='text-center text-white uppercase text-6xl font-extrabold'>page not found</h1>
            <button onClick={() => navigate('/')} className='border border-zinc-300 text-3xl w-2/6 h-20 bg-cyan-600 mb-6 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded'>Home</button>
         </div>
         <div className="w-[1024px] h-[536px] shadow-xl shadow-zinc-500 border-2 bg-imageError404 border-gray-400 flex items-center justify-center">
         </div>
      </div>       
   )
}