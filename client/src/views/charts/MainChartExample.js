import React from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { hexToRgba } from "@coreui/utils";

const MainChartExample = (attributes) => {
  const teacherDetails = attributes.teacherDetails;
  console.log(teacherDetails);
  // const random = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  const defaultDatasets = (() => {
    var scoresDataArr = [];

    attributes.subjects.forEach((selectedSubject) => {
      var temparr = [];

      teacherDetails.subjects
        .filter((subjectInfo) => subjectInfo.subjectName === selectedSubject)
        .map((item, index) => {
          if(item.year !== attributes.years[index]){
            // console.log("year not present 0",item.subjectName);
            temparr.push(0);
            temparr.push(item.subjectAicteScore.$numberDecimal);
          }else{
            temparr.push(item.subjectAicteScore.$numberDecimal);
            // console.log("year present")
          }

          // temparr.push(item.subjectAicteScore.$numberDecimal)
        });

      // for (let i = 0; i < attributes.years.length; i++) {
      //   temparr.push(random(50, 200));
      // }

      scoresDataArr.push(temparr);
    });

    // get an array of arrays which have score of particular subject for
    // console.log(scoresDataArr);

    const subjectsLength = attributes.subjects.length;
    var subjectArray = [];

    // to get random color for each subject
    function generateRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    for (let subjectIndex = 0; subjectIndex < subjectsLength; subjectIndex++) {
      var color = generateRandomColor();
      subjectArray.push({
        label: attributes.subjects[subjectIndex],
        backgroundColor: hexToRgba(color, 10),
        borderColor: color,
        pointHoverBackgroundColor: color,
        borderWidth: 2,
        data: scoresDataArr[subjectIndex],
      });
    }

    return subjectArray;
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(25 / 5),
              max: 25,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();
  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={attributes.years}
    />
  );
};

export default MainChartExample;

//references
// subjectArray[subjectIndex].label = attributes.subjects[subjectIndex];
