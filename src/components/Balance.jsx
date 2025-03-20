import React from 'react';
import { useSelector } from 'react-redux';

function Balance() {
  // useSelector 
  const amount = useSelector(s => s.amount);

  return (
    <div>
      <div className="container-fluid">
        <div className="row text-end mt-2 mb-2 justify-content-end">
          <div className="col-md-2">
            <div className="row text-center mx-2">
                <p className="bg-primary text-white p-2 rounded">Current Balance : {amount}</p> 
              </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
