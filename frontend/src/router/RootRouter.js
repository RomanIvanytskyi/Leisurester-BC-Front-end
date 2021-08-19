import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Glossary from "../Pages/Glossary/Glossary";
import LoginLayout from "../Components/Layouts/LoginLayouts";
import paths from "./paths";
import AppLayout from "../Components/Layouts/AppLayout";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import AdminGlossary from "../Pages/Glossary/AdminGlossary";
import AdminLayout from "../Components/Layouts/AdminLayout";
import NewLeisure from "../Pages/Glossary/NewLeisure";
import Leisure from "../Pages/Leisure/OneLeisure";
import Proposition from "../Pages/UserProposition/UserProposition";
import OneLeisure from "../Pages/Leisure/OneLeisure";
import LeisureEdit from "../Pages/Leisure/LeisureEdit";
import AdmProposition from "../Pages/UserProposition/AdminPropositions";
import { meAPI } from "../api/api";

const authRouters = [
  {
    path: paths.home,
    Component: Home,
    exact: true,
  },
  {
    path: paths.proposition,
    Component: Proposition,
    exact: true,
  },
  {
    path: paths.glossary,
    Component: Glossary,
    exact: true,
  },
  {
    path: paths.login,
    Component: Login,
    exact: true,
  },
  {
    path: paths.register,
    Component: Register,
    exact: true,
  },
];
const AppRouters = [
  {
    path: paths.home,
    Component: Home,
    exact: true,
  },
  {
    path: paths.glossary,
    Component: Glossary,
    exact: true,
  },
  {
    path: paths.profile,
    Component: Profile,
    exact: true,
  },
  {
    path: paths.login,
    Component: Login,
    exact: true,
  },
  {
    path: paths.register,
    Component: Register,
    exact: true,
  },
  {
    path: paths.leisure,
    Component: Leisure,
    exact: true,
  },
  {
    path: paths.proposition,
    Component: Proposition,
    exact: true,
  },
  {
    path: paths.oneLeisure,
    Component: OneLeisure,
    exact: false,
  },
];
const AdminRouters = [
  {
    path: paths.home,
    Component: Home,
    exact: true,
  },
  {
    path: paths.leisure,
    Component: Leisure,
    exact: true,
  },
  {
    path: paths.adminglossary,
    Component: AdminGlossary,
    exact: true,
  },
  {
    path: paths.profile,
    Component: Profile,
    exact: true,
  },
  {
    path: paths.login,
    Component: Login,
    exact: true,
  },
  {
    path: paths.adminproposition,
    Component: AdmProposition,
    exact: true,
  },
  {
    path: paths.newLeisure,
    Component: NewLeisure,
    exact: true,
  },
  {
    path: paths.oneLeisure,
    Component: OneLeisure,
    exact: false,
  },
  {
    path: paths.LeisureEdit,
    Component: LeisureEdit,
    exact: false,
  },
];

const RootRouter = (props) => {
  const [loggedIn, setloggedIn] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdmin(true);
      console.log("admin");
    }
    if (token && token !== "undefined") {
      meAPI(token).then((res) => {
        setloggedIn(true);
      });
    } else {
      setUser(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const me = () => {
    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");

    if (role === "admin") {
      setIsAdmin(true);
      console.log("admin");
    }
    if (token && token !== "undefined") {
      meAPI(token).then((res) => {
        setloggedIn(true);
      });
    } else {
      setUser(null);
    }
  };

  const login = (props) => {
    let token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      setloggedIn(true);
    } else {
      console.log("not logged in");
    }
    if (localStorage.getItem("role") === "admin") {
      setIsAdmin(true);
      console.log("logged");
    }
  };
  const logout = () => {
    setloggedIn(false);
    setIsAdmin(false);
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
  };
  return (
    <Router key={paths} me={me}>
      {loggedIn ? (
        <div>
          {isAdmin ? (
            <Switch>
              <AdminLayout logout={logout} me={me} user={user}>
                {AdminRouters.map(({ path, Component, exact }) => (
                  <Route key={path} exact={exact} path={path}>
                    {paths.login || paths.registrater ? (
                      <Component me={props.me} />
                    ) : (
                      <Component />
                    )}
                  </Route>
                ))}

                <Redirect to={paths.home} />
              </AdminLayout>
            </Switch>
          ) : (
            <Switch>
              <AppLayout logout={logout} me={me} user={user}>
                {AppRouters.map(({ path, Component, exact }) => (
                  <Route exact={exact} path={path}>
                    <Component login={login} />
                  </Route>
                ))}
                <Redirect to={paths.home} />
              </AppLayout>
            </Switch>
          )}
        </div>
      ) : (
        <Switch>
          <Redirect from={paths.home} to={paths.login} exact />
          <LoginLayout>
            {authRouters.map(({ path, Component, exact }) => (
              <Route exact={exact} path={path}>
                <Component login={login} />
              </Route>
            ))}
            <Redirect to={paths.login} />
          </LoginLayout>
        </Switch>
      )}
    </Router>
  );
};

export default RootRouter;
