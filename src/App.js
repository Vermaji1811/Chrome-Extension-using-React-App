import React, {useState} from "react";
import "./App.css";

const data=[
    {
        name: "Sports",
        url: ["https://www.cricbuzz.com", "https://www.sportskeeda.com"] 
    },
    {
        name: "Movies",
        url: ["https://www.jiocinema.com", "https://www.primevideo.com", "https://www.netflix.com"]
    }, 
    {
        name: "Songs",
        url: ["https://www.spotify.com", "https://music.youtube.com",]
    }
]


function App(){

    const [lists, setLists] = useState(data);

    const open= (url) => {
        for(const link of url){
            window.open(link, "_blank"); 
        }
    }

    return (
        <div className="App">
            <h3>What's On Your Mind</h3>
            <div className="lists">
                {lists && lists.map((item)=> {
                    return(
                    <button className="button" onClick={()=> {open(item.url)}} >{item.name}</button>
                    )
                })}

                {/* {lists && lists.map((item)=> {
                    return(
                    <button className="button1" onClick={()=> {open(item.url)}} >{item.name}</button>
                    )
                })}  */}
            </div>
        </div> 
    );
}
export default App;
