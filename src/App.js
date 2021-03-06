import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import './components/Posts'
import Posts from './components/Posts';
import Pagination from './components/Pagination';


function App() {
  const [posts,setPosts]=useState([]);
  const [loading, setLoading]=useState(false);
  const [postsPerPage,setPostsPerPage]=useState(10);
  const [currentPage,setCurrentPage]=useState(1);

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      const res= await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();

  },[]);
// Get Current Posts

  const indexOfLastPost= currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  // Change Page

  const paginate=(pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="App">
      <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={currentPosts} loading={loading}></Posts>
        <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>

    </div>
  );
}

export default App;
