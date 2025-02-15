import './App.css'
import './Responsive.css'
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"; 
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductsContainer from './components/ProductsContainer';

function App() {
  let language = localStorage.getItem("lang");
  const currentLang = language || "en";

  if(!language){
    localStorage.setItem("lang", "en");
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to={`/${currentLang}/home`} replace />}/>

      <Route path=":lang" >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:id" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductsContainer />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
