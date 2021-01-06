import "./App.css";
import Sidebar from "./components/Sidebar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview.pages";
import SignupFormComp from "./pages/Signup.pages";
import SigninFormComp from "./pages/Signin.pages";
import ForgetPasswordFormComp from "./pages/Forget.pages";
import DashBoard from "./App";
import CrushSelection from "./components/CrushSelection/CrushSelection.component";
import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "./pages/Reports.pages";
import Team from "./pages/Team.pages";
import SecuredRoute from "./components/SecuredRoute.component.jsx";
function App() {
  return (
    <div>
      <span className="form-input-login">
        Do-not have a account? Sign Up <a href="/Signup">Signup</a>
      </span>
      <Router>
        <Sidebar />
        <CrushSelection />
        <Switch>
          <Route exact path="/Signup" component={SignupFormComp} />
          <Route path="/SignIn" component={SigninFormComp} />
          <Route path="/Forgot" component={ForgetPasswordFormComp} />
          {/* <Route path="/DashBoard" component={DashBoard}/> */}
          <SecuredRoute path="/DashBoard" component={DashBoard}></SecuredRoute>
          <Route path="/overview" exact component={Overview} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" exact component={ReportsOne} />
          <Route path="/reports/reports2" exact component={ReportsTwo} />
          <Route path="/reports/reports3" exact component={ReportsThree} />
          <Route path="/team" exact component={Team} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
