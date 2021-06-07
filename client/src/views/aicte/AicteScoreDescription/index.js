import React from 'react';
import { CAlert } from '@coreui/react';

function AicteScoreDescription() {
    return (
        <div>
            <CAlert color="success">
                <h4 className="alert-heading">What's AICTE Score?</h4>
                <p className="text-left text-primary">AICTE Score is an yearly score graded to a teacher on basis of response on a questionare provided to the students</p>
                <ul>
                    <li>The response's from the students are collected twice a year Semester and Subject wise.</li>
                    <li>First the subject score for the particular semester is formed on the basis of questionare parimeters</li>
                    <li>The average of all the score's of the subjects a particular teacher teaching for an particular semester gives the score for the particular semester</li>
                    <li>The average of score's of Two semesters ie. Odd and Even semester of a particular year gives the AICTE score of the year.</li>
                </ul>
            </CAlert>
        </div>
    )
}

export default AicteScoreDescription
