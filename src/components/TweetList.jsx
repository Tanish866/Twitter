import Tweet from "./Tweet";
import '../CSS/TweetList.css';
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

function TweetList({ tweets, onEditTweet }){
    console.log(tweets);
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <MemoisedTweet 
                            tweetId={tweet.id}
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            createdAt={tweet.createAt.toString()}
                            onEdit={onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    );
}
export default TweetList;
