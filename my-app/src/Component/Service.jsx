import React from 'react';
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
   
    return (
        <>
          <div className="my-3">
           <h1 className="text-center"> Our Services</h1>
        </div>
        
        <div className="container-fluid my-5">
            <div className="row gy-5">
                <div className="col-11 mx-auto">
                    <div className="row gy-3">
                         {  Sdata.map((val,index)=>{
                                 return <Card
                                 key={index}
                                 imgsrc={val.imgsrc}
                                 title={val.title}
                                 />
                             }) }
                    </div>
                    </div>
                    </div>
                </div>
    
                   
        
        </>
    );
};

export default Service;