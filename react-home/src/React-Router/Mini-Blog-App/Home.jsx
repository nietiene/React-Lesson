import { Link } from "react-router-dom";
import { data } from "./Data";

export default function Home(){
    return (
       <div>
       <h2>Blog Post</h2>
        {data.map((data) => (
            <div key={data.id}>
             <h3>{data.title}</h3>
             <Link to={`/data/${data.id}`}>Read More</Link>
            </div>
        ))}
       </div>
    )
}