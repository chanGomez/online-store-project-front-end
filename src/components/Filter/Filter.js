import React from 'react'
import "./Filter.css"

function Filter() {
  return (
    <div className='filter-section'>
        <h5>Catergory</h5>
        <hr></hr>
        <ul className='list'>
            <li>T-shirt</li>
            <li>Shirt</li>
            <li>Pants</li>
            <li>Shorts</li>
            <li>Accessory </li>
            <li>Pants</li>
            <li>Pants</li>

        </ul>
        <h5>Size</h5>
        <hr></hr>
        <ul className='list'>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
        </ul>

        <h5>Sale</h5>
        <hr></hr>
        <ul className='list'>
            <li>Yes</li>
            <li>No</li>
        </ul>

        <h5>Price</h5>
        <hr></hr>
        <ul className='list'>
            <li>$50 - $100</li>
            <li>$100 - $200</li>
            <li>$200 - $350</li>
        </ul>

    </div>
  )
}

export default Filter