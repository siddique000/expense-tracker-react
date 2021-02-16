import React from 'react'

const Balance = ({ transactions }) => {

   const totalBalance = () => {
      const amounts = transactions.map(transaction => transaction.amount)
      return amounts.length !== 0 && amounts.reduce((a, b) => a + b)
   }
   const sign = totalBalance() < 0 ? '-' : '+'


   return (
      <div>
         <h4>Your Balance</h4>
         <h1 id="balance">{sign}${Math.abs(totalBalance())}</h1>
      </div>
   )
}

export default Balance
