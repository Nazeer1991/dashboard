import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Main.css"
import SideBar from './SideBar';
import Chart from './Chart'
import Card from './Card';

const Main = () => {
  return (
      <>
        <div className='main'>
          <div className='toolbar'>
            <SideBar />
          </div>
          {/* <div className='mainContent'>
            <div className='smallHeader'>
              <div className='left'>
                <ArrowBackIcon />
                <h4>Unnamed</h4>
              </div>
              <div className='right'>
                <span>Edit</span>
               </div> */}
              <div className="cardChart">

              <div className='card'>
                 <Card title ='No. of School'  number='13' inst='CBSE' type='international'/>
                 <Card title ='No. of Colleges' number='09' inst ='Engineering' type='Medical'/>
                 <Card title ='No. of Universities'number='11' inst ='Govt' type= 'Deemed'/>
                 <Card title ='No. of Kindergarden'number='02'/>
               </div>
              
            <div className='chart'>

             <Chart />
            <div className='all'>
            <h4>All</h4>
            <div className='rating'>
              <p>Ratings  <h6>4.3 - 4.9</h6>   </p>
              <p>Reviews <h6>100 - 1500</h6>    </p>
              <p>Dist.Range <h6>15 Kms</h6> </p>
            </div>
          </div>

              </div>
               
        </div>
            </div>
            
           {/* </div>
           
          
        </div>
         */}
      </>
  )
}

export default Main