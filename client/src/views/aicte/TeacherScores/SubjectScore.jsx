import React from "react";
import { CCol, CListGroup, CListGroupItem } from "@coreui/react";

function SubjectScore(item) {
  return (
    <CCol xs="12" sm="6" lg="4" className="my-3" key={item.details._id}>
      <CListGroup>
        <CListGroupItem>{item.details.subjectName}</CListGroupItem>
        <CListGroupItem>Year: {item.details.year}</CListGroupItem>
        <CListGroupItem>Term: {item.details.term}</CListGroupItem>
        <CListGroupItem>
          Score: {item.details.subjectAicteScore.$numberDecimal}
        </CListGroupItem>
      </CListGroup>
    </CCol>
  );
}

export default SubjectScore;
