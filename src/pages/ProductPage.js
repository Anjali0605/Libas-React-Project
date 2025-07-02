import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productsData from "../data/products";

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    // Shuffle the products on load
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    setShuffledProducts(shuffled);
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  // ✅ Filtering logic that respects both category buttons and search input
  const filteredProducts = shuffledProducts.filter((product) => {
    const matchesCategoryButton =
      selectedCategory === "All" ||
      product.name.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      product.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      searchQuery.trim() === "" ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategoryButton && matchesSearch;
  });

  const categories = [
    "All",
    "Kurti",
    "Suit",
    "Cut kurti",
    
    "Frock",
    
  ];

  return (
    <>
      <Header />
      <div className="product-page">
        {/* <h1 className="product-title">Our Products</h1> */}

        {/* Search & Filter */}
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={
                  selectedCategory === category
                    ? "category-button active"
                    : "category-button"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product List */}
        <ProductList products={filteredProducts} />
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
