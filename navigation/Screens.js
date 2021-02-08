import React from 'react';
import { Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// screens

import Main from '../screens/Main';
import Login from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import DrawerNavigation from '../screens/DrawerNavigation';
import VerifyOtp from '../screens/VerifyOtp';
import ChangePassword from '../screens/ChangePassword';
import SelectService from '../screens/SelectService';
import ServiceDetail from '../screens/ServiceDetail';
import SelectAppointmentDateTime from '../screens/SelectAppointmentDateTime';
import ServiceDetailGetAppointment from '../screens/ServiceDetailGetAppointment';
import Notifications from '../screens/Notifications';
import Setting from '../screens/Setting';
import AddMoney from '../screens/AddMoney';


import Filter from '../screens/Filter';
import Payment from '../screens/Payment';
import AddAddress from '../screens/AddAddress';
import BookingConfirmation from '../screens/BookingConfirmation';
import SelectAddress from '../screens/SelectAddress';
import EditProfile from '../screens/EditProfile';
import PaymentSuccess from '../screens/PaymentSuccess';
import PaymentFailed from '../screens/PaymentFailed';
import PaymentPending from '../screens/PaymentPending';
import RateReview from '../screens/RateReview';
import MyWishlist from '../screens/MyWishlist';
import MyWallet from '../screens/MyWallet';
import OrderSummary from '../screens/OrderSummary';
import MyBookingsClinicProcess from '../screens/MyBookingsClinicProcess';
import DetailsofAccepted from '../screens/DetailsofAccepted';
import DetailsofBooked from '../screens/DetailsofBooked';
import DetailsofProducts from '../screens/DetailsofProducts';
import BookingSummary from '../screens/BookingSummary';
import MyCart from '../screens/MyCart';
import AllTransactions from '../screens/AllTransactions';
import TransactionsDetails from '../screens/TransactionsDetails';
import SaveAddress from '../screens/SaveAddress';
import DentalClinicServicesDetails from '../screens/DentalClinicServicesDetails';

import { Images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" //headerMode="screen"
    initialRouteName="Main"
    >
      <Stack.Screen
        name="Union"
        component={Main}
        options={{
          headerShown: false,
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function EmpAvailityStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="EmpAvaility"
        component={EmpAvaility}
        options={{
          title: "EmpAvaility",
          headerRight: () => (
            <Image resizeMode="cover" source={Images.NotificationIcon} style={{ width: 20, height: 25, marginRight: 25 }} />
          ),
          cardStyle: { backgroundColor: "#ffffff" }
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
//     <Drawer.Navigator initialRouteName="Home" 
//   drawerContent={props => <CustomDrawerContent {...props} />}
//       drawerContentOptions={{
//         activeTintColor: '#00C8E4',
//         itemStyle: { marginVertical: 5 },
//       }}
//     >

//         <Drawer.Screen options={{
//         activeTintColor: '#444444',
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/home.png")}
//         />,
//         activeTintColor: '#444444'
//       }}
//         name="Home" component={Main} />
//      <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/my_bookings.png")}
//         />
//       }}
//         name="My Booking" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/wallet.png")}
//         />
//       }}
//         name="My Wallet" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/transactions.png")}
//         />
//       }}
//         name="All Transaction" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/wishlist.png")}
//         />
//       }}
//         name="My Wishlist" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/my_cart.png")}
//         />
//       }}
//         name="My Carts" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/address.png")}
//         />
//       }}
//         name="Save Address" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/notifications_1.png")}
//         />
//       }}
//         name="Notifications" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/settings.png")}
//         />
//       }}
//         name="Setting" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/terms_of_service.png")}
//         />
//       }}
//         name="Terms of Services" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/rateus.png")}
//         />
//       }}
//         name="Rate Us" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/feedback.png")}
//         />
//       }}
//         name="Help & Feedback" component={Main} />
//       <Drawer.Screen options={{
//         drawerIcon: config => <Image style={{ width: 24, height: 24 }}
//           source={require("../assets/16-Menu/signout.png")}
//         />
//       }}
//         name="Sign Out" component={Main} /> 
//     </Drawer.Navigator>
  
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </DrawerContentScrollView>
  );
}

function MainScreenStack(props) {
  return (
    <Stack.Navigator mode="none"
    initialRouteName="Main"
    >
      <Stack.Screen
        name="Main"
        component={Main}
        option={{
          headerShown: false,
          //header: null ,
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function NotificationStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function SettingStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Setting"
        component={Setting}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ChangePassswordStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function OrderSummaryStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ServiceDetailGetAppointmentStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="ServiceDetailGetAppointment"
        component={ServiceDetailGetAppointment}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function FilterStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Filter"
        component={Filter}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function PaymentStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Payment"
        component={Payment}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function AddMoneyStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="AddMoney"
        component={AddMoney}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function AddAddressStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function SelectAddressStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="SelectAddress"
        component={SelectAddress}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function PaymentSuccessStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function PaymentFailedStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="PaymentFailed"
        component={PaymentFailed}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function PaymentPendingStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="PaymentPending"
        component={PaymentPending}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function EditProfileStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function RateReviewStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="RateReview"
        component={RateReview}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function MyWishlistStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="MyWishlist"
        component={MyWishlist}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function MyWalletStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="MyWallet"
        component={MyWallet}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function MyBookingsClinicProcessStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="MyBookingsClinicProcess"
        component={MyBookingsClinicProcess}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function DetailsofAcceptedStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="DetailsofAccepted"
        component={DetailsofAccepted}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function DetailsofBookedStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="DetailsofBooked"
        component={DetailsofBooked}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function DetailsofProductsStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="DetailsofProducts"
        component={DetailsofProducts}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function BookingSummaryStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="BookingSummary"
        component={BookingSummary}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function MyCartStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function AllTransactionsStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="AllTransactions"
        component={AllTransactions}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function TransactionsDetailsStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="TransactionsDetails"
        component={TransactionsDetails}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function SaveAddressStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="SaveAddress"
        component={SaveAddress}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function DentalClinicServicesDetailsStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="DentalClinicServicesDetails"
        component={DentalClinicServicesDetails}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function BookingConfirmationStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="BookingConfirmation"
        component={BookingConfirmation}
        option={{
          //headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function DrawerNavigationStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

function SelectAppointmentDateTimeStack(props) {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Appointment"
        component={SelectAppointmentDateTime}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

export default function LoginStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerShown: false,
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="ServiceDetail"
        option={{
          headerTransparent: true
        }}>
          {(props) => <ServiceDetail {...props} />}
        </Stack.Screen>
      <Stack.Screen
        name="SelectService"
        component={SelectService}
        option={{
          headerTransparent: true
        }}
      />

      {/* <Stack.Screen
        name="DentalClinicServicesDetails"
        component={DentalClinicServicesDetails}
        option={{
          headerTransparent: true
        }}
      /> */}
        <Stack.Screen
        name="Main"
        component={Main}
        option={{
          //headerShown: false,
          //header: null ,
          //headerTransparent: true
        }}
      />
      <Stack.Screen name="ServiceDetailGetAppointmentStack" component={ServiceDetailGetAppointmentStack} />
      <Stack.Screen name="ChangePassswordStack" component={ChangePassswordStack} />
      <Stack.Screen name="NotificationStack" component={NotificationStack} />
      <Stack.Screen name="AddMoney" component={AddMoneyStack} />
       <Stack.Screen name="SettingStack" component={SettingStack} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigationStack} />
      <Stack.Screen name="App" component={AppStack} />
      {/* <Stack.Screen name="MainScreenStack" component={MainScreenStack} /> */}
      
      <Stack.Screen name="Payment" component={PaymentStack} />
      <Stack.Screen name="SelectAppointmentDateTime" component={SelectAppointmentDateTimeStack} />
      <Stack.Screen name="Filter" component={FilterStack} />
      <Stack.Screen name="AddAddress" component={AddAddressStack} />
      <Stack.Screen name="BookingConfirmation" component={BookingConfirmationStack} />
      <Stack.Screen name="SelectAddress" component={SelectAddressStack} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessStack} />
      <Stack.Screen name="EditProfile" component={EditProfileStack} />
      <Stack.Screen name="PaymentFailed" component={PaymentFailedStack} />
      <Stack.Screen name="PaymentPending" component={PaymentPendingStack} />
      <Stack.Screen name="RateReview" component={RateReviewStack} />
      <Stack.Screen name="MyWishlist" component={MyWishlistStack} />
      <Stack.Screen name="MyWallet" component={MyWalletStack} />
      <Stack.Screen name="MyBookingsClinicProcess" component={MyBookingsClinicProcessStack} />
      <Stack.Screen name="DetailsofAccepted" component={DetailsofAcceptedStack} />
      <Stack.Screen name="DetailsofBooked" component={DetailsofBookedStack} />
      <Stack.Screen name="DetailsofProducts" component={DetailsofProductsStack} />
      <Stack.Screen name="BookingSummary" component={BookingSummaryStack} />
      <Stack.Screen name="MyCart" component={MyCartStack} />
      <Stack.Screen name="OrderSummary" component={OrderSummaryStack} />
      <Stack.Screen name="AllTransactions" component={AllTransactionsStack} />
      <Stack.Screen name="TransactionsDetails" component={TransactionsDetailsStack} />
      <Stack.Screen name="SaveAddress" component={SaveAddressStack} />
      <Stack.Screen name="DentalClinicServicesDetails" component={DentalClinicServicesDetailsStack} />
    </Stack.Navigator>
  );
}

