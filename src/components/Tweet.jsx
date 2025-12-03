import { useState } from 'react';
import '../CSS/Tweet.css';
function Tweet({ tweetId, content, likeCount, createdAt, onEdit }){
    const[isEditted, setIsEditted] = useState(false);
    return (
        <div className="tweet-wrapper">
            <div className='tweet-edit-wrapper'>
                <div className="tweet-content">
                    {(isEditted) ?( 
                        <input 
                            type='text' 
                            value={content} 
                            onChange={(e) => {
                                onEdit({
                                    id: tweetId,
                                    content: e.target.value,
                                    likeCount: likeCount,
                                    createAt: createdAt
                                });
                                
                            }}
                        />
                    ) : content}
                </div>
                <div className='edit-tweet'>
                    <button onClick={() => setIsEditted(!isEditted)}>
                        {(isEditted) ? 'Save':'Edit'}
                    </button>
                </div>
            </div>
          
            <div className='like-create-wrapper'>
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className='created-at'>
                    <b>Tweeted at</b> {createdAt}
                </div>
            </div>
            
        </div>
        
    );
}
export default Tweet;
