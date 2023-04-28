import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


export const ValidateQueryParam = () => {
  const [searchParams] = useSearchParams();
  const guestID = searchParams.get("guest_id");

//   useEffect(() => {
    
//   }, []);
  return guestID?.toString() === "undefined" || guestID?.toString() === ""
};