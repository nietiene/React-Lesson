import { useParams } from "react-router-dom";
import { data } from "./Data";

export default function Post(){
    const { id } = useParams();
    const post = data.find((p) => p.id.toString() === id);

    if(!post) return <h2>Post Not Found</h2>;

    return (
        <div>
            <h2>{post.title}</h2>
            <h2>{post.content}</h2>
        </div>
    )
}