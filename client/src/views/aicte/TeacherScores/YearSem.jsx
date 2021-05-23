import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";

function YearSem(item) {
  return (
    <CCol xs="12" sm="6" lg="4" key={item.yearData._id}>
      <CListGroup >
        <CListGroupItem className="bg-gradient-success">Year: {item.yearData.year}</CListGroupItem>
        <CListGroupItem className="text-danger">
          Odd Term Score: {item.yearData.oddSemAvg.$numberDecimal}
        </CListGroupItem>
        <CListGroupItem className="text-primary">
          Even Term Score: {item.yearData.evenSemAvg.$numberDecimal}
        </CListGroupItem>
      </CListGroup>
      <CCard>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                data: [
                  item.yearData.effectivenessAvg.$numberDecimal,
                  item.yearData.supportAvg.$numberDecimal,
                  item.yearData.extraAvg.$numberDecimal,
                ],
              },
            ]}
            labels={["effectiveness", "support", "extra"]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>
    </CCol>
  );
}

export default YearSem;
