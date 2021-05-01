import React, { useState , Fragment} from "react";
import { 
  CCard, 
  CCardBody, 
  CCardGroup, 
  CCardHeader, 
  CCol, 
  CWidgetIcon,
  CListGroup,
  CListGroupItem, } from "@coreui/react";
import {
  CChartLine,
} from "@coreui/react-chartjs";
import CIcon from '@coreui/icons-react';
import {useLocation} from 'react-router-dom';

function SingleTeacher(props) {
  const [years] = useState([]);
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

      <h2>Semester Score</h2>
      <CCardGroup className="mb-4" >
        {teacherDetails.aicteScores.map( (item) => {
                      return(
                          <CCol 
                              xs="12" sm="6" lg="4" 
                              key={item._id} >
                                  <CListGroup>
                                    <CListGroupItem>Year: {item.year}</CListGroupItem>
                                    <CListGroupItem>Odd Term Score: {item.oddSemAvg.$numberDecimal}</CListGroupItem>
                                    <CListGroupItem>Even Term Score: {item.evenSemAvg.$numberDecimal}</CListGroupItem>
                                  </CListGroup>
                          </CCol>
                      )
                  })}
      </CCardGroup>
      <h2>Subject Score</h2>
      <CCardGroup className="mb-4" >
        {teacherDetails.subjects.map( (item) => {
                      return( 
                                <CCol 
                                xs="12" sm="6" lg="4" 
                                key={item._id} >
                                    <CListGroup>
                                      <CListGroupItem>{item.subjectName}</CListGroupItem>
                                      <CListGroupItem>Score: {item.subjectAicteScore.$numberDecimal}</CListGroupItem>
                                      <CListGroupItem>Year: {item.year}</CListGroupItem>
                                      <CListGroupItem>Term: {item.term}</CListGroupItem>
                                    </CListGroup>
                                </CCol>
                      )
                  })}
      </CCardGroup>
    </Fragment>
  );
}

export default SingleTeacher;
