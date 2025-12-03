import { useState } from "react";
function AddTweet({ onAddTweets }){
    const[ text, setText ] = useState("");
    return(
        <>
            <input type="text" 
                placeholder="Add new Tweet..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() =>{
                onAddTweets(text);
                setText(' ');
            }}>
                Tweet!!
            </button>
        </>
    );
}
export default AddTweet;