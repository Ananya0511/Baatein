import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingPage from '../components/LandingPage';
import Onboarding from '../components/Onboarding';
import RecentChat from '../components/Chat/RecentChat';
import NewChat from '../components/Chat/NewChat';
import GroupRecentChat from '../components/Chat/GroupRecentChat';
import ChatScreen from "../components/Chat/ChatScreen";
import GroupProfile from '../components/Profiles/GroupProfile';
import UserProfile from '../components/Profiles/UserProfile';
// import GroupChat from '../components/Chat/GroupChat';
// import Dms from '../components/Chat/Dms';
import Settings  from '../components/Settings';
import MyProfile from '../components/Settings/MyProfile';
import ChatWallpaper from '../components/Settings/ChatWallpaper';
import {userContext} from '../context/userContext';
import Hoc from '../Hoc'
import { darkContext } from "../context/DarkmodeContext";
import { createTheme, ThemeProvider } from '@mui/material/styles'


// const theme = createTheme();
function Navs() {
  const [state, dispatch] = useContext(userContext);
  const [theme, setTheme] = useContext(darkContext);

  const ProtectedRoute = () => {
    // if user is logged in, allow access to the route
    // if user is not logged in, redirect to login page
    if (
      state.isAuth
    ) {
      //allow access to the route
      return <Outlet />;
    } else {
      //redirect to login page
      return <Navigate to="/" />;
    }
  };
const BottomNav = () => {
    return (
      <Hoc>
        <Outlet />
      </Hoc>
    );
}

  return (
    <div
    
    style={{
      backgroundColor: theme.background
    }}
    className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route element={<BottomNav />} >
          <Route path="/chat/recentchat" element={<RecentChat />} />
          <Route path="/chat/GroupRecentChat" element={<GroupRecentChat />} />
          <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/chat/newchat" element={<NewChat />} />
        
          <Route path="/chat/dms/:id" element={<ChatScreen type='dms' />} />
          {/* /:id:lastmessageId */}
          <Route path="/chat/groupchat" element={<ChatScreen type='group' />} />
          <Route path="/groupprofile" element={<GroupProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
        
          <Route path="/settings/profile" element={<MyProfile />} />
          <Route path="/settings/wallpaper" element={<ChatWallpaper />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Navs;


// function Navs() {
 
//   const [state, dispatch] = useContext(userContext);
//   const ProtectedRoute = () => {
//     //if user is logged in, allow access to the route
//     //if user is not logged in, redirect to login page

//     if(
//         state.isAuth
//     ){
//         return <Outlet/>
//     }
//     else{
//         return <Navigate to="/" />
//     }
//   }

//   const BottomNav = () => {
//     return (
//       <Hoc>
//         <Outlet />
//       </Hoc>
//     );
//   }


//   return (
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" exact element={<LandingPage/>} />
//     <Route element={<ProtectedRoute/>}>
//         <Route path="/onboarding" exact element={<Onboarding/>} />
//         <Route element={<BottomNav />}>
//         <Route path="/chat/recentchat" exact element={<RecentChat/>} />
//         <Route path="/chat/GroupRecentchat" exact element={<GroupRecentChat/>} />
//         <Route path="/settings" exact element={<Settings/>} />
//         </Route>

//         <Route path="/chat/newchat" exact element={<NewChat/>} />
//         <Route path="/chat/dms" exact element={<Dms/>} />
//         <Route path="/chat/groupchat" exact element={<GroupChat/>} />
//         <Route path="/groupprofile" exact element={<GroupProfile/>} />
//         <Route path="/userprofile" exact element={<UserProfile/>} />
        
//         <Route path="/settings/profile" exact element={<MyProfile/>} />
//         <Route path="/settings/wallpaper" exact element={<ChatWallpaper/>} />
        
//     </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default Navs