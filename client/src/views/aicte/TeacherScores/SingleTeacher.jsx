import React, { useState, Fragment } from "react";
import YearSem from "./YearSem";
import SubjectScore from "./SubjectScore";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CRow,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import MainChartExample from '../../charts/MainChartExample';
import { CChartLine } from "@coreui/react-chartjs";
import { useLocation } from "react-router-dom";

function SingleTeacher(props) {
  const [year, setYear] = useState(); // year filters value
  const [subject, setSubject] = useState(); //subject filter value
  const years = [];
  const location = useLocation();
  const teacherDetails = location.item;
  var scores = [];

  // scores array for the graph
  teacherDetails.aicteScores.forEach((item) => {
    scores.push(item.AICTE_SCORE.$numberDecimal);
  });

  // get the years
  teacherDetails.aicteScores.forEach((item) => {
    years.push(item.year);
  });

  // get list of subjects taught by the teacher
  const distinctSubjects = [
    ...new Set(
      teacherDetails.subjects.map((trSubject) => trSubject.subjectName)
    ),
  ];

  return (
    <Fragment>
      <h2>Score Over Years</h2>
      <CRow>
        <CCard>
          <CCardHeader>{teacherDetails.fullName}</CCardHeader>
          <CCardBody>
            <CChartLine
              // style={{height: '300px'}}
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
      <br/>
      <CDropdown>
        <CDropdownToggle color="secondary">
          {year ? year : "choose year"}
        </CDropdownToggle>
        <CDropdownMenu>
          {years.map((item) => (
            <CDropdownItem onClick={() => setYear(item)}>{item}</CDropdownItem>
          ))}
          <CDropdownItem onClick={() => setYear(null)}>Show all</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <br />
      <CCardGroup className="mb-4">
        {year
          ? (teacherDetails.aicteScores
              .filter((yearD) => yearD.year === year)
              .map(item => 
                <YearSem yearData={item} />
              ))
          : null}
        {year
          ? null
          : teacherDetails.aicteScores.map(item => 
              <YearSem yearData={item} />
            )}
      </CCardGroup>

      <h2>Subject Score</h2>
      <MainChartExample 
        style={{height: '300px', marginTop: '40px'}}
        years={years}
        subjects={distinctSubjects}
        teacherDetails={teacherDetails}
        />
      <br/>
      <CDropdown>
        <CDropdownToggle color="secondary">
          {subject ? subject : "choose subject"}
        </CDropdownToggle>
        <CDropdownMenu>
          {distinctSubjects.map((item) => (
            <CDropdownItem onClick={() => setSubject(item)}>
              {item}
            </CDropdownItem>
          ))}
          <CDropdownItem onClick={() => setSubject(null)}>Show all</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <br />
      <CCardGroup className="mb-4">
        { subject 
            ? teacherDetails.subjects
              .filter(subjectInfo => subjectInfo.subjectName === subject)
              .map(item => <SubjectScore details={item} /> )
            : teacherDetails.subjects.map(item => <SubjectScore details={item} />)
        }
      </CCardGroup>
    </Fragment>
  );
}

export default SingleTeacher;

// condition to push subjects
// if (year === trSubject.year) {
//   console.log(teacherDetails);
// }

//subject component
// {
  /* <CCol xs="12" sm="6" lg="4" className="my-3" key={item._id}>
              <CListGroup>
                <CListGroupItem>{item.subjectName}</CListGroupItem>
                <CListGroupItem>
                  Score: {item.subjectAicteScore.$numberDecimal}
                </CListGroupItem>
                <CListGroupItem>Year: {item.year}</CListGroupItem>
                <CListGroupItem>Term: {item.term}</CListGroupItem>
              </CListGroup>
</CCol> */
// }
