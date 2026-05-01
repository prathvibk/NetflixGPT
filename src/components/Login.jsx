import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);

  const handleAuth = () => {
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("User created:", userCredential.user);
        })
        .catch((error) => {
          console.log("Error:", error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("Signed in:", userCredential.user);
        })
        .catch((error) => {
          console.log("Error:", error.message);
        });
    }
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), #141414",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-80 p-12 rounded-lg w-96 text-white border border-gray-800">
          <h1 className="text-3xl font-bold mb-8">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleAuth}
            className="w-full bg-red-600 py-3 rounded font-bold text-lg hover:bg-red-700"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="mt-6 text-gray-400 cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? "New to Netflix? Sign Up now"
              : "Already registered? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;