import { FormPiece } from "./FormPiece";

interface FormProps{
   typeOfFunction:String;

}

export function Form({ typeOfFunction }:FormProps){

   function chooseMethod(){
      switch(typeOfFunction) {
         case "New costumer":
            return (
               <div className="h-full w-full mt-4 text-4xl">
                  <FormPiece labelName={"First name:"} placeHolder={"Type your first name here"}/>
                  <FormPiece labelName={"Last name:"} placeHolder={"Type your last name here"}/>
                  <FormPiece labelName={"Email:"} placeHolder={"xxxxxxx@xxxxx.com"} type={"email"}/>
                  <FormPiece labelName={"Phone:"} placeHolder={"(XX)XXXXX-XXXX"} type={"tel"}/>
               </div>   
            )
         break;
         case "Transfer":
            return (
               <div className="h-full w-full mt-4 text-4xl">
                  <FormPiece labelName={"Email:"} placeHolder={"enter the email of the person"} type={"email"}/>
                  <FormPiece labelName={"Amount"} placeHolder={"How many do you want to transfer"} type={"number"}/>
               </div> 
            )  
         break;
         case "Balance":
            return (
               <div className="h-full w-full mt-4 text-4xl">
                  <FormPiece labelName={"User email:"} placeHolder={"enter the email of the account"} type={"email"}/>
               </div> 
            )   
         break;
         case "Deposit":
            return (
               <div className="h-full w-full mt-4 text-4xl">
                  <FormPiece labelName={"Email:"} placeHolder={"enter the email of the person"} type={"email"}/>
                  <FormPiece labelName={"Amount"} placeHolder={"How many do you want to deposit"} type={"number"}/>
               </div> 
            )    
         break;
         case "Withdraw":
            return (
               <div className="h-full w-full mt-4 text-4xl">
                  <FormPiece labelName={"Email:"} placeHolder={"enter the email of the account"} type={"email"}/>
                  <FormPiece labelName={"Amount"} placeHolder={"How many do you want withdraw"} type={"number"}/>
               </div> 
            )   
         break;
         case "Make pix":
            return (
               <div className="h-full w-full mt-4 text-4xl">
                  <FormPiece labelName={"Key:"} placeHolder={"enter the email,cpf or a pix key"}/>
                  <FormPiece labelName={"Amount"} placeHolder={"How many do you want transfer"} type={"number"}/>
               </div> 
            )  
         break;
      }
   }

   return (
      <div className="h-5/6 w-full flex flex-col items-center justify-center mt-1">
         <h1 className="mt-2 text-center font-bold text-7xl">{ typeOfFunction }</h1>
         <form action="" className="h-full w-full max-w-lg flex flex-col gap-5 items-center justify-center">
            {chooseMethod()}
            <button type="submit" className="w-2/6 h-20 bg-green-500 mb-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">finalize</button>
         </form>
      </div>
   )
}