import "./about.css"
import { IoIosTrendingUp } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";
import { TbArrowAutofitContentFilled } from "react-icons/tb";



export default function About() {
    interface CardData {
        title: string;
        content: string;
         icon:any;
        
    }

    const cardData: CardData[] = [
        {
            title: "Trending ",
            content: "Assassins Creed Valhalla continues to dominate gaming forums, social media platforms, and live-streaming channels, becoming a cultural phenomenon.",
            icon:<IoIosTrendingUp/>
        },
        {
            title: "High-Quality",
            content: "The game delivers stunning, lifelike environments with realistic lighting and textures that bring the Viking age to life.",
            icon:<MdHighQuality/>
        },
        {
            title: "Cinematic",
            content: "Beyond gameplay, the cinematic narrative and deeply developed characters create a movie-like experience for players.",
            icon:<TbArrowAutofitContentFilled/>
        },

    ];

    return (
        <>
            <section className="about">
                <div className="atext">
                    <h1>About Assassins Creed <br /> <span>Valhlalla?</span></h1>
                    <p><span>Welcome to the world of Assassins Creed Valhalla</span> a groundbreaking action role-playing game that immerses players in the era of Viking conquests. Developed by Ubisoft Montreal and released in November 2020, Valhalla takes the Assassins Creed franchise to new heights, blending historical authenticity with compelling storytelling and innovative gameplay mechanics.</p>
                    <p><span>Set in the Age of the Vikings</span>
                        Step into the boots of Eivor, a fierce Viking raider on a journey from the icy fjords of Norway to the lush landscapes of Anglo-Saxon England. The game is set in the late 9th century, during a time of war, alliances, and shifting powers as Englands fractured kingdoms vie for dominance. The historical setting breathes life into iconic locations such as Winchester, London, and York while weaving Norse mythology and Viking culture into the narrative.</p>
                    <p><span>Live the Life of a Viking </span>
                        In Valhalla, you dont just fight as a Viking — you live like one. Build and expand your settlement, forge alliances, and make critical choices that shape your story. From leading raids to engaging in epic battles, the game offers endless opportunities for adventure, whether by land or by sea. Customize Eivor with gear, tattoos, and weapons that reflect your style of play, be it stealthy assassinations or full-on combat.</p>
                </div>
                <div className="cards">
                {cardData.map((e,index)=>
                <div key={index} className="acard">
                    <div className={`round ${index==0 ? "text-blue-500" : index==1 ?  "text-red-500" : "text-yellow-500"}`}>
                {e.icon}
                 </div>
                 <h2>{e.title}</h2>
                 <p>{e.content}</p>
                </div>
)}
                </div>
            </section>
        </>
    );
}

