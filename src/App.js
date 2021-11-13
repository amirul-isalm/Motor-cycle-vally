import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import ExplorePage from "./Pages/Explore/ExplorePage";
import PurcessComponent from "./Pages/PurcessPage/PurcessComponent";
import LoginPage from "./Pages/Login&Registresion/LoginPage";
import RegisterPage from "./Pages/Login&Registresion/RegisterPage";
import AuthProvider from "./Pages/Context/AuthProvider";
import PrivetRoute from "./Pages/PrivetRouteAndAdminRoute/PrivetRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <ExplorePage></ExplorePage>
            </Route>
            <PrivetRoute path="/purcess/:id">
              <PurcessComponent></PurcessComponent>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/register">
              <RegisterPage></RegisterPage>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>



          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
