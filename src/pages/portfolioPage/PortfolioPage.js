import React, {useState} from 'react';

function PortfolioPage(props) {
    const [works, setWorks] = useState([])
    const getWorks = () => {
        setWorks(['Work1','Work2','Work3','Work4','Work5'])
    }

    return (
            <>
                <button onClick={getWorks}>get </button>
                <ul>
                    {
                        works.length > 0 ?
                            works.map((work, index) => {
                                return  <li key = {index}>{work}</li>
                            })
                            :
                            <h2>Нечего нет </h2>
                    }
                </ul>
            </>

    );
}

export default PortfolioPage;