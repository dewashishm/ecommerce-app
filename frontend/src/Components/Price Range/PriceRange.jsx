function PriceRange() {
  return (
    <div className="filter-section">
      <h3 className="filter-section-title">Price Range</h3>
      <input className="sub-section" type="range" min="0" max="10000" />
    </div>
  );
}

export default PriceRange;