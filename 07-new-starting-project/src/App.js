import { Router } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Router path="/">
        <AllMeetupsPage />
      </Router>
      <Router path="/new-meet-up">
        <NewMeetupPage />
      </Router>
      <Router path="/favorites">
        <FavoritesPage />
      </Router>
    </div>
  );
}

export default App;
