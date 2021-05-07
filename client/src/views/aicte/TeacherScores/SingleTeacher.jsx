import React, { useState, useEffect, Fragment } from "react";
import YearSem from "./YearSem";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { CChartLine, CChartPie } from "@coreui/react-chartjs";
import { useLocation } from "react-router-dom";

function SingleTeacher(props) {
  const [year, setYear] = useState(); // year filters value
  const [subject, setSubject] = useState(); //subject filter value
  const years = [];
  const location = useLocation();
  const teacherDetails = location.item;
  var scores = [];
  var results = [];

  // scores array for the graph
  teacherDetails.aicteScores.forEach((item) => {
    scores.push(item.AICTE_SCORE.$numberDecimal);
  });

  // get the years
  teacherDetails.aicteScores.forEach((item) => {
    years.push(item.year);
  });

  const distinctSubjects = [...new Set(teacherDetails.subjects.map(trSubject => trSubject.subjectName))];

  return (
    <Fragment>
      <CRow>
        <CCard>
          <CCardHeader>{teacherDetails.fullName}</CCardHeader>
          <CCardBody>
            <CChartLine
              height={2}
              datasets={[
                {
                  label: "Score of 25",
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
      </CRow>

      <h2>Year-Semester Score</h2>
      <CDropdown>
        <CDropdownToggle color="secondary">
          {year ? year : "choose year"}
        </CDropdownToggle>
        <CDropdownMenu>
          {years.map((item) => (
            <CDropdownItem onClick={() => setYear(item)}>{item}</CDropdownItem>
          ))}
          <CDropdownItem onClick={() => setYear(0)}>Show all</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <br />
      <CCardGroup className="mb-4">
        {year
          ? (results = teacherDetails.aicteScores
              .filter((yearD) => yearD.year == year)
              .map((item) => {
                return <YearSem yearData={item} />;
              }))
          : null}
        {year
          ? null
          : teacherDetails.aicteScores.map((item) => {
              return <YearSem yearData={item} />;
            })}
      </CCardGroup>
      <h2>Subject Score</h2>
      <CDropdown>
        <CDropdownToggle color="secondary">
          {subject ? subject : "choose subject"}
        </CDropdownToggle>
        <CDropdownMenu>
          {distinctSubjects.map((item) => (
            <CDropdownItem onClick={() => setSubject(item)}>{item}</CDropdownItem>
          ))}
          <CDropdownItem onClick={() => setSubject(0)}>Show all</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <br/>
      <CCardGroup className="mb-4">
        {teacherDetails.subjects.map((item) => {
          return (
            <CCol xs="12" sm="6" lg="4" className="my-3" key={item._id}>
              <CListGroup>
                <CListGroupItem>{item.subjectName}</CListGroupItem>
                <CListGroupItem>
                  Score: {item.subjectAicteScore.$numberDecimal}
                </CListGroupItem>
                <CListGroupItem>Year: {item.year}</CListGroupItem>
                <CListGroupItem>Term: {item.term}</CListGroupItem>
              </CListGroup>
            </CCol>
          );
        })}
      </CCardGroup>
    </Fragment>
  );
}

export default SingleTeacher;


// condition to push subjects
// if (year === trSubject.year) {
//   console.log(teacherDetails);
// }
