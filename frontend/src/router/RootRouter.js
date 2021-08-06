import { useState } from "react";
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
import AdmProposition from "../Pages/UserProposition/AdminPropositions";
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
    path:paths.adminproposition,
    Component: AdmProposition,
    exact: true,
  },
  {
    path:paths.newLeisure,
    Component: NewLeisure,
    exact: true,
  }
];

const RootRouter = (props) => {
  const [loggedIn, setloggedIn] = useState();
  const [isAdmin, setIsAdmin] = useState();

  const admin = () => {
    setIsAdmin(true);
  };
  const neadmin =() =>{
    setIsAdmin(false);
  }
  const login = () => {
    setloggedIn(true);
  };
  const logout = () => {
    setloggedIn(false);
    setIsAdmin(false)
  };

  return (
    <Router>
      {loggedIn ? (
        <div>
          {isAdmin ? (
            <Switch>
              <AdminLayout logout={logout}>
                {AdminRouters.map(({ path, Component, exact }) => (
                  <Route exact={exact} path={path}>
                    <Component login={login} admin={admin} />
                  </Route>
                ))}
                <Redirect to={paths.home} />
              </AdminLayout>
            </Switch>
          ) : (
            <Switch>
              <AppLayout logout={logout}>
                {AppRouters.map(({ path, Component, exact }) => (
                  <Route exact={exact} path={path}>
                    <Component login={login} neadmin={neadmin} />
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
          <LoginLayout login={login}>
            {authRouters.map(({ path, Component, exact }) => (
              <Route exact={exact} path={path}>
                <Component login={login} admin={admin} />
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

