import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="border-b-2 border-gray-500">
        <ul className="flex justify-end items-center my-2">
          <li className="font-bold text-2xl flex justify-start">
            Alex Paulsson
          </li>
          <li className="mx-4">
            <a href="">Home</a>
          </li>
          <li className="mx-4">
            <a href="">Github</a>
          </li>
          <li className="mx-4">
            <a href="">CV</a>
          </li>
          <li className="mx-4">
            <a href="">Tech stack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
