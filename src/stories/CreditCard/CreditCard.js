import React,{useState} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './CreditCard.css'
import PropTypes from 'prop-types';


export const CreditCard=({cardNum})=> {
    const [cvc,setcvc]=useState('')
    const [expiry,setexpiry]=useState('')
    const [focus,setfocus]=useState('')
    const [name,setname]=useState('')
    const [number,setnumber]=useState(cardNum)



    return (
        <div id="PaymentForm">
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form>
            <label>信用卡號碼(只能數字)</label>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e)=>setnumber(e.target.value)}
            onFocus={(e)=>setfocus(e.target.name)}
          />
          <label>卡片登記英文姓名(同護照)</label>
       <input
            type="tel"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            onFocus={(e)=>setfocus(e.target.name)}
          />
          <label>到期日</label>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={(e)=>setexpiry(e.target.value)}
            onFocus={(e)=>setfocus(e.target.name)}
          />
          <label>背後三碼</label>
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e)=>setcvc(e.target.value)}
            onFocus={(e)=>setfocus(e.target.name)}
          />
        </form>
      </div>
    )
}

CreditCard.proTypes={
    cardNum:PropTypes.string
}

CreditCard.defaultProps={
    cardNum:'5111'
}