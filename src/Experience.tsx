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


//creates Expereince tiles
type ExperienceProps = {
    experience: Experience;
}

export function Expereince({ experience }: ExperienceProps) {
    let newDate = experience.date.startDate
    if (experience.date.endDate) {
        newDate += " - " + experience.date.endDate
    } else {
        newDate += " - Current" 
    }
    return <div className = "experienceTile">
        <p className = "role">{experience.role} </p>
        <a className = "companyClickable"  href= {experience.link} >
            {experience.logo && ( /* show it if it exists */
                <img className = "companyLogo" src={`img/${experience.logo}`} alt={`${experience.company} logo`} />
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
export function Expereinces() {
    let myExpereince = defExpereinces()
    return (
        <div className = "expereinceContainer">
            {myExpereince.map((exp, index) => (
                <Expereince key = {index} experience={exp}></Expereince>
            ))}
        </div>

    )
}



//project definiton
export function defExpereinces() {
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
    
