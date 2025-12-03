import Tweet from "./Tweet";
import '../CSS/TweetList.css';
function TweetList({tweets}){
    console.log(tweets);
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount} createdAt={tweet.createAt.toString()}/>
                    </li>
                    
                ))
            }
        </ul>
    );
}
export default TweetList;