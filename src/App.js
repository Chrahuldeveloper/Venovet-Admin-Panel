import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import WhoweServe from "./pages/WhoweServe";
import WhyUs from "./pages/WhyUs";
import Key from "./pages/Key";
import Companies from "./pages/Companies";
import Trucks from "./pages/Trucks";
import Nature from "./pages/Nature";
import Enquiries from "./pages/Enquiries";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import EditCategory from "./pages/EditCategory";
import EditKey from "./pages/EditKey";
import EditCompany from "./pages/EditCompany";
import EditTrucks from "./pages/EditTrucks";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/whoweserve" element={<WhoweServe />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/key-benefits" element={<Key />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/trucks" element={<Trucks />} />
      <Route path="/nature-of-enquiry" element={<Nature />} />
      <Route path="/enquiries" element={<Enquiries />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/:id" element={<EditCategory />} />
      <Route path="/key/:keyid" element={<EditKey />} />
      <Route path="/edit/:editid" element={<EditCompany />} />
      <Route path="truckedit/:truckid" element={<EditTrucks />} />
    </Routes>
  );
}

export default App;
