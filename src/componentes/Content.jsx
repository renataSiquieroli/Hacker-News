import { useState, useEffect } from "react";

export default function Content() {
  const [currentData, setData] = useState([]);

  const display = async () => {
    const test = await fetch("/src/assets/JSON-hacker-news/hackernews.json", {
      method: "GET",
      mode: "no-cors",
    });
    const data = await test.json();

    setData(data.hits);
  };

  useEffect(() => {
    display();
  }, []);

  return (
    <div>
      {
        <ol>
          {currentData.map((datai) => (
            <li key={datai.author}>
              <div>
                <h4
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                >
                  {datai.title}{" "}
                  <a
                    style={{ textDecoration: "none", color: "grey" }}
                    href={datai.url}
                  >
                    ({datai.url})
                  </a>
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                >
                  {datai.points} points by{" "}
                  <a style={{ textDecoration: "none", color: "grey" }}>
                    {datai.author}{" "}
                  </a>
                  |{" "}
                  <a style={{ textDecoration: "none", color: "grey" }}>hide</a>{" "}
                  |{" "}
                  <a style={{ textDecoration: "none", color: "grey" }}>
                    {datai.num_comments} comments
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ol>
      }
    </div>
  );
}
