import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Practice = () => {
  const [data, setdata] = useState([]);
  const [title, settitle] = useState();
  const [newdata, setnewdata] = useState("posts");
  const inputRef = useRef();
  useEffect(() => {
    const fetchPostData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setdata(res.data);
    };
    fetchPostData();
  }, []);
  const serachHandler = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${newdata}`
    );
    setdata(res.data);
    setnewdata(inputRef.current.value);
  };
  return (
    <>
      <div className="h-64 w-1/2 border-[5px] border-red-700 m-auto rounded-md bg-blue-200">
        <h1 className="text-center text-3xl font-bold">JASON API HANDLER</h1>
        <input
          className="border-2 border-black h-14 ml-4 w-1/2 mt-5"
          type="search"
          onChange={() => settitle(inputRef.current.value.trim() || "POSTS")}
          
          placeholder="SEARCH HERE"
          ref={inputRef}
          
        />
        <button
          onClick={serachHandler}
          className="bg-green-500 hover:bg-blue-900 text-white border-2 border-black h-10 pl-4 pr-4 ml-4"
        >
          SEARCH
        </button>
      </div>
      <h1 className="text-4xl font-bold bg-blue-300 w-36 pl-4 pr-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((items, index) => (
          <div key={index} className="border-2 border-blue-500 p-4">
            <h2 className="font-bold text-red-600">{items.userId}</h2>
            <h2 className="font-bold text-red-700 text-2xl">
              {items.title}
            </h2>
            <h4 className="text-xl">{items.body}</h4>

          </div>
        ))}
      </div>
    </>
  );
};

export default Practice;
