import './App.css';
import TweetList from './components/TweetList';
const initialDummyTweets = [
  {id: 0, content: 'We have a new tweeter called as Thread.', likeCount: 10},
  {id: 1, content: 'What should we post ??', likeCount: 20},
  {id: 2, content: 'What is up with tech community', likeCount: 30}
];
function App() {
  return (
    <div className="App">
        <TweetList tweets={initialDummyTweets}/>
    </div>
  );
}

export default App;
