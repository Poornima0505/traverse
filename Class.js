import React from "react";

class Pen extends React.Component{
    render(){
      // ! ---- > (x===y)
        const { newbrand2 } = this.props;
        if(!newbrand2){
             return <><h1>Student Detail</h1></>
        }
        const { Name, Rollno, Depart } = newbrand2;
        const content2 = `Hai ${Name}, your Rollno is ${Rollno} and Department is ${Depart}`;
      
        return (   
          <>
            <h1>{content2}</h1>
            
            
          </>
        );
      }
      

}

export default Pen;
