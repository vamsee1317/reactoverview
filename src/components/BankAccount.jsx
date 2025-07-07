// // 1. Define initial State

// import { useReducer, useState} from "react"

// const initialState = {
//     balance : 0,
//     message: ""
// }
// // 2. Define reducer function

// function reducer(state, action){
//     switch(action.type){
    
//         case "deposit":
//             return{
//                 ...state,
//                 balance : state.balance + action.amount,
//                 message : "Deposit Successful"
//             }

//         case "withdraw":
//             if(action.amount > state.balance){
//                 return{
//                     ...state,
//                     message : "Insufficient Balance"
//                 }
//             }
//             return{
//                 ...state,
//                 balance : state.balance - action.amount,
//                 message : "Withdrawal Successful"
//             }

//         case "reset":
//             return{
//                 ...initialState,
//                 message : "Account Reset to zero"
//             }

//         default:
//             return state;
//     }
// }



// export default function BankAccount(){

//     // 3. setUp userReducer and useState.

//     const [state, dispatch] = useReducer(reducer, initialState);
//     const [amount, setAmount] = useState("");

//     // 4. Handle form inputs
//     const handleChange = (e) => setAmount(e.target.value);

//     // 5. Handle deposit

//     const handleDeposit = () => {
//         const amt = parseFloat(amount);

//         if(!amt || amt <= 0){
//             return alert("Invalid Amount");
//         }

//         dispatch({type : "deposit", amount : amt});
//         setAmount("");
//     }

//     // 6. Handle withdraw
//     const handleWithDraw = () => {
//         const amt = parseFloat(amount);

//         if(!amt || amt <= 0){
//             return alert("Please enter valid Amount");
//         }

//         dispatch({type : "withdraw", amount : amt});
//         setAmount("");
//     }
//     return(
//         <div>
//             <h2>My Bank Account</h2>

//             <p>Current Balance : {state.balance}</p>

//             {
//                 state.message && (<div>{state.message} </div>)
//             }

//             <input type="number" value={amount} onChange={handleChange} placeholder="Enter Amount" />



//             <div>
//                 <button onClick={handleDeposit}>Deposit</button>
//                 <button onClick={handleWithDraw}>Withdraw</button>
//                 <button onClick={()=> dispatch({type :"reset"})}>reset</button>

//             </div>
//         </div>
//     )
// }


import { useReducer, useState } from "react"

const initialState = {
  balance: 0,
  message: ""
}

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.amount,
        message: "Deposit Successful"
      }

    case "withdraw":
      if (action.amount > state.balance) {
        return {
          ...state,
          message: "Insufficient Balance"
        }
      }
      return {
        ...state,
        balance: state.balance - action.amount,
        message: "Withdrawal Successful"
      }

    case "reset":
      return {
        ...initialState,
        message: "Account Reset to zero"
      }

    default:
      return state;
  }
}

export default function BankAccount() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [amount, setAmount] = useState("")

  const handleChange = (e) => setAmount(e.target.value)

  const handleDeposit = () => {
    const amt = parseFloat(amount)
    if (!amt || amt <= 0) {
      return alert("Invalid Amount")
    }
    dispatch({ type: "deposit", amount: amt })
    setAmount("")
  }

  const handleWithDraw = () => {
    const amt = parseFloat(amount)
    if (!amt || amt <= 0) {
      return alert("Please enter valid Amount")
    }
    dispatch({ type: "withdraw", amount: amt })
    setAmount("")
  }

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-center">🏦 My Bank Account</h2>

      <p className="text-lg font-semibold mb-2">
        Current Balance: <span className="text-green-600 dark:text-green-400">₹{state.balance}</span>
      </p>

      {state.message && (
        <div className="mb-4 text-sm text-blue-600 dark:text-blue-400 font-medium">{state.message}</div>
      )}

      <input
        type="number"
        value={amount}
        onChange={handleChange}
        placeholder="Enter Amount"
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between space-x-3">
        <button
          onClick={handleDeposit}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
        >
          Deposit
        </button>

        <button
          onClick={handleWithDraw}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
        >
          Withdraw
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}




