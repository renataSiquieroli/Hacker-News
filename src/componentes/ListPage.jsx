import Post from "./Post";
import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
const ListPage = ({ searchResults }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //  if (isLoading) getData();
    setIsLoading(true);
  }, []);

  if (isLoading === true) {
    const results = searchResults.map((post) => (
      <Post key={post.id} post={post} />
    ));

    const content = results?.length ? (
      results
    ) : (
      <article>
        <p>No Matching Posts</p>
      </article>
    );

    return <main>{content}</main>;
  } else {
    return (
      <div id="cen">
        <BarLoader />
      </div>
    );
  }
};
export default ListPage;
