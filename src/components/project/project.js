import React from 'react'
import bigInt from 'big-integer';
import "./project.css"

function ProjectCard({ _id, _address, _name, _details, _fund }) {
    return (
        <div style={{ border: "2px solid black", width: "300px" }}>
            <p>id - {_id}  </p>
            <p>address - {_address}</p>
            <p>name - {_name}  </p>
            <p>details - {_details}</p>
            <p>fund - {_fund}  </p>
        </div >
    )
}

function Project({ contract, projectData, currentUserId }) {

    async function donate({ id, address }) {
        await contract.donate({
            userId: id,
            projectId: address,
            amount: bigInt(100000000000, 64)
        })
    }
    return (
        <div style={{ border: "2px solid yellow" }}>
            {
                projectData.map(project => {
                    return (
                        <div key={project.id}>
                            <ProjectCard _id={project.id} _address={project.address} _name={project.name} _details={project.details} _fund={project.funds} donate={donate} />
                            <button onClick={() =>
                                contract.donate({
                                    userId: project.address.toString(),
                                    projectId: project.id,
                                    amount: bigInt(100000000000, 64)
                                })} >
                                donate to the project
                            </button>
                        </div>
                    )
                })
            }
            <button>
                donate
            </button>
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