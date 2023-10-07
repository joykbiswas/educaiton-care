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
                <h3 className="text-3xl mt-10 mb-6">Meet Our Professor</h3>
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