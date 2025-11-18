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
            <img src={`img/${project.thumbnail}`} alt={`${project.projName} thumbnail`}></img>
        )}

        <p className = "projName">{project.projName}</p>
        <p className = "date">{newDate}</p>

        <p className = "description">{project.description}</p>

        {project.link && ( /* show it if it exists */
            <a href={project.link} target="_blank" rel="noopener noreferrer">
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


//project definiton
export function projects() {
    let EcoArchitect = {
        projName: "EcoArchitect",
        date: {
            projStartDate: "Oct 2025"
        },
        description: "string",
        // thumbnail?: string; // imagename
        // link?: string;
        tags: ['Gemini', 'Java']
    };

    let RedFlag = {
        projName: "RedFlag",
        date: {
            projStartDate: "Nov 2025"
        },
        description: "string",
        // thumbnail?: string; // imagename
        // link?: string;
        tags: ['Gemini', 'Java']
    };

    return [EcoArchitect, RedFlag]
}
    
