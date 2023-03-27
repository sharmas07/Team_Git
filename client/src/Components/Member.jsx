import React from 'react'
import './MemberCard.css'

function ProductCard() {
  return (
    <div className='product-card'>
      <div className="product-card-left">
        <div className='product-details'>
          <span className='product-detail'>Name: johnDoe</span>
          <span className='product-detail'>D.O.B: 12-12-1990</span>
          <span className='product-detail'>gender: Male</span>
          <span className='product-detail'>relation Description: some in law</span>
          <span className='product-detail'>occupation: software engineer</span>
          <span className='product-detail'>your relation : xxxx</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard