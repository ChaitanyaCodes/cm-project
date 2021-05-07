import React from "react";
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

function YearSem(item) {
  return (
    <CCol xs="12" sm="6" lg="4" key={item.yearData._id}>
      <CListGroup>
        <CListGroupItem>Year: {item.yearData.year}</CListGroupItem>
        <CListGroupItem>
          Odd Term Score: {item.yearData.oddSemAvg.$numberDecimal}
        </CListGroupItem>
        <CListGroupItem>
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
