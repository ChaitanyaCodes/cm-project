import React, {useEffect, useState} from 'react';
import { 
    Link, 
    Switch,
    Route,
    useRouteMatch 
} from 'react-router-dom';
import TeacherScoresList from './TeacherScoresList';


const TeacherScores = () => {
    let { path, url } = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <TeacherScoresList/>
            </Route>
            <Route >
                
            </Route>
        </Switch>
    )
}

export default TeacherScores;

