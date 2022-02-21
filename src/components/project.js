import React from 'react'
import bigInt from 'big-integer';
import "./common.css"

function ProjectCard({ _id, _address, _name, _details, _fund, contract }) {
    return (
        <div className="box">
            <header># {_id}</header>
            <h2> {_name}  </h2>
            <p><strong>Created by</strong> - {_address}</p>
            <div className='left'>
                <p><strong>Details</strong> - {_details}</p>
            </div>
            <p>fund - {_fund}  </p>
            <button onClick={() =>
                contract.donate({
                    userId: _address.toString(),
                    projectId: _id,
                    amount: bigInt(100000000000, 64)
                })} className="BTN" >
                DONATE
            </button>
        </div >
    )
}

function Project({ contract, projectData, currentUserId }) {

    return (
        <div className="project">
            {
                projectData.map(project => {
                    return (
                        <div key={project.id}>
                            <ProjectCard _id={project.id} _address={project.address} _name={project.name} _details={project.details} _fund={project.funds} contract={contract} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Project


// import React from 'react';
// import PropTypes from 'prop-types';

// export default function Project({ projectList }) {
//     return (
//         <>
//             <h2>Messages</h2>
//             {projectList.map((project) =>
//                 // TODO: format as cards, add timestamp
//                 <p key={project[0]}>
//                     <strong>{project[0]}</strong>:<br />
//                     {project[3]}
//                 </p>
//             )}
//         </>
//     );
// }

// Project.propTypes = {
//     projectList: PropTypes.array.isRequired
// };