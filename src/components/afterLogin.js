import { useState } from 'react';
import "./common.css"

import PropTypes from 'prop-types';
import Project from './project';

export default function AfterLogin({ contract, currentUser }) {
    const [projectList, setProjectList] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [_name, setName] = useState("");
    const [_details, setDetails] = useState("");

    const handleSubmit = () => {
        _name && _details ? addProject() : alert("Plese enter the Project Details")
    }

    async function addProject() {
        await contract.addProject({
            userId: currentUser.accountId,
            address: currentUser.accountId,
            name: _name,
            details: _details,
            funds: "0"
        })
    }

    async function registeredProject() {
        const projectId = await contract.allProjects()
        setProjectList(projectId)
    }

    registeredProject()

    // async function usr() {
    //     const u = await contract.getUsers()
    //     console.log(u);
    // }

    async function getProjectData() {
        let project = []
        for (let i = 0; i < projectList.length; i++) {
            // console.log(projectList[i]);
            const data = await contract.projectData({ id: projectList[i] })
            project.push(data)
            console.log(project[i]);
        }
        setProjectData(project)
    }

    return (
        <div className='afterLogin'>
            <h2>Hello <strong>{currentUser.accountId}</strong> !</h2>
            <p>Balance - {currentUser.balance}</p>

            {/* add project */}

            <div className='addProject'>
                <strong> Add Your Project Here</strong>
                <br />
                Project Name <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="textBox" />
                Project Details <input type="text" name="details" onChange={(e) => setDetails(e.target.value)} className="textBox" />

                <button onClick={handleSubmit} className="BTN">
                    add project
                </button>
            </div>

            <div>

                <button onClick={getProjectData} className="BTN">See projects</button>

                <div>
                    {
                        projectData.length > 0 ?
                            <Project contract={contract} projectData={projectData} currentUserId={currentUser.accountId} />
                            : "click above to display other user's project"
                    }
                </div>
            </div>
        </div>
    )
}

AfterLogin.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired
    })
};