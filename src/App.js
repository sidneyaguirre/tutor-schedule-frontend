import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

import NewStudent from "./pages/Student/NewStudent";
import HomeStudent from "./pages/Student/HomeStudent";
import SubscribeCourse from "./pages/Student/SubscribeCourse";

import NewCourse from "./pages/Tutor/NewCourse";
import TutorNew from "./pages/Tutor/TutorNew";
import CoursesList from "./pages/Tutor/CoursesList";
import TutoryNew from "./pages/Tutory/TutoryNew";
import TutoryDetails from "./pages/Tutory/TutoryDetails";

function App() {
  return (
    <div className="App">
      <div className="App__body">
        <BrowserRouter>
          <div>
            <Header />
            <div className="container-height">
            <Switch >
              <Route exact path="/" component={SignIn} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/tutor/new" component={TutorNew} />
              <Route exact path="/tutor/my-courses" component={CoursesList} />
              <Route exact path="/tutor/new-course" component={NewCourse} />
              <Route exact path="/tutory/new" component={TutoryNew} />
              <Route exact path="/tutory/details" component={TutoryDetails} />
              <Route exact path="/student/new" component={NewStudent}/>
              <Route exact path="/student/home" component={HomeStudent}/>
              <Route exact path="/student/subscribe-course" component={SubscribeCourse}/>
            </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
