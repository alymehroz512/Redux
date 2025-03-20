import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index';    

function Shop() {
   // useSelector to check the balance 
   const balance = useSelector(s => s.amount)
  // useDispatched 
  const dispatch = useDispatch();
  const {depositMoney , withdrawMoney} = bindActionCreators(actionCreators , dispatch);
  return (
    <div>
        <div className="container">
            <div className="row text-start justify-content-start mt-2 mb-2">
                <div className="col-md-12">
                    <h4>Deposit / Withdraw Money</h4>
                    <p>Update your balance {balance} </p>
                </div>
            </div>
            <div className="row text-start justify-content-start mt-2 mb-2">
                <div className="col-md-12 mb-2">
                    <button className="btn btn-primary mx-2" onClick = {() => depositMoney(100)}>Deopsit Money</button>
                    <button className="btn btn-primary mx-2" onClick = {() => withdrawMoney(100)}>Withdraw Money</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop
