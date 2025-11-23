export type Project = {
    projName: string;
    // techstack: string;
    date: {
        projStartDate: string;
        projEndDate?: string;
    }
    description: string;
    thumbnail?: string; // imagename
    link?: string;
    tags: string[];
};


//creates Project tiles
type ProjectProps = {
    project: Project;
}



export function Project({ project }: ProjectProps) {
    let newDate = project.date.projStartDate
    if (project.date.projEndDate) {
        newDate += " - " + project.date.projEndDate
    } 
    return <div className = "projTile">
        {project.thumbnail && ( /* show it if it exists */
            <img src={`/projects/${project.thumbnail}`} alt={`${project.projName} thumbnail`}></img>
        )}
        <div className="row">
            <p className = "projName">{project.projName}</p>
            <p className = "date">{newDate}</p>
        </div>

        <p className = "description">{project.description}</p>

        {project.link && ( /* show it if it exists */
            <a className = "projLink" href={project.link} target="_blank" rel="noopener noreferrer">
                Check it out here!
            </a>
        )}

        <div className="tagsContainer">
            {project.tags.map((tag, index) => (
                <p key={index} className="tags">{tag}</p>
            ))}
        </div>

    </div>
    
}

//creating projects component
export function Projects() {
    let myProjects = defProjects()
    return (
        <div className = "projectsContainer">
            {myProjects.map((project, index) => (
                <Project key = {index} project={project}></Project>
            ))}
        </div>

    )
}



//project definiton
export function defProjects() {
    let Boba = {
        projName: "Boba Shop Point of Sale Website",
        date: {
            projStartDate: "Sept 2025",
            projEndDate: "Current"
        },
        description: "Developed a Java app with interfaces for customers, employees, and mangers and expanded it to a node.js web application. Implemented a PostgreSQL database and backend functions that allowed for proper flow of data to the frontend. Led team in an Agile workflow, running 3x / week SCRUM meetings, managing sprints, and maintaining product backlogs.",
        thumbnail: "pos.png", // imagename
        link: "https://project3-gang-04-deployment.onrender.com/",
        tags: ['Java', 'JavaFX', 'PostgreSQL', 'Drizzle', 'Git', 'OAuth API', 'Node.js','Express.js', 'Javascript', 'CSS/Html']
    };
    let Urgent = {
        projName: "Animal Shelter Website",
        date: {
            projStartDate: "Sept 2025",
            projEndDate: "Current"
        },
        description: "Led a 6 person development team to design and deploy a full-stack web platform with admin tools for managing animals and dynamic user-side filtering and display features.",
        thumbnail: "urgent.png", // imagename
        // link?: string;
        tags: ['PostgreSQL', 'Supabase', 'PHP', 'Html/CSS', 'Javascript', 'Git', 'Node.js']
    };
    let EcoArchitect = {
        projName: "AI Architecture Sustainability Analyzer (EcoArchitect)",
        date: {
            projStartDate: "Oct 2025"
        },
        description: "Engineered a multi-step analysis tool that utilizes Gemini API (trained on reliable sources) to evaluate 20+ key elements provides the user with a sustainability score out of 100 and suggestions for improvement.",
        thumbnail: "eco.png", // imagename
        // link?: string;
        tags: ['React/TypeScript', 'Node.js', 'Gemini API', 'Tailwind CSS']
    };

    let RedFlag = {
        projName: "AI Document Confidentiality Classifier (RedFlag)",
        date: {
            projStartDate: "Nov 2025"
        },
        description: "Created AI-powered assistant that analyzes multi-page, multi-modal documents and classifies them by confidentiality level. Implemented detection of PII and other flags, as well as their locations.",
        thumbnail: "redflag.png", // imagename
        // link?: string;
        tags: ['Python', 'Django', 'PyPDF', 'PyMuPDF', 'Gemini API', 'Hugging Face Transformer']
    };

    return [Boba, Urgent, EcoArchitect, RedFlag]
}
    
