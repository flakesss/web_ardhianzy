// src/pages/ShopPage.jsx
import React from "react";
import "./ShopPage.css";

// 1. Impor komponen yang ingin ditampilkan
import ShopTitle from "../components/Shop_page/ShopTitle";
import ShopItem from "../components/Shop_page/ShopItem";

export default function ShopPage() {
  return (
    <main className="shop-page">
      <div className="page-content-wrapper">
        <ShopTitle />
        <ShopItem />
      </div>
    </main>
  );
}
