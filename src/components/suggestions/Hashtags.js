import { useState } from "react";
import More from '../../assets/more.svg';
import '../../styles/Hashtags.css'; 

function App() {

    const [tags, setTags] = useState([
        "#shutdowndevelopers",
        "Buzz",
        "A big event",
        "#Lorem",
        "#Ipsum",
        "#opendevelopers",
        "DEVELOPER SALARIES"
    ]);

    return (
        <div id='hashtags' className='hashtags-container'>
            <span className='title'>Topics you may be interested in</span>
            <div className='spacer'></div>
            {
                tags.map((item, index) => {
                    return (
                        <div key={index} className='tag-item'>
                            <div className='tag-content'>
                                <div className='tag-header'>
                                    <span className='tag-category'>Politics - Trending</span>
                                    <img src={More} width="20" alt="" />
                                </div>
                                <span className="tag-name">{item}</span>
                            </div>
                            <span className='tag-tweets'> {Math.floor(Math.random() * (10000 - 1500) + 1500)} Tweets</span>
                        </div>
                    );
                })
            }
            <div className='show-more'>
                <span className='show-more-text'>Show more</span>
            </div>
        </div>
    );
}

export default App;
