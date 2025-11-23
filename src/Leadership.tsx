export type Leadership = {
    club: string;
    role: string;
    date: {
        startDate: string;
        endDate?: string;
    }
    description: string;
    logo?: string; // imagename
    image?: string;
    link?: string;
};


//creates experience tiles
type LeadershipProps = {
    leadership: Leadership;
}

export function Leadership({ leadership }: LeadershipProps) {
    let newDate = leadership.date.startDate
    if (leadership.date.endDate) {
        newDate += " - " + leadership.date.endDate
    } else {
        newDate += " - Current" 
    }
    return <div className = "leadershipTile">
        <img className = "image" src={`/leadership/${leadership.image}`} alt={`${leadership.role} at {leadership.club}`} ></img>
        <div className="clubRow">
           {leadership.logo && ( /* show it if it exists */
                <img className = "logo" src={`/leadership/${leadership.logo}`} alt={`${leadership.club} logo`} />
            )}

            <p className = "club"> {leadership.club} </p>

        </div>
        <p className = "role">{leadership.role} </p>

        <p className = "date">{newDate}</p>
        

        <p className = "description">{leadership.description}</p>

    </div>
    
}

//creating projects component
export function Leaderships() {
    let myLeadership = defLeaderships()
    return (
        <div className = "leadershipsContainer">
            {myLeadership.map((leadership, index) => (
                <Leadership key = {index} leadership={leadership}></Leadership>
            ))}
        </div>

    )
}




//project definiton
export function defLeaderships() {
    let ACC = {
        club: 'Aggie Coding Club',
        role: "Events Chair",
        date: {
            startDate: "March 2024"
        },
        description: "Organized ACCfest, a large-scale tech career fair attended by top industry employers and hundreds of students.",
        logo: "acc.jpg", // imagename
        image: "meeting.JPG",
        link: "https://www.tamu.edu/about/index.html"

    };

    let STEMfest = {
        club: 'Society of Women Engineers',
        role: "STEMfest Chair",
        date: {
            startDate: "Oct 2023",
            endDate: "May 2024"
        },
        description: "Organized a large-scale outreach event for 100+ Girl Scouts, leading a 30-member committee, managing logistics, budgeting, and partnerships.",
        logo: "swe.JPG", // imagename
        image: "stemfest.JPG",
        link: "https://www.texasaimbots.com/"
    };


    return [ACC, STEMfest]
}
    
