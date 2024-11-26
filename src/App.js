import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";

// user management
import UserManagement from "./components/UserManagement/UserManagement.jsx";
//Restaurant Management
import RestaurantManagement from "./components/RestaurantManagement/RestaurantManagement.jsx";


//event managemnt
import EventsManagement from "./components/EventManagement/EventManagement.jsx";
//bidding management
import BiddingManagement from "./components/BiddingManagement/BiddingManagement.jsx";

//EarningReport
import EarningReport from "./components/EarningReport.jsx";
//ReferralManagement
import ReferalManagement from "./components/ReferalManagement/ReferalManagement.jsx";



import Analytics from "./components/Analytics.jsx";
import Dashboard from "./components/Dashboard.jsx";


import FlagReview from "./components/Review Management/FlagReview.jsx";
import Reviews from "./components/Review Management/Reviews.jsx";

// push-notification-management
import AddNotification from "./components/PushNotification/AddNotifications.jsx";
import EditNotifications from "./components/PushNotification/EditNotifications.jsx";
import PushNotifications from "./components/PushNotification/PushNotifications.jsx";
import ViewNotification from "./components/PushNotification/ViewNotification.jsx";


import CommonLayout from "./common/CommonLayout.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

import Profile from "./components/ProfileSection/Profile.jsx";
import ProfileDetails from "./components/ProfileSection/ProfileDetails.jsx";
import ProfileEdit from "./components/ProfileSection/ProfileEdit.jsx";
import EditReview from "./components/Review Management/EditReview.jsx";
import ReplyReview from "./components/Review Management/ReplyReview.jsx";
import ViewReview from "./components/Review Management/ViewReview.jsx";


import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

// settings
import Settings from "./components/Settings.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <ProtectedRoute Component={Dashboard} /> */}
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<CommonLayout />}>
          <Route
            path="/dashboard"
            element={<ProtectedRoute Component={Dashboard} />}
          />

          {/* /////////////////////////////////////////////////////////////////////// */}


          <Route path="/users-management" element={<UserManagement/>}/>
          <Route path="/events-management" element={<EventsManagement/>}/>
          <Route path="/bidding-management" element={<BiddingManagement/>}/>
          <Route path="/earning-report" element={<EarningReport/>}/>
          <Route path="/referal-management" element={<ReferalManagement/>}/>
          <Route path="/restaurant-Management" element={<RestaurantManagement/>}/>

          



          {/* review */}

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/flag-review" element={<FlagReview />} />
          <Route path="/reply-review" element={<ReplyReview />} />
          <Route path="/preview-review" element={<ViewReview />} />
          <Route path="/edit-review" element={<EditReview />} />


          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          {/* push-notification */}
          <Route path="/push-notifications" element={<PushNotifications />} />
          <Route path="/add-push-notifications" element={<AddNotification />} />
          <Route
            path="/view-push-notifications"
            element={<ViewNotification />}
          />
          <Route
            path="/edit-push-notification"
            element={<EditNotifications />}
          />

         


          {/* profile */}
          <Route path="/profile" element={<Profile />} />

          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
