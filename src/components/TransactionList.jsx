import React from 'react'

const TransactionList = ({ transaction, onClick }) => {

   const listClass = transaction.amount < 0 ? 'minus' : 'plus'

   const sign = transaction.amount < 0 ? "-" : '+'

   return (
      <>
         <li className={listClass}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=>onClick(transaction.id)}>x</button>
         </li>
      </>
   )
}

export default TransactionList
