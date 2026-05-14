"use client";
import { authClient } from "@/lib/auth-client";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSideBar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, "Google");
  };
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data, "Github");
  };
  return (
    <div>
      <h2 className="font-bold text-xl text-center mb-5">Login With</h2>
      <div className="flex flex-col justify-center mx-auto gap-2 mb-2">
        <button
          className="flex items-center text-blue-400 btn text-center rounded-full p-2 border border-blue-600"
          onClick={handleGoogleSignIn}
        >
          {" "}
          <FaGoogle />
          Login With Google
        </button>
        
        <button
          className="flex items-center text-black btn text-center  rounded-full p-2"
          // onClick={handleGithubSignIn}
        >
          {" "}
          <FaFacebook />
          Login With FaceBook
        </button>
      </div>
      <hr />
      <div>
        <h2 className="font-bold text-xl text-center py-5">Find Us On</h2>
        <div className="space-y-2">
          <span className="flex items-center gap-2 btn rounded-full text-blue-600">
            <FaFacebook />
            <h3 className="text-black">Facebook</h3>
          </span>
          <span className="flex items-center gap-2 btn rounded-full text-blue-600">
            <FaTwitter />
            <h3 className="text-black">Twitter</h3>
          </span>
          <span className="flex items-center gap-2 btn rounded-full text-blue-600">
            <FaInstagram />
            <h3 className="text-black">Instragram</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
