import { Modals } from "../Modal/Modals";

export function Main(){

   return (
      <main className="w-full h-full flex flex-row justify-between items-center">
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Modals textOfButton={"New costumer"} />
          <Modals textOfButton={"Transfer"}/>
          <Modals textOfButton={"Balance"}/>
        </section>
        <section className="w-[46%] h-5/6 flex flex-col justify-evenly">
          <Modals textOfButton={"Deposit"}/>
          <Modals textOfButton={"Withdraw"}/>
          <Modals textOfButton={"Make pix"}/>
        </section>
      </main>
   )
}