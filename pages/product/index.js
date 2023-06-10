import React from "react";
import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <br />
      <Link href="/firstpage">Home</Link>
      <br />
      <br />
      <Link href="/product1">
        <h3>Product 1</h3>
      </Link>
      <Link href="/product2">
        <h3>Product 2</h3>
      </Link>
      <Link href="/product3">
        <h3>Product 3</h3>
      </Link>
    </div>
  );
}
