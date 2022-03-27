import React from "react";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div>
        This is where we will put productsearch or something (this is the same
        for all product routes)
      </div>
      <Outlet />
    </>
  );
}
