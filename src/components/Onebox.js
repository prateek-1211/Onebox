import React, { useState, useEffect } from "react";
import api from "../utils/api";
import ReplyBox from "./ReplyBox";
import "./Onebox.css";

const Onebox = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await api.getThreads();
        setThreads(response.data);
        setError(null);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Threads list not found.");
        } else {
          setError("An error occurred while fetching threads.");
        }
      }
    };

    fetchThreads();

    const handleKeyDown = (e) => {
      if (e.key === "D" && selectedThread) {
        deleteThread(selectedThread.id);
      } else if (e.key === "R" && selectedThread) {
        // Handle reply functionality
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedThread]);

  const deleteThread = async (threadId) => {
    try {
      await api.deleteThread(threadId);
      setThreads(threads.filter((thread) => thread.id !== threadId));
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Thread not found.");
      } else {
        setError("An error occurred while deleting the thread.");
      }
    }
  };

  return (
    <div className="onebox-container">
      {error && <p className="error-message">{error}</p>}
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="thread"
          onClick={() => setSelectedThread(thread)}
        >
          <p>{thread.subject}</p>
          <button onClick={() => deleteThread(thread.id)}>Delete</button>
        </div>
      ))}
      {selectedThread && <ReplyBox threadId={selectedThread.id} />}
    </div>
  );
};

export default Onebox;
