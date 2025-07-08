import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CommentsDashboard from "./Components/CommentsDashboard";
import ProfileScreen from "./Components/ProfileScreen";


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<ProfileScreen/>}/>
        <Route path="/dashboard" element={<CommentsDashboard/>}/>
      </Routes>
    </Router>

  )
}

export default App;