import React, {useState} from 'react';

function AboutUs(props) {
    const [text,setText] = useState(false)

    const handleText= () => {
        setText(!text)
    }
    return (
        <div>
            {
                    text
                    ?
                    <p>текст</p>
                    :
                    false
            }
            <button onClick={handleText}>кнопку</button>
        </div>
    );
}

export default AboutUs;