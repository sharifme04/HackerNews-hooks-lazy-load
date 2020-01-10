import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./App.css";
const Pagination = React.lazy(() => import("./components/Pagination"));
const StoryComponent = React.lazy(() => import("./components/StoryComponent"));

const API_END_POINT = process.env.REACT_APP_BASE_PATH;

function App() {
  const storiesPerPage = 28;
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPages] = useState(1);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    let items = [];
    await axios
      .get(`${API_END_POINT}/topstories.json?print=pretty`)
      .then(response => response.data)
      .then(data => {
        data.map(async storyId => {
          await axios
            .get(`${API_END_POINT}/item/${storyId}.json?print=pretty`)
            .then(response => response.data)
            .then(async itemDetail => {
              items = [...items, itemDetail];
              await setStories(items);
            });
        });
      });
  };

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = pageNumber => setCurrentPages(pageNumber);
  const previousPage = pageNumber => setCurrentPages(pageNumber - 1);
  const nextPage = pageNumber => setCurrentPages(pageNumber + 1);

  return (
    <div className="container-fluid">
      <h1 className=" mt-1">Hacker News App</h1>
      <hr />
      <Suspense fallback={<div className="spinner-border"></div>}>
        <Pagination
          storiesPerPage={storiesPerPage}
          totalStories={stories.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
        <StoryComponent stories={currentStories} />
      </Suspense>
    </div>
  );
}

export default App;
