import React, {useEffect, useState} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import {
    CCardGroup,
    CCol,
    CLink,
    CRow,
    CWidgetIcon,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const TeacherScoresList = () => {
    const [teacherDataArr,setTeacherDataArr] = useState({ teacherDataA: [] });      //for the whole teacher collection
    const [year,setYear] = useState();                                              // dropdown current year
    const [tempTeacherDataState,setTempTeacherDataState] = useState([]);

    var years = [];
    var tempTeacherData = [];
    let date = new Date();
    let currentYear = date.getFullYear();
    let { path, url } = useRouteMatch();

    
    for(var addYear = 2020;currentYear>=addYear;addYear++){
        years.push(addYear);
    }


    useEffect(() => {
        const getTeachersData = async () => {
            const teacherData = await axios(
                'http://localhost:5000/fetch/teacher',
            );

            setTeacherDataArr(teacherData.data);
            
        };
        getTeachersData();
    }, []);

    useEffect(()=>{
        setYear(currentYear);
    },[])

    useEffect(()=>{
        teacherDataArr.teacherDataA.map((item)=>{
            item.aicteScores.forEach((trYear)=>{
                if(year === trYear.year){
                    tempTeacherData.push(item);
                }
            })
        })
    }, [year])

    useEffect(() => {
        console.log(tempTeacherData);
        setTempTeacherDataState(tempTeacherData);
    }, [year])

    function handleItemClick(){
        console.log("clicked");
    }
    

    return(
        <div>
            <CDropdown>
                <CDropdownToggle color="secondary">
                    {year}
                </CDropdownToggle>
                <CDropdownMenu>
                    {years.map(item => (
                        <CDropdownItem href="#" onClick={()=> setYear(item)}>{item}</CDropdownItem>
                    ))}
                </CDropdownMenu>
            </CDropdown>
            <br/>
            <CCardGroup className="mb-4" >
                {tempTeacherDataState.map( (item) => {
                    const scoresArrLength = item.aicteScores.length;
                    return(
                        <CCol 
                            xs="12" sm="6" lg="4" 
                            key={item.fullName} >
                            <Link to>
                                <CWidgetIcon
                                    
                                    text={item.fullName} 
                                    header={item.aicteScores[scoresArrLength-1].AICTE_SCORE.$numberDecimal} 
                                    color="info" iconPadding={false}
                                    onClick={handleItemClick}>
                                    <CIcon 
                                            width={24} 
                                            name="cil-user" 
                                            className="mx-5"/>
                                </CWidgetIcon>
                            </Link> 
                        </CCol>
                    )
                })}
            </CCardGroup>            
        </div>
    )
}

export default TeacherScoresList;

    // async function getTeachersData() {
    //     let teacherData = await axios.get(
    //     "http://localhost:5000/fetch/teacher"
    //     ).then(response => response.json());
    //     return(teacherData);
    // }

    // useEffect(() => {
    //     const teacherDataFn = getTeachersData();
        
    //     var teacherDataArray = teacherDataFn.then(data => {return (data.teacherDataA)});
    //     teacherDataArray.then(data => setTeacherDataArr(data));
    //     // var teacherDataKeys = Object.keys(emojiDictionary);
    // }, []);

