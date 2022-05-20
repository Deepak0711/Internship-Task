import React from 'react'
import "../styles/Home.css"
const Home = () => {
  return (
    <div id='home-container'>
        <div className='top' >
            <img style={{height:"20px"}} src="../../media/logo.png" alt='logo' />
        </div>

        <div className='inner-container'>
            <div className='left'>
                <p id='home-head'>Invoice Generator</p>

                <form>
                    <input className='home-input' id='invoiceName' placeholder='Enter Name' type='text' />
                    <input className='home-input' id='genInvoice' placeholder='Generate Invoice' value='Generate Invoice' type='button' />
                </form>
            </div>

            <div className='right'>
                <img style={{height:"622px"}} src='../../media/invoice.png' alt='invoice image' />
            </div>

        </div>

        <div id='savedInvoices'>
            <p id='savedInvoiceHead'>Saved Invoices</p>

            <div>
                <div style={{border:"1px solid ", borderRadius: "5px", padding:"1rem", width: "30%"}}>
                    <p>Invoice1</p>
                    <p>5th May 2022</p>
                </div>
                {/* Dsiplay thr invoice */}
            </div>
        </div>

    </div>
  )
}

export default Home