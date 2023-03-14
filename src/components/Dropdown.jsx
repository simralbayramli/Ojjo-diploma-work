import React from 'react'

const Dropdown = () => {
  return (
    <>
   <div className="dropdown">
    <div className="btn-group ">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
  Brand
  </button>
  <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
    <li><a className="dropdown-item" href="#">Menu item </a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
  Price
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  For whom
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
  Collection
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  Season
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
  Event
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
    <li><a className="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
</div>
    </>
  )
}

export default Dropdown