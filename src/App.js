import React from "react";

import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import NavContainer from "./components/Nav/NavContainer";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  // Загрузка URL при загрузке страницы

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavContainer /* state={props.store.nav.friendsList} */ />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="*" element={<ProfileContainer />} />
            {/* const navigate = useNavigate(); navigate("/profile"); */}
            <Route
              path="/dialogs"
              element={
                <DialogsContainer
                /* store={props.store}
                  dispatch={props.dispatch} */
                /* dialogsData={props.store.messagesPage.dialogsData}
                  messagesData={props.store.messagesPage.messagesData}
                  dispatch={props.dispatch}
                  newMessageText={props.store.messagesPage.newMessageText} */
                />
              }
            />
            <Route
              path="/profile/:userID?"
              element={
                <ProfileContainer /* store={props.store} dispatch={props.dispatch} */
                />
              }
            />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
