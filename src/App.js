import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingOverlay from '@ronchalant/react-loading-overlay'
import { useSelector } from "react-redux";
import Login from "./pages/Auth/login/Login";
import Dashboard from "./pages/main/DashBoard/Dashboard";
import AutoLogin from "./routes/autologin";
import AuthWrapper from "./routes/authWrapper";
import RemmeberCheck from "./routes/remeberCheck";

function App() {
  const isLoaded = useSelector(state => state.user.isLoaded);

  return (
    <Router>
       <LoadingOverlay
       active={isLoaded}
       spinner
       > 
        <RemmeberCheck>
          <AutoLogin>
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </AutoLogin>
          <AuthWrapper>
            <Switch>
              <Route exact path="/projects" component={Dashboard }/>
            </Switch>
          </AuthWrapper>
        </RemmeberCheck>
      </LoadingOverlay>
    </Router> 
  );
}

export default App;
