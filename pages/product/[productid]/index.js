import React from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productid;

  return <h2>Details for product {productId}</h2>;
}
