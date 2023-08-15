import React from "react";
import { useParams } from "react-router-dom";

export default function EditWhyUs() {
  const { whyusid } = useParams();

  return <>edit the doc {whyusid}</>;
}
