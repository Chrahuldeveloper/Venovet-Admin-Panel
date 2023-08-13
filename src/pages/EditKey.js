import React from "react";
import { useParams } from "react-router-dom";

export default function EditKey() {
  const { keyid } = useParams();

  return <>{keyid}</>;
}
