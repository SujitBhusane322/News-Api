import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [news, setnews] = useState([]);
    const [showTitlesOnly, setShowTitlesOnly] = useState(false);
    const [sectionTitle, setSectionTitle] = useState('Everything');
    const [newsData, setNewsData] = useState({
        category: 'everything',
        search: 'india'
    })
    const countryref = useRef();

    // Fetch news based on category and search query
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://newsapi.org/v2/${newsData.category}?q=${newsData.search}&sortBy=popularity&apiKey=d971ec7a2e8d4fbea6a28e930e136965&pageSize=20`
                );
                setnews(res.data.articles);
            } catch (error) {
                console.error('Error fetching the news:', error);
            }
        };
        fetchData();
    }, [newsData]);

    const everythingHandler = () => {
        setShowTitlesOnly(false);
        setSectionTitle('Everything');
        setNewsData(prev => ({
            ...prev,
            category: 'everything'
        }))
    };

    const topHeadlinesHandler = () => {
        setShowTitlesOnly(true);
        setSectionTitle('Top Headlines');
        setNewsData(prev => ({
            ...prev,
            category: 'top-headlines'
        })) // Use 'everything' for filtering top titles from the same data.
    };

    const searchhandler = () => {
        let value = countryref.current.value
        if(!value || value == '') value = 'india';
        
        setNewsData(prev => ({...prev, search: value}));
    };

    return (
        <>
            <div className="border-2 border-black mt-3 h-72 w-1/2 m-auto">
                <h1 className="text-4xl font-bold text-center">NEWS APP</h1>
                SEARCH NEWS:
                <input
                    ref={countryref}
                    className="border-2 border-black h-12 w-96 m-6"
                    type="search"
                />
                <button
                    onClick={searchhandler}
                    className="bg-blue-400 text-white pt-2 pl-2 pr-2 pb-2"
                >
                    SEARCH
                </button>
                <br />
                <div className="flex w-96 justify-around mt-3">
                    <button
                        onClick={everythingHandler}
                        className="bg-green-700 hover:bg-green-200 border-4 border-red-600 pt-2 pl-1 pr-2 pb-2 rounded-md"
                    >
                        EVERYTHING
                    </button>
                    <button
                        onClick={topHeadlinesHandler}
                        className="bg-yellow-500 hover:bg-yellow-200 border-4 border-red-600 pt-2 pl-1 pr-2 pb-2 rounded-md"
                    >
                        TOP HEADLINES
                    </button>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-red-700 bg-blue-400 w-60 rounded-xl">
                {sectionTitle}
            </h1>

            {/* News Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {news &&
                    news.length > 0 &&
                    (showTitlesOnly
                        ? news.map((item, index) => (
                              <div
                                  key={index}
                                  className="border-2 border-red-600 rounded-md p-4 shadow-md"
                              >
                                  <h2 className="font-bold text-lg">
                                      {item.title}
                                  </h2>
                                  <p className="text-sm text-black mb-2">
                                      <strong>Author:</strong>{' '}
                                      {item.author || 'N/A'}
                                  </p>
                                  <p className="text-sm text-gray-500 mb-2">
                                      <strong>Published At:</strong>{' '}
                                      {item.publishedAt}
                                  </p>
                                  <p className="text-sm mb-2">
                                      {item.description ||
                                          'No description available'}
                                  </p>
                              </div>
                          ))
                        : news.map((item, index) => (
                              <div
                                  key={index}
                                  className="border-2 border-red-600 rounded-md p-4 shadow-md"
                              >
                                  <h2 className="font-bold text-lg mb-2">
                                      {item.title}
                                  </h2>
                                  <p className="text-sm text-black mb-2">
                                      <strong>Author:</strong>{' '}
                                      {item.author || 'N/A'}
                                  </p>
                                  <p className="text-sm text-gray-500 mb-2">
                                      <strong>Published At:</strong>{' '}
                                      {item.publishedAt}
                                  </p>
                                  <p className="text-sm mb-2">
                                      {item.description ||
                                          'No description available'}
                                  </p>
                              </div>
                          )))}
            </div>
        </>
    );
};

export default Home;
