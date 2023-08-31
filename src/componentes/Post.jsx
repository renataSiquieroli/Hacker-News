const Post = ({ post }) => {
  return (
    <div>
      {
        <ol>
          <li key={post.author}>
            <div>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                {post.title}{" "}
                <a
                  style={{ textDecoration: "none", color: "grey" }}
                  href={post.url}
                >
                  ({post.url})
                </a>
              </h4>
              <p
                style={{
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                {post.points} points by{" "}
                <a style={{ textDecoration: "none", color: "grey" }}>
                  {post.author}{" "}
                </a>
                | <a style={{ textDecoration: "none", color: "grey" }}>hide</a>{" "}
                |{" "}
                <a style={{ textDecoration: "none", color: "grey" }}>
                  {post.num_comments} comments
                </a>
              </p>
            </div>
          </li>
        </ol>
      }
    </div>
  );
};
export default Post;
