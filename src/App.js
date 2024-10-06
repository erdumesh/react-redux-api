import "./App.css";
import { useGetAllPostQuery} from "./services/post";
import { useGetPostByIdQuery } from "./services/post";
import { useGetPostByLimitQuery } from "./services/post";
import { useDeletePostMutation } from "./services/post";
import { useCreatePostMutation } from "./services/post";
import { useUpdatePostMutation } from "./services/post";

function App() {
  // Using a query hook automatically fetches data and returns query values
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(50);
  // const responseInfo = useGetPostByLimitQuery(5);
  // const [deletePost, responseInfo] = useDeletePostMutation();
  // const [createPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation();

  const newPost = {
    title: "This is newpost Title",
    body: "This is newpost Body",
    userId: 1,
  }
  const updatePostData = {
    id : 1,
    title: "This is UPDATED POST Title",
    body: "This is UPDATED POST Body",
    userId: 1,
  }

  // console.log("deletePost :", deletePost)
  console.log("responseInfo :", responseInfo)

  // console.log("Response Information :", responseInfo);
  // console.log('Data :' ,responseInfo.data);
  // console.log('Loading :' ,responseInfo.isLoading);
  console.log('Success :' ,responseInfo.isSuccess);

  if (responseInfo.isLoading) return <div>Loading............</div>;
  if (responseInfo.isError)
    return <div>An Error Occured.....{responseInfo.error.error}</div>;

  return (
    // Get All Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (GET All Data)</h1>
    //   {responseInfo.data.map((post, i) =>
    //     <div key={i}>
    //       <h3>
    //         {post.id} {post.title}{" "}
    //       </h3>
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //   )}
    // </div>

    // // Get Single Data By Id
    // <div>
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>
    // </div>

    // Get Limited Data By Id
    // <div>
    //   <h1 className="bg-[red] text-center font-bold">
    //     Redux Toolkit - RTK Query (GET Limited Data)
    //   </h1>
    //   <div className="grid grid-cols-3">
    //     {responseInfo.data.map((post, i) => (
    //       <div className="  bg-slate-300 shadow-lg p-[20px] " key={i}>
    //         <h3 className="font-bold uppercase  text-green-600">
    //           {post.id} - {post.title}
    //         </h3>
    //         <p className="font-mono">{post.body}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    // Delete Data By ID
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    //   onClick={()=>deletePost(2)}>Delete Post</button>
    // </div>

      // Create Post 
    //   <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    //   onClick={()=>createPost(newPost)}>Add Post</button>
    // </div>

    // Update Post 
    <div className="App">
    <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    onClick={()=>updatePost(updatePostData)}>Update Post</button>
  </div>
  );
}

export default App;

// data - The returned result if present.
// error - The error result if present.
// isUninitialized - When true, indicates that the query has not started yet.
// isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for the first request fired off, but not for subsequent requests.
// isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both the first request fired off, as well as subsequent requests.
// isSuccess - When true, indicates that the query has data from a successful request.
// isError - When true, indicates that the query is in an error state.
// refetch - A function to force refetch the query