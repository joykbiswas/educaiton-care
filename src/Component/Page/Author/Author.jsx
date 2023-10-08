import { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";

const Author = () => {
    // const authors =useLoaderData()
    const [authors,setAuthors] =useState([])
    useEffect(()=>{
        fetch("/author.json")
        .then(res=>res.json())
        .then(data=>setAuthors(data))
    },[])
 
    console.log(authors);
    return (
        <div >
            <div>
                <h3 className="text-4xl font-bold mt-10 mb-6">Meet Our professionals</h3>
                <hr className="w-14 border-2 mb-6 border-zinc-950" />
            </div>
          
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                authors.map(aAuthor=>(<AuthorCard key={aAuthor.id} author={aAuthor}></AuthorCard>))
            }
            </div>
        </div>
    );
};

export default Author;