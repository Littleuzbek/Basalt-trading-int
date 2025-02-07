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
import {loaderFn} from "./components/HomeProducts"
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import HomeProducts from './components/HomeProducts';
import Products from './pages/Products';
import ProductsContainer from './components/ProductsContainer';

function HydrateFallback() {
  return <p>Loading...</p>;
}

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="home" element={<Home/>}>
          <Route path='/home/:id' element={<HomeProducts />} loader={loaderFn} HydrateFallback={HydrateFallback}/>
        </Route>
        <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductsContainer />} HydrateFallback={HydrateFallback}/>
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
