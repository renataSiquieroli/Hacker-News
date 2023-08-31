import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function Content() {
  const [currentData, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0); //pagination
  const [totalPages, setTotalPages] = useState(0); //pagination
  const itemsPerPage = 10; //pagination

  const pattern = /\w+\-?\w+?\.\w{2,}(\.\w+)?/;
  const shortLink = new RegExp(pattern);

  const display = async () => {
    const test = await fetch("/src/assets/JSON-hacker-news/hackernews.json", {
      method: "GET",
      mode: "no-cors",
    });
    const data = await test.json();

    setData(data.hits);

    setTotalPages(Math.ceil(data.hits.length / itemsPerPage)); //pagination
  };

  useEffect(() => {
    display();
  }, []);

  const startIndex = currentPage * itemsPerPage; //pagination
  const endIndex = startIndex + itemsPerPage; //pagination
  const subset = currentData.slice(startIndex, endIndex); //pagination

  const handlePageChange = (selectedPage) => {
    //pagination
    setCurrentPage(selectedPage.selected); //pagination
  };

  return (
    <div>
      {
        <ol>
          {subset.map((datai) => (
            <li key={datai.author}>
              <div>
                <h4
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    href={datai.url}
                  >
                    {datai.title}{" "}
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "grey" }}
                    href={datai.url}
                  >
                    ({datai.url === null ? "" : datai.url.match(shortLink)})
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
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
    </div>
  );
}
