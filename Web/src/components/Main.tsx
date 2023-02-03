export function Main(){
   return (
      <main className="w-full h-full flex flex-row justify-between items-center">
         <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
            <button className="h-20 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300">New costumer</button>
            <button className="h-20 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300">Transfer</button>
            <button className="h-20 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300">Balance</button>
         </section>
         <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
            <button className="h-20 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300">Deposit</button>
            <button className="h-20 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300">Withdraw</button>
            <button className="h-20 border-2 border-solid border-black rounded-lg text-xl bg-zinc-200 hover:bg-zinc-300">Make pix</button>
         </section>
      </main>
   )
}