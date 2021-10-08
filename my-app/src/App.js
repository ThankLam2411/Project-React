import React from "react";
import {BrowserRouter , Route, Link, NavLink, Switch} from "react-router-dom"
import CartPage from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product_Detail from "./pages/Product_Detail";
import Search from "./pages/Search";
import Success from "./pages/Success";
import Footer from "./shared/Components/Footer";
import Header from "./shared/Components/Header"
import Menu from "./shared/Components/Menu";
import Sidebar from "./shared/Components/Sidebar";
import Slider from "./shared/Components/Slide";
import { getCategories } from "./services/Api";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
const App=()=>{
  const [categories,setCategories]=React.useState([]);
  React.useEffect(()=>{
      getCategories({}).then((res)=>{
        setCategories(res.data.data.docs)
      });
      

  },[])
  return(
    <>
    <Provider store={store}>
    <BrowserRouter>

      <Header/>

      <div id="body">
        <div class="container">
            <Menu categories={categories} />
          <div className="row">
          <div id="main" className="col-lg-8 col-md-12 col-sm-12">

          <Slider/>

          <Switch>
              <Route path="/" exact component={Home} />
                    <Route path="/category-:id" component={Category} />
                    <Route path="/product-details-:id" component={Product_Detail} />
                    <Route path="/search" component={Search} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/success" component={Success} />
                    <Route path="/404" component={NotFound} />
              </Switch>

            </div>
            <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">

              <Sidebar/>
              </div>


           
          </div>
          
          </div>
      </div>
      <Footer/>
      </BrowserRouter>
      </Provider>

    </>

  )
}
export default App;
