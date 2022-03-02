import React from 'react'
import Chart from "react-apexcharts";
import './Chart.css'

const chart = () => {
     const state = {
        options: {
            
            
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,2019,2020,2021]
          },theme:{
              mode:'light'
          }
        
        },
        series: [
          {
             name:'university',          
            data: [0, 20, 30, 40, 50, 60, 70, 80,90,100,110]
          },
          {
              name:'school',
              data:[0,5,75,25,85,45,55,65,75,85,95]
          },
          {
            //   name:'series-3',
              data:[0,56,42,35,70,81,0] ,
              color:'#5a2328'
          }
        ]
    }
  return (
    <>
    

     
            <Chart
              options={state.options}
              series={state.series}
              color={state.options.color}
              type="line"
              width="1000"
              height={'400'}
              
            />
        
    
    </>
  )
}

export default chart