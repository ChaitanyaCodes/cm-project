import React, { useState , Fragment} from "react";
import { CCard, CCardBody, CCardGroup, CCardHeader, CCol, CWidgetIcon, } from "@coreui/react";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import CIcon from '@coreui/icons-react';
import {useLocation} from 'react-router-dom';

function SingleTeacher(props) {
  const [years, setYears] = useState([]);
  const location = useLocation();
  const teacherDetails = location.item;
  var scores = [];

  // scores array for the graph
  teacherDetails.aicteScores.forEach((item)=>{
      scores.push(item.AICTE_SCORE.$numberDecimal);
  })

  // get the years
  teacherDetails.aicteScores.forEach((item)=>{
    years.push(item.year);
  }) 

  return (
    <Fragment>
      <CCard className = "h-75">
        <CCardHeader>{teacherDetails.fullName}</CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: "Score",
                backgroundColor: "rgb(228,102,81,0.9)",
                data: scores,
              },
              
            ]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
            labels={years}   
          />
        </CCardBody>
      </CCard>

      <h2>Semester wise</h2>
      <h2>subject wise</h2>
      <CCardGroup className="mb-4" >
        {teacherDetails.subjects.map( (item) => {
                      return(
                          <CCol 
                              xs="12" sm="6" lg="4" 
                              key={item._id} >
                                  <CWidgetIcon
                                      text={item.subjectName} 
                                      header={item.subjectAicteScore.$numberDecimal} 
                                      color="info" iconPadding={false}>
                                      <CIcon 
                                              width={24} 
                                              name="cil-user" 
                                              className="mx-5"/>
                                  </CWidgetIcon>
                          </CCol>
                      )
                  })}
      </CCardGroup>
    </Fragment>
  );
}

export default SingleTeacher;
