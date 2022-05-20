import React from 'react'
import '../styles/InvoiceGenerator.css'

const InvoiceGenerator = () => {
  return (
     <div id='invoiceGen-container'>
        <div className='nav' >
            <img style={{height:"27px"}} src="../../media/logo.png" alt='logo' />
            <p className='nav-head'>Invoice Generator</p>
        </div>
        <div className='nav'>
            <p>Invoice</p>
            <div>
                <p>Preview</p>
                <p>Edit</p>
            </div>
            <div>
                <input value="Export as PDF" type="button" />
                <input value="Save Invoice" type="button" />
            </div>
        </div>
    </div>
  )
}

export default InvoiceGenerator