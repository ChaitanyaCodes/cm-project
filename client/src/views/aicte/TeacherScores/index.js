import React, {useEffect, useState} from 'react';
import { 
    Link, 
    Switch,
    Route,
    useRouteMatch 
} from 'react-router-dom';
import TeacherScoresList from './TeacherScoresList';
import SingleTeacher from './SingleTeacher';


const TeacherScores = () => {
    let { path, url } = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <TeacherScoresList/>
            </Route>
            <Route path={`${path}/:name`}>
                <SingleTeacher/>
            </Route>
        </Switch>
    )
}

export default TeacherScores;

