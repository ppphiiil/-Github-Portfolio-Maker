import React from 'react';
import { testCaseStudiesData } from '../testdata';
import { useParams } from 'react-router-dom';
import './CaseStudyPage.scss';


export default function CaseStudyPage( props ) {
    console.log( 'into casestudypage' );

    let { name } = useParams();

    const casedata = testCaseStudiesData.find(
        casestudy => name === casestudy.name
    );
    console.log( casedata );

    return (
        <div className="page">
            <div className="case-container">
                <div className="case-container-item">
                    <h1 className="title">{ casedata.title }</h1>
                    <p className="case-text">{ casedata.shortDescription }</p>
                    { casedata.demolink ? <a target="blank" className="case-Link demo" href={ casedata.demolink }>Demo-Link</a> : null }
                    { casedata.githubLink ? <a target="blank" className="case-Link github" href={ casedata.githubLink }>Github-Link</a> : null }
                </div>
                <div className="case-container-item">
                    <p>{ casedata.longDescription }</p>
                </div>
            </div>
            <div className="imagecontainer">
                { casedata.images.map( image => {
                    return (
                        <img
                            className="caseExampleImage"
                            src={ image.image }
                            alt="casedate.name"
                        />
                    );
                } ) }
            </div>

        </div>
    );
}
