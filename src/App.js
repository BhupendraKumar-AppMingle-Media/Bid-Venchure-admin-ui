import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";

// user management
import UserManagement from "./components/UserManagement/UserManagement.jsx";
import PreviewUserManagement from "./components/UserManagement/PreviewUserManagement.jsx";
//Restaurant Management
import RestaurantManagement from "./components/RestaurantManagement/RestaurantManagement.jsx";
import PreviewRestaurantManagement from "./components/RestaurantManagement/PreviewRestaurantManagement.jsx";


//event managemnt
import EventsManagement from "./components/EventManagement/EventManagement.jsx";
//bidding management
import BiddingManagement from "./components/BiddingManagement/BiddingManagement.jsx";
import PreviewBidding from "./components/BiddingManagement/PreviewBidding.jsx";

//EarningReport
import EarningReport from "./components/EarningReport.jsx";
//ReferralManagement
import ReferralManagement from "./components/ReferralManagement/ReferralManagement.jsx";
import WalletIncentive from "./components/WalletIncentive/WalletIncentive.jsx";



import Analytics from "./components/Analytics.jsx";
import Dashboard from "./components/Dashboard.jsx";


import FlagReview from "./components/Review Management/FlagReview.jsx";
import Reviews from "./components/Review Management/Reviews.jsx";

// push-notification-management
import RestaurantsNotification from "./components/PushNotification/RestaurantsNotification.jsx";
import UserNotification from "./components/PushNotification/UserNotification.jsx";

import AddUserNotification from "./components/PushNotification/AddUserNotification.jsx";
import EditUserNotification from "./components/PushNotification/EditUserNotification.jsx";
import AddRestaurantNotification from "./components/PushNotification/AddRestaurantNotification";
import EditRestaurantNotification from "./components/PushNotification/EditRestaurantNotification";



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
import Settings from "./components/SliderPromotion.jsx";

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
          <Route path="/preview-user-management" element={<PreviewUserManagement/>}/>
          {/* restauranatt */}
          <Route path="/restaurant-Management" element={<RestaurantManagement/>}/>
          <Route path="/preview-restaurant-Management" element={<PreviewRestaurantManagement/>}/>

          <Route path="/events-management" element={<EventsManagement/>}/>
          <Route path="/bidding-management" element={<BiddingManagement/>}/>
          <Route path="/preview-bidding-management/:id" element={<PreviewBidding/>}/>
          <Route path="/earning-report" element={<EarningReport/>}/>
          <Route path="/wallet-incentive" element={<WalletIncentive/>}/>
          <Route path="/referral-management" element={<ReferralManagement/>}/>

          



          {/* review */}

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/flag-review" element={<FlagReview />} />
          <Route path="/reply-review" element={<ReplyReview />} />
          <Route path="/preview-review" element={<ViewReview />} />
          <Route path="/edit-review" element={<EditReview />} />


          <Route path="/analytics" element={<Analytics />} />
          <Route path="/slider-promotion" element={<Settings />} />

          {/* push-notification */}
          <Route path="/notifications/restaurants" element={<RestaurantsNotification />} />
          <Route path="/notifications/users" element={<UserNotification />} />

          <Route path="/add-user-notification" element={<AddUserNotification />} />
          <Route path="/edit-user-notification/:id" element={<EditUserNotification />} />
         
          <Route path="/add-restaurant-notification" element={<AddRestaurantNotification />} />
        <Route path="/edit-restaurant-notification/:id" element={<EditRestaurantNotification />} />
     
         


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
