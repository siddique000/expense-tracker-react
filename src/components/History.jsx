import React from 'react'
import TransactionList from './TransactionList'
const History = ({ transactions,onClick }) => {
   return (
      <>
         <h3>History</h3>
         <ul id="list" className="list">
            {transactions.map(transaction => (
               <TransactionList key={transaction.id} transaction={transaction}  onClick={onClick}/>
            ))}
         </ul>
      </>
   )
}

export default History
