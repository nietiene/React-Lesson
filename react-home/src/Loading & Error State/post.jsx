import React, {useState, useEffect} from "react";

const PostComponet = () => {
    const [data, setData] = useState(null);
    const [loading,  setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if(!response.ok) throw new Error('Failed To Fetch');
            return response.json();
        }).then((result) => {
            setData(result);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });

    }, []);

return (
 <div>
       {loading && (
        <p>Loading ....</p>)}
      {error && (
        <p style={{color: 'red'}}>{error}</p> )}
      {data && (
        <ol>
            {data.slice(0,5).map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ol>
      )}
 </div>
)
}
export default PostComponet;