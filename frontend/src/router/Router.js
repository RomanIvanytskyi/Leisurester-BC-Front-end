import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Glossary from "../Pages/Glossary/Glossary";
import paths from "./paths";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import AdminGlossary from "../Pages/Glossary/AdminGlossary";
import AdminLayout from "../Components/Layouts/AdminLayout";
import NewLeisure from "../Pages/Glossary/NewLeisure";
import Leisure from "../Pages/Leisure/OneLeisure";
import Proposition from "../Pages/UserProposition/UserProposition";
import AdmProposition from "../Pages/UserProposition/AdminPropositions";
import { useState, useEffect } from "react";
import { meAPI } from "../api/api";

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
];

const RootRouter = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      me(token);
    }
  }, []);

  const me = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token && token !== "undefined") {
      meAPI(token).then((res) => {
        setUser({
          email: res.data.email,
        });
      });
    } else {
      setUser(null);
    }
  };
  const logout = () => {
    localStorage.setItem("token", "");
    props.me();
  };
  //   const login = () => {
  //     setloggedIn(true);
  //   };
  return (
    <div>
      <AdminLayout user={user} me={me} logout={logout}>
        {AdminRouters.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            {paths.login || paths.register ? (
              <Component me={props.me} />
            ) : (
              <Component />
            )}
          </Route>
        ))}
      </AdminLayout>
    </div>
  );
};

export default RootRouter;
