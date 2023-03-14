import React from 'react'

const Balans = ({total,money}) => {
  return (
    <>
    <div className="balans">
{ total > 0 &&money-total!==0 &&(
            <div className=''><span>{money-total}<span>&#36; &#129297;</span></span></div>
        )
    }
    {total===0 &&(
            <div>{money}<span>&#36;</span></div>
        )
    }
    {money-total===0 &&(
            <div>Balansiniz Bitdi!<span>&#128533;</span></div>
        )
    }
    </div>
    </>
  )
}

export default Balans