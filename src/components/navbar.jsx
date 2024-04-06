import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="border-b-2 border-gray-500">
        <ul className="flex items-center my-2">
          <li className="flex justify-start font-bold text-2xl ml-2">
            Alex Paulsson
          </li>
          <div className="flex justify-end">
            <li className="mx-4">
              <a href="/">Home</a>
            </li>
            <li className="mx-4">
              <a href="">Github</a>
            </li>
            <li className="mx-4">
              <a href="">CV</a>
            </li>
            <li className="mx-4">
              <a href="/techstack">Tech stack</a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;
