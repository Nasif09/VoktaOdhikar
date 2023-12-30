import React from "react";
import { useState } from "react";
import Profile from "./profile";
import ShowInd from "./allIndustry";
import ShowDis from "./allDistributor";
import Products from "./products";
import Report from "./report";
import RedlistedInd from "./redlisted";
import RedlistedDis from "./redlistedDis";
import { useAuth } from "@/pages/utils/authcontext";
import { useRouter } from "next/router";

export default function Sidebar(props) {
  const [selectedIndex, setIndex] = useState(-1);
  const { user } = useAuth();
  const router = useRouter();
  const fetchPro = async () => {
    if (user == null) {
      router.push("../signin");
    }
  };

  const listselect = (fd, idx) => {
    if (selectedIndex === idx) setIndex(-1);
    else setIndex(idx);
  };
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {selectedIndex === 0 && <ShowInd />}
          {selectedIndex === 1 && <RedlistedInd />}
          {selectedIndex === 2 && <ShowDis />}
          {selectedIndex === 3 && <RedlistedDis />}
          {selectedIndex === 4 && <Report />}
          {selectedIndex === 5 && <Profile />}
          {selectedIndex === 6 && <Products />}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            style={{ height: "91vh" }}
            className="menu p-4 w-80  bg-base-200 text-base-content"
          >
            {/* Sidebar content here */}
            {/* <li>
              <a>Sidebar Item 1</a>
            </li> */}
            {props.items.map((content, index) => (
              <div>
                <li
                  key={index}
                  style={{ fontSize: `${props.textSize}px` }}
                  className={`hover:bg-slate-700 rounded-md ${
                    selectedIndex === index ? "bg-slate-600" : ""
                  }`}
                  onClick={() => listselect(content, index)}
                >
                  <a>{content}</a>
                </li>
                <hr className="my-3" />
              </div>
            ))}
          </ul>
          <div className="border-t flex p-3">
            <div
              className={`
              flex justify-between items-center
               transition-all "w-52 ml-3" 
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{user && user.username}</h4>
                <span className="text-xs text-gray-600">
                  {user && user.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
