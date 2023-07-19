import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";
import { Posts } from "../../dummyData";
import { Users } from "../../dummyData";

const Feeds = ({ searchTerm }) => {
  let filteredSearchPosts = Posts.filter((post) => {
    const postDesc = post.desc ? post.desc.toLowerCase() : "";
    const postUsername = post.username.toLowerCase();
    const term = searchTerm?.toLowerCase();

    return postDesc.includes(term) || postUsername.includes(term);
  });

  return (
    <main className="feeds">
      <div className="feedwrapper">
        <Share />
        {searchTerm
          ? filteredSearchPosts.map((post) => (
              <Post key={post.id} data={post} />
            ))
          : Posts.map((post) => <Post key={post.id} data={post} />)}
      </div>
    </main>
  );
};

export default Feeds;
