import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    CCardGroup,
    CCardFooter,
    CCol,
    CLink,
    CRow,
    CWidgetProgress,
    CWidgetIcon,
    CWidgetProgressIcon,
    CWidgetSimple,
    CProgress,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const TeacherScores = () => {
    const [teacherDataArr,setTeacherDataArr] = useState({ teacherDataA: [] });

    useEffect(() => {
        const getTeachersData = async () => {
            const teacherData = await axios(
                'http://localhost:5000/fetch/teacher',
            );

            setTeacherDataArr(teacherData.data);
        };
        getTeachersData();
    }, []);
    

    return(
        <div>
            <CCardGroup className="mb-4">
                {teacherDataArr.teacherDataA.map( item => (
                    <CCol xs="12" sm="6" lg="4">
                        <CWidgetIcon text={item.fullName} header={item.aicteScores.[0].AICTE_SCORE.$numberDecimal} color="info" iconPadding={false}>
                            <CIcon width={24} name="cil-user" className="mx-5"/>
                        </CWidgetIcon>
                    </CCol>
                ))}
            </CCardGroup>
            
        </div>
    )
}

export default TeacherScores

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


