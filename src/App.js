import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Notes from './pages/Notes';
import EditNote from './pages/EditNote';
import CreateNote from './pages/CreateNote';

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/rest-api-notes/" element={<Notes />} />
          <Route path="/notes/:id/edit" element={<EditNote />} />
          <Route path="/notes/create" element={<CreateNote />} />
        </Routes>
      </>
    </Router>
  );
}
