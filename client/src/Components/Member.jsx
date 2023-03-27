import React from 'react'
import './MemberCard.css'

function ProductCard() {
  return (
    <div className='product-card'>
      <div className="product-card-left">
        <div className='product-details'>
          <span className='product-detail'>Product Name: MacBook</span>
          <span className='product-detail'>Bid Creator: Sharmas</span>
          <span className='product-detail'>Bid Started With: $100</span>
        </div>
      </div>
      <div className="product-card-right">
        <div className='product-right-content'> 
          <span className="current-price">Current Price: $200</span>
          <span className="current-price">Last Bidder: sharmas </span>
          <span className="bid-btn">MAKE YOUR BID</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard