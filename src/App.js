import { React, useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";

import { getDateAsISOString } from "./utils/date";

function App() {
  const OFFSET = 15;
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAPODs = async (start, end) => {
    let arr = [];
    setLoading(true);
    try {
      // prettier-ignore
      const url = `https://api.nasa.gov/planetary/apod?api_key=hGyZfRvrrDPoh7zyygGscrbECLWOXNQzRiYXL3V1&start_date=${getDateAsISOString(start)}&end_date=${getDateAsISOString(end)}`;
      const res = await fetch(url);
      if (res.ok) {
        arr = (await res.json()).reverse();
      } else {
        throw new Error("Unable to fetch data, please try again later.");
      }
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
    return arr;
  };

  const handleStartDateChange = async (start) => {
    let sd, ed;
    ed = new Date(posts[posts.length - 1].date + "T10:20:30Z");
    sd = new Date(start);

    if (start < ed) {
      ed.setDate(ed.getDate() - 1);
      getAPODs(sd, ed).then((result) => {
        setPosts((oldPosts) => [...oldPosts, ...result]);
      });
    } else {
      getAPODs(sd, endDate).then((result) => {
        setPosts(result);
      });
    }
    setStartDate(start);
  };

  const handleEndDateChange = async (end) => {
    let sd, ed;
    sd = new Date(posts[0].date + "T10:20:30Z");
    ed = new Date(end);

    if (end > sd) {
      sd.setDate(sd.getDate() + 1);
      getAPODs(sd, ed).then((result) => {
        setPosts((oldPosts) => [...result, ...oldPosts]);
      });
    } else {
      getAPODs(startDate, ed).then((result) => {
        setPosts(result);
      });
    }
    setEndDate(end);
  };

  const loadMorePosts = async (start, end) => {
    let sd, ed;
    if (!startDate) {
      ed = new Date();
      sd = new Date();
    } else {
      ed = new Date(startDate);
      ed.setDate(ed.getDate() - 1);
      sd = new Date(startDate);
    }
    sd.setDate(sd.getDate() - OFFSET);

    getAPODs(sd, ed).then((result) => {
      setPosts((oldPosts) => [...oldPosts, ...result]);
    });

    if (!endDate) {
      setEndDate(ed);
    }
    setStartDate(sd);
  };

  useEffect(() => {
    loadMorePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1
      ) {
        loadMorePosts();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="App">
      <NavigationBar
        title="Spacestagram"
        loading={loading}
        startDate={startDate}
        endDate={endDate}
        handle={{
          StartDateChange: handleStartDateChange,
          EndDateChange: handleEndDateChange,
        }}
      />
      <Content data={posts} />
    </div>
  );
}

export default App;
