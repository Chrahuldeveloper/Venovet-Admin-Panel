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

export default function Routing() {
  return (
    <>
      <Routes>
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
        <Route path="/addnewserve" element={<NewServe />} />
        <Route path="/addnewkey" element={<NewKey />} />
        <Route path="/addnewwhy" element={<NewWhy />} />
        <Route path="/addnewcompany" element={<NewCompany />} />
        <Route path="/addnewtruck" element={<NewTruck />} />
        <Route path="/addnewcategory" element={<NewCategory />} />
        <Route path="/addnewproduct" element={<NewProduct />} />
        <Route path="/addnewblog" element={<NewBlog />} />
        <Route path="/:id" element={<EditCategory />} />
        <Route path="/key/:keyid" element={<EditKey />} />
        <Route path="/edit/:editid" element={<EditCompany />} />
        <Route path="truckedit/:truckid" element={<EditTrucks />} />
        <Route path="/whyusedit/:whyusid" element={<EditWhyUs />} />
        <Route path="/editcategory/:categoryid" element={<EditCategory />} />
        <Route path="/editProduct/:Productid" element={<EditProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/whatwedo" element={<SelectCategory />} />
        <Route path="/EditBlog" element={<EditBlog />} />
        <Route path="/EditBlog/edit/:id" element={<EditingPage />} />
        <Route
          path="/edit/whatwedo/:category"
          element={<WhatWeDoEditCategory />}
        />
      </Routes>
    </>
  );
}
