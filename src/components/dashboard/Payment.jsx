import React from 'react'
import { InterswitchPay } from 'react-interswitch'

const Payment = () => {
  const paymentParameters = {
    merchantCode: 'MX189550',
    payItemID: 'Default_Payable_MX189550',
    clientID: 'IKIA334462D66FEFCC4E0A0891DBBC5F9D81FD1DEE6A',
    secretkey: 'S0Qi6BkJK2TzM57',
    customerEmail: 'samuelblessed38@gmail.com',
    redirectURL: 'http://localhost:5173',
    text: 'Add Money',
    mode: 'TEST',
    transactionReference: Date.now().toString(),
    amount: '10000',
    style: {
        width: '200px',
        height: '40px',
        border: 'none',
        color: '#fff',
        backgroundColor: '#ff0000'
    },
    callback: (response) => {
      console.log('response: ', response)
    }
  }
  return <InterswitchPay {...paymentParameters} />
}

export default Payment;