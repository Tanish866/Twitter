import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useState } from 'react';
const initialDummyTweets = [
  {id: 0, content: 'We have a new tweeter called as Thread.', likeCount: 10, createAt: new Date()},
  {id: 1, content: 'What should we post ??', likeCount: 20, createAt: new Date()},
  {id: 2, content: 'What is up with tech community', likeCount: 30, createAt: new Date()}
];


function Twitter() {
    const[tweets, setTweets] = useState(initialDummyTweets);
    const handleAddTweets = (text) => {
        let nextId = (tweets.length) > 0 ? tweets[tweets.length - 1].id + 1 : 0;
        setTweets([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random() * 10),
            id: nextId,
            createAt: new Date()
        }]);
    }
    return (
        
        <>
            <AddTweet onAddTweets={handleAddTweets}/>
            <TweetList tweets={tweets}/>
            
        </>
    );
}
export default Twitter;