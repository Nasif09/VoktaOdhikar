import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/pages/utils/authcontext";
import axios from "axios";
import { useEffect } from "react";


export default function UserNavbar() {
  const router = useRouter();
  const { logout, user} = useAuth();

  // useEffect(() => {
  //   fetchPro();
  //   // Run the fetchPro function when the component mounts
  // }, []);

  const home = () => {
    // Add your sign-in logic here
    router.push("/");
  };
  const signout = () => {
    logout();
  };

  return (
    <>
      <div className="navbar bg-white flex items-center justify-between relative">
        <div className="flex-1 px-3">
          <a className="text-green-950 text-xl" onClick={home}>
            Voktar Odhikar
          </a>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={signout}>
            Logout
          </a>
        </div>
      </div>
    </>
  );
}
