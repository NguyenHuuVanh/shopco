import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Delayed from "~/helper/delayed";
import Loading from "~/components/Loading/Loading";
import PATH from "~/constants/paths";
import Delayed from "~/helper/delayed";
// import {PATH} from "~/constants/paths";

const Home = lazy(() => Delayed(import("../pages/Home/Home")), 3000);
// // const Home = lazy(() => import("../pages/Home/Home"));
// const About = lazy(() => Delayed(import("~/components/About/About")), 3000);
// const ForgotPassword = lazy(() => Delayed(import("../pages/FogotPassword/ForgotPassword"), 3000));
// const Node1 = lazy(() => Delayed(import("../pages/Node/Node1")), 3000);
// const Node2 = lazy(() => Delayed(import("../pages/Node/Node2")), 3000);
// const SignInForm = lazy(() => Delayed(import("../pages/Registration/SignIn"), 3000));
// const SignUpForm = lazy(() => Delayed(import("../pages/Registration/SignUp"), 3000));
// const NodeControl = lazy(() => Delayed(import("../pages/Control/NodeControl"), 3000));
// const ErrorPage = lazy(() => Delayed(import("../pages/ErrorPage/ErrorPage"), 3000));
// const AccountDetail = lazy(() => Delayed(import("../pages/AccountDetail/AccountDetail"), 3000));
// const ChangePassword = lazy(() => Delayed(import("../pages/ChangePassword/ChangePassword"), 3000));
// const ChangeInfomation = lazy(() => Delayed(import("../pages/ChangeInfomation/ChangeInfomation"), 3000));
// const Contact = lazy(() => Delayed(import("../pages/Contact/Contact"), 3000));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />} fullscreen={true}>
        <Routes>
          <Route exact path={PATH.HOME} element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
