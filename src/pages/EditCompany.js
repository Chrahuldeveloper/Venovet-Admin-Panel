import React from "react";
import { useParams } from "react-router-dom";

export default function EditAcess() {
  const { editid } = useParams();

  return <>edit the table {editid}</>;
}
