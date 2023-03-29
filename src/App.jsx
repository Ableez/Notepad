import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Components/Editor";
import Sidebar from "./Components/Sidebar";
import "flowbite-react";
import "flowbite";
import logo from "./assets/logo-note.svg";
import { Link } from "react-router-dom";
export default function App(props) {
  return (
    <div>
      {/* <div
        id="cursor"
        className="cursor p-2 absolute z-50 rounded-full bg-indigo-600 bg-blend-exclusion w-2 h-2"
      ></div> */}
      <section class=" grid place-items-center align-middle  h-screen ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl h-fit text-center lg:py-16 lg:px-12">
          <div className="logo w-1/6 cursor-default mx-auto p-8 flex align-middle justify-center grid-cols-2">
            <img src={logo} className="w-14 px-2" alt="" />
            <span className="font-extrabold px-0 text-neutral-700 text-2xl">
              Notepad
            </span>
          </div>
          <a
            href="#"
            style={{ transform: "scale(0.7)" }}
            class="getstarted transform inline-flex justify-between transition-all duration-300 items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span class="text-xs bg-primary-600 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span class="text-sm font-medium capitalize">
              Advanced Note Editor, see Whats New!
            </span>
            <svg
              class="ml-2 w-5 h-5 arr "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Revolutionizing Note-Taking
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Experience seamless and efficient note-taking like never before with
            our cutting-edge web application note editor.
          </p>
          <div class="flex flex-col mb-8 w-1/5 mx-auto lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={"login"} >
            <a
              href="#"
              class="inline-flex getstarted justify-center w-full transition-color duration-100 border border-blue-500 items-center py-3 px-5 bg-blue-500 hover:bg-blue-400 hover:border-blue-500 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Start Editing
              <svg
                class="ml-2 -mr-1 w-5 h-5 arr"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}
