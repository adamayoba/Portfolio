import React, { FunctionComponent} from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css';
import Header from "./components/navbar/Header";
import PageNotFound from "./pages/PageNotFound";
const App : FunctionComponent = () => {
  return (
      <BrowserRouter>
          <div>
              <nav> {/** Navigation bar common to all pages */}
                  <div> 
                  </div>
              </nav>
          </div>
          {/** The route management system of our application */}
          <Routes>
              <Route path="/" element={<Header/>}/>
              <Route path="*" element={<PageNotFound/>}/> 
              <Route> </Route>
              <Route> </Route>
          </Routes>
      </BrowserRouter>
  )
}
export default App;