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
        <div className = "experienceContainer">
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
        role: " Bachelor of Science in Computer Science",
        date: {
            startDate: "August 2023",
            endDate: "May 2027"
        },
        description: "learned",
        logo: "tamu.png", // imagename
        link: "https://www.tamu.edu/about/index.html",
        tags: ["Python", "C++"]
    };

    return [Student]
}
    
