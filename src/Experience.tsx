export type Experience = {
    company: string;
    role: string;
    date: {
        startDate: string;
        endDate?: string;
    }
    description: string;
    logo?: string; // imagename
    link?: string;
    tags: string[];
};


//creates experience tiles
type ExperienceProps = {
    experience: Experience;
}

export function Experience({ experience }: ExperienceProps) {
    let newDate = experience.date.startDate
    if (experience.date.endDate) {
        newDate += " - " + experience.date.endDate
    } else {
        newDate += " - Current" 
    }
    return <div className = "experienceTile">
        <p className = "role">{experience.role} </p>
        <a className = "companyClickable"  href= {experience.link} target="_blank" rel="noopener noreferrer" >
            {experience.logo && ( /* show it if it exists */
                <img className = "companyLogo" src={`/experience/${experience.logo}`} alt={`${experience.company} logo`} />
            )}

            <p className = "company"> {experience.company} </p>
        </a>

        <p className = "date">{newDate}</p>

        <p className = "description">{experience.description}</p>


        <div className="tagsContainer">
            {experience.tags.map((tag, index) => (
                <p key={index} className="tags">{tag}</p>
            ))}
        </div>

    </div>
    
}

//creating projects component
export function Experiences() {
    let myExperience = defExperiences()
    return (
        <div className = "experiencesContainer">
            {myExperience.map((exp, index) => (
                <Experience key = {index} experience={exp}></Experience>
            ))}
        </div>

    )
}




//project definiton
export function defExperiences() {
    let Student = {
        company: 'Texas A&M',
        role: "Bachelor of Science in Computer Science",
        date: {
            startDate: "August 2023",
            endDate: "May 2027"
        },
        description: "learned",
        logo: "tamu.png", // imagename
        link: "https://www.tamu.edu/about/index.html",
        tags: ["Python", "C++"]
    };

    let Robomasters = {
        company: 'Texas Aimbots',
        role: "Embedded Systems Developer",
        date: {
            startDate: "August 2024",
        },
        description: "Working on a team of 15 to create and maintain code for 5 robots, including an autonomous one. Refactored 1000+ lines of legacy code into modular components, improving maintainability and debugging efficiency. Set up CANbus communication system to connect with computer vision data.",
        logo: "robomasters.png", // imagename
        link: "https://www.texasaimbots.com/",
        tags: ["C++", "Firmware", "Git",]
    };
    let Robomasters2 = {
        company: 'Texas Aimbots',
        role: "Embedded Systems Developer",
        date: {
            startDate: "August 2024",
        },
        description: "Working on a team of 15 to create and maintain code for 5 robots, including an autonomous one. Refactored 1000+ lines of legacy code into modular components, improving maintainability and debugging efficiency. Set up CANbus communication system to connect with computer vision data.",
        logo: "robomasters.png", // imagename
        link: "https://www.texasaimbots.com/",
        tags: ["C++", "Firmware", "Git",]
    };


    return [Student, Robomasters, Robomasters2]
}
    
