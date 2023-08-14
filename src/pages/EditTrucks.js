import React from "react";
import { useParams } from "react-router-dom";

export default function EditTrucks() {
  const { truckid } = useParams();

  return <div>edit truck of id {truckid}</div>;
}
