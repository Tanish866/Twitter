import Tweet from "./Tweet";
import '../CSS/TweetList.css';
function TweetList({ tweets, onEditTweet }){
    console.log(tweets);
    return(
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <Tweet 
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
