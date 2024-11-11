import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import About from "./pages/About";
import Auth from "./pages/Auth";
import JobDetail from "./pages/JobDetail";
import UploadJob from "./pages/UploadJob";
import CompanyProfile from "./pages/CompanyProfile";
import Companies from "./pages/Companies";
import FindJobs from "./pages/FindJobs";

// user exist login user else push to a different page
function Layout() {
  const user =true
  const location = useLocation()

  return user ? (
    <Outlet/>) : ( <Navigate to = 'user-auth' state={{from: location}} replace/>
  );
}
  function App() {
    const user ={};
  return (<main>
  <Navbar/>
  <Routes>
    <Route element={<Layout/>}>
    <Route path='/'
            element={<Navigate to='/find-jobs' replace={true} />}
          />
           <Route path='/find-jobs' element={<FindJobs />} />
           <Route path='/companies' element={<Companies />} />
           <Route 
           path={
            user?. user?.accoutType === "seeker"
            ? "/user-profile"
            : "/user-profile/:id"
           }
           element={<UserProfile />}
           />

           <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
    </Route>

    <Route path="/about-us" element={<About/>}/>
    <Route path="/user-auth" element= {<Auth/>} />
  </Routes>

  {user && <Footer /> }
  </main>
   
  )
};
export default App;