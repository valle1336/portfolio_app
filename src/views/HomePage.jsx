import React, { useState } from "react";

function HomePage() {
  const [extendJava, setExtendJava] = useState(false);
  const [extendJS, setExtendJS] = useState(false);
  const [extendCSS, setExtendCSS] = useState(false);
  const [extendHTML, setExtendHTML] = useState(false);
  const [extendDB, setExtendDB] = useState(false);
  const toggleJava = () => {
    setExtendJava(!extendJava);
  };
  const toggleJS = () => {
    setExtendJS(!extendJS);
  };
  const toggleCSS = () => {
    setExtendCSS(!extendCSS);
  };
  const toggleHTML = () => {
    setExtendHTML(!extendHTML);
  };
  const toggleDB = () => {
    setExtendDB(!extendDB);
  };
  return (
    <>
      <div className="mx-2">
        <h1 className="mt-6">Alex Paulsson</h1>
        <p>Hello my name is Alex</p>

        <ul className="flex font-bold items-center">
          <li className="mx-2">
            <img src="html.svg" width={39} height={50} alt="" />
            HTML
            <br />
            <button onClick={toggleHTML}>+</button>
            {extendHTML ? (
              <div>
                <img src="react.png" width={50} height={50} alt="" />
                <p>React</p>
                <img src="thymeleaf.png" width={50} height={50} alt="" />
                <p>Thymeleaf</p>
              </div>
            ) : (
              <p></p>
            )}
          </li>
          <li className="mx-2">
            <img src="css.png" width={50} height={50} alt="" />
            CSS
            <br />
            <button onClick={toggleCSS}>+</button>
            {extendCSS ? (
              <div>
                <img src="tailwind.svg" width={50} height={50} alt="" />
                <p>TailwindCSS</p>
                <img src="bootstrap.png" width={50} height={50} alt="" />
                <p>Bootstrap</p>
              </div>
            ) : (
              <p></p>
            )}
          </li>
          <li className="mx-2">
            <img src="JS.png" width={50} height={50} alt="" />
            JavaScript
            <br />
            <button onClick={toggleJS}>+</button>
            {extendJS ? (
              <div>
                <img src="ts.jpg" width={50} height={50} alt="" />
                <p>TypeScript</p>
              </div>
            ) : (
              <p></p>
            )}
          </li>
          <li className="mx-2">
            <img src="java2.jpg" height={70} width={100} alt="" />
            Java
            <br />
            <button onClick={toggleJava}>+</button>
            {extendJava ? (
              <div>
                <img src="springboot2.png" width={50} height={50} alt="" />
                <p>Springboot</p>
              </div>
            ) : (
              <p></p>
            )}
          </li>

          <li>
            <img src="database2.webp" width={50} height={50} alt="" />
            SQL/NoSQL
            <br />
            <button onClick={toggleDB}>+</button>
            {extendDB ? (
              <div>
                <img src="postgresql.png" width={50} height={50} alt="Post" />
                <p>PostgreSQL</p>
                <img src="mongodb.png" width={50} height={50} alt="" />
                <p>MongoDB</p>
                <img src="mysql.png" width={50} height={50} alt="" />
                <p>MySQL</p>
              </div>
            ) : (
              <p></p>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
