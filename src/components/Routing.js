import React from "react";
import { Route, Routes } from "react-router-dom";
import EditWhyUs from "./EditWhyUs";
import {
  WhoweServe,
  WhyUs,
  Key,
  Companies,
  Trucks,
  Nature,
  Enquiries,
  EditCategory,
  EditKey,
  Properties,
  Profile,
  EditProduct,
  EditTrucks,
  EditCompany,
  Orders,
  Categories,
  Products,
  Login,
  Careers,
  Home,
  EditBlog,
} from "../pages/index";
import {
  NewProduct,
  NewCategory,
  NewTruck,
  NewsLetter,
  NewWhy,
  NewCompany,
  NewServe,
  NewKey,
} from "../pages/AddNew/index";
import SelectCategory from "./WhatwedoEditors/SelectCategory";
import WhatWeDoEditCategory from "./WhatwedoEditors/WhatWeDoEditCategory";
import EditingPage from "./EditingPage";
import NewBlog from "../pages/AddNew/NewBlog";
import NewNature from "../pages/AddNew/NewNature";
import Brochure from "../pages/Brochure";
import EditCategeory from "../pages/EditCategeory";
import SocialMedia from "../pages/SocialMedia";

export default function Routing() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/whoweserve" element={<WhoweServe />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/key-benefits" element={<Key />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/nature-of-enquiry" element={<Nature />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/news-letters" element={<NewsLetter />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/addnewserve" element={<NewServe />} />
        <Route path="/addnewkey" element={<NewKey />} />
        <Route path="/addnewwhy" element={<NewWhy />} />
        <Route path="/addnewcompany" element={<NewCompany />} />
        <Route path="/addnewtruck" element={<NewTruck />} />
        <Route path="/addnewcategory" element={<NewCategory />} />
        <Route path="/addnewproduct" element={<NewProduct />} />
        <Route path="/addnewblog" element={<NewBlog />} />
        <Route path="/addnewnatureenq" element={<NewNature />} />
        <Route path="/:id" element={<EditCategory />} />
        <Route path="/key/:keyid" element={<EditKey />} />
        <Route path="/edit/:editid" element={<EditCompany />} />
        <Route path="truckedit/:truckid" element={<EditTrucks />} />
        <Route path="/whyusedit/:whyusid" element={<EditWhyUs />} />
        <Route path="/editcategory/:categoryid" element={<EditCategeory />} />
        <Route path="/editProduct/:Productid" element={<EditProduct />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/whatwedo" element={<SelectCategory />} />
        <Route path="/EditBlog" element={<EditBlog />} />
        <Route path="/EditBlog/edit/:id" element={<EditingPage />} />
        <Route
          path="/edit/whatwedo/:category"
          element={<WhatWeDoEditCategory />}
        />
      </Routes> */}
      <Routes>
        <Route path="/admin-panel/" element={<Login />} />
        <Route path="/admin-panel/home" element={<Home />} />
        <Route path="/admin-panel/whoweserve" element={<WhoweServe />} />
        <Route path="/admin-panel/why-us" element={<WhyUs />} />
        <Route path="/admin-panel/key-benefits" element={<Key />} />
        <Route path="/admin-panel/companies" element={<Companies />} />
        <Route path="/admin-panel/trucks" element={<Trucks />} />
        <Route path="/admin-panel/properties" element={<Properties />} />
        <Route path="/admin-panel/nature-of-enquiry" element={<Nature />} />
        <Route path="/admin-panel/enquiries" element={<Enquiries />} />
        <Route path="/admin-panel/career" element={<Careers />} />
        <Route path="/admin-panel/news-letters" element={<NewsLetter />} />
        <Route path="/admin-panel/categories" element={<Categories />} />
        <Route path="/admin-panel/products" element={<Products />} />
        <Route path="/admin-panel/orders" element={<Orders />} />
        <Route path="/admin-panel/brochure" element={<Brochure />} />
        <Route path="/admin-panel/addnewserve" element={<NewServe />} />
        <Route path="/admin-panel/addnewkey" element={<NewKey />} />
        <Route path="/admin-panel/addnewwhy" element={<NewWhy />} />
        <Route path="/admin-panel/addnewcompany" element={<NewCompany />} />
        <Route path="/admin-panel/addnewtruck" element={<NewTruck />} />
        <Route path="/admin-panel/addnewcategory" element={<NewCategory />} />
        <Route path="/admin-panel/addnewproduct" element={<NewProduct />} />
        <Route path="/admin-panel/addnewblog" element={<NewBlog />} />
        <Route path="/admin-panel/addnewnatureenq" element={<NewNature />} />
        <Route path="/admin-panel/:id" element={<EditCategory />} />
        <Route path="/admin-panel/key/:keyid" element={<EditKey />} />
        <Route path="/admin-panel/edit/:editid" element={<EditCompany />} />
        <Route
          path="/admin-panel/truckedit/:truckid"
          element={<EditTrucks />}
        />
        <Route path="/admin-panel/whyusedit/:whyusid" element={<EditWhyUs />} />
        <Route
          path="/admin-panel/editcategory/:categoryid"
          element={<EditCategeory />}
        />
        <Route
          path="/admin-panel/editProduct/:Productid"
          element={<EditProduct />}
        />
        <Route path="/admin-panel/social-media" element={<SocialMedia />} />
        <Route path="/admin-panel/profile" element={<Profile />} />
        <Route path="/admin-panel/whatwedo" element={<SelectCategory />} />
        <Route path="/admin-panel/EditBlog" element={<EditBlog />} />
        <Route
          path="/admin-panel/EditBlog/edit/:id"
          element={<EditingPage />}
        />
        <Route
          path="/admin-panel/edit/whatwedo/:category"
          element={<WhatWeDoEditCategory />}
        />
      </Routes>
    </>
  );
}
