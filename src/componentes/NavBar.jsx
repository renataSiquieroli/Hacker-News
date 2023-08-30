export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">
          <img src="src/assets/y18.sgv" alt="logo" />
        </a>
        <h4>Hacker News</h4>
      </div>
      <div className="nav-menu">
        <ul>
          <a href="#">
            <li>new</li>
          </a>{" "}
          |
          <a href="#">
            <li>past</li>
          </a>{" "}
          |
          <a href="#">
            <li>comments</li>
          </a>{" "}
          |
          <a href="#">
            <li>ask</li>
          </a>{" "}
          |
          <a href="#">
            <li>show</li>
          </a>{" "}
          |
          <a href="#">
            <li>jobs</li>
          </a>{" "}
          |
          <a href="#">
            <li>submit</li>
          </a>
        </ul>
      </div>
      <div className="login">
        <a href="#">login</a>
      </div>
    </div>
  );
}
