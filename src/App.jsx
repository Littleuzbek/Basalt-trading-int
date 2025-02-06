import './App.css'
import './Responsive.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"; 
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import ServiceDetailsInfo from './components/ServiceDetailsInfo';
import {loaderFn} from "./components/ServiceDetailsInfo"
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function HydrateFallback() {
  return <p>Loading...</p>;
}

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/home" element={<Home/>}>
          <Route path='/home/:id' element={<ServiceDetailsInfo />} loader={loaderFn} HydrateFallback={HydrateFallback}/>
        </Route>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
