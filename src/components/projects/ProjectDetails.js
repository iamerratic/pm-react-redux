import React from 'react';

function ProjectDetails({ match: { params: { id } } }) {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius autem porro suscipit mollitia quae delectus cum tempore placeat, soluta est voluptas! Sequi perspiciatis porro nesciunt est ad quae dignissimos! Voluptas?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Keshav Singh</div>
                    <div>20 June 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
