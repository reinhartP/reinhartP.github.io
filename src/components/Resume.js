import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.education &&
                            resumeData.education.map(item => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{' '}
                                                <em className="date">
                                                    {item.MonthOfPassing}{' '}
                                                    {item.YearOfPassing}
                                                </em>
                                            </p>
                                            <p>{item.Achievements}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.work &&
                            resumeData.work.map(item => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{' '}
                                                <em className="date">
                                                    {item.MonthOfLeaving}{' '}
                                                    {item.YearOfLeaving}
                                                </em>
                                            </p>
                                            <p>{item.Achievements}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <ul className="skills">
                            <h6>Languages</h6>
                            {resumeData.skills.languages &&
                                resumeData.skills.languages.map(item => {
                                    return <em>{item.skillname}, </em>;
                                })}
                            <h6>Frontend</h6>
                            {resumeData.skills.frontend &&
                                resumeData.skills.frontend.map(item => {
                                    return <em>{item.skillname}, </em>;
                                })}
                            <h6>Backend</h6>
                            {resumeData.skills.backend &&
                                resumeData.skills.backend.map(item => {
                                    return <em>{item.skillname}, </em>;
                                })}
                            <h6>Cloud</h6>
                            {resumeData.skills.cloud &&
                                resumeData.skills.cloud.map(item => {
                                    return <em>{item.skillname}, </em>;
                                })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
