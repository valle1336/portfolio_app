import React from "react";

function HomePage() {
  return (
    <>
      <div className="mx-2">
        <h1 className="mt-6">Alex Paulsson</h1>
        <p>Hello my name is Alex</p>

        <ul className="flex font-bold items-center">
          <li className="mx-2">
            <img src="java2.jpg" height={70} width={100} alt="" />
            Java
          </li>
          <li className="mx-2">
            <img src="JS.png" width={50} height={50} alt="" />
            JavaScript
          </li>
          <li className="mx-2">
            <img src="css.png" width={50} height={50} alt="" />
            CSS
          </li>
          <li className="mx-2">
            <img src="html.svg" width={39} height={50} alt="" />
            HTML
          </li>
        </ul>

        <ul className="flex font-bold mt-4 items-center">
          <li className="mx-2">
            <img src="react.png" width={50} height={50} alt="React icon" />
            React
          </li>
          <li className="mx-2">
            <img
              src="tailwind.svg"
              width={50}
              height={50}
              alt="Tailwind Icon"
            />
            TailwindCSS
          </li>
          <li className="mx-2">
            <img src="springboot2.png" width={50} height={50} alt="" />
            Springboot
          </li>
          <li className="mx-2">
            <img src="postgresql.png" width={50} height={50} alt="" />
            Postgresql
          </li>
          <li className="mx-2">
            <img src="mongodb.png" width={50} height={50} alt="" />
            MongoDB
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
