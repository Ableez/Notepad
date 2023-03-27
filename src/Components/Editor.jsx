import saveIcon from "../assets/Save.svg";
import { Popover } from "flowbite";
import React, { useRef, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
import TextArea from "./TextArea";

export default function Editor(props) {
  const targetRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const targetEl = targetRef.current;
    const triggerEl = triggerRef.current;

    const options = {
      placement: "top",
      triggerType: "hover",
      offset: 10,
      onHide: () => {
        console.log("popover is shown");
      },
      onShow: () => {
        console.log("popover is hidden");
      },
      onToggle: () => {
        console.log("popover is toggled");
      },
    };

    if (targetEl) {
      const popover = new Popover(targetEl, triggerEl, options);

      popover.show();
    }
  }, []);

  return (
    <div className="Editor bg-editorBg dark:bg-darkEditorBg">
      <form className=" h-screen">
        <div class="w-full h-full mb-4 rounded-lg bg-transparent dark:bg-neutral-700 ">
          <div class="flex items-center sticky justify-between px-3 py-2 bg-neutral-100 dark:bg-neutral-800">
            <div class="flex flex-wrap items-center divide-gray-500 sm:divide-x dark:divide-gray-600">
              <div class="flex items-center space-x-1 sm:pr-4">
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Attach file</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Embed map</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Format code</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Add emoji</span>
                </button>
              </div>
              <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Add list</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Settings</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Timeline</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-neutral-400 rounded cursor-pointer hover:text-neutral-400 selection:bg-neutral-400 hover:bg-purple-100 duration-300 transition-all dark:text-gray-400 dark:hover:text-neutral-400 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Download</span>
                </button>
              </div>
            </div>
            <Switch
              checked={props.dark}
              id="theme-toggle"
              onChange={props.changeTheme}
              className={`${
                props.dark ? "bg-neutral-600" : "bg-neutral-300"
              } relative inline-flex h-6 w-11 items-center rounded-full text-neutral-400 cursor-pointer sm:ml-auto mr-2`}
            >
              <span className="sr-only">Enable Darkmode</span>
              <span
                className={`${
                  props.dark ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full transition`}
              >
                {props.dark ? (
                  <img src={dark} alt="" />
                ) : (
                  <img src={light} alt="" />
                )}
              </span>
            </Switch>
            <div
              id="tooltip-fullscreen"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Show full screen
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              data-popover-target="popover-user-profile"
              type="button"
              class="userName flex align-middle py-2 px-3 cursor-pointer hover:bg-neutral-300 bg-neutral-200 dark:hover:bg-neutral-500 dark:bg-neutral-600 dark:text-neutral-50 rounded-full justify-center text-neutral-800 "
            >
              <p>Hey, Ableez</p>
              <img
                className="w-6 ml-2 rounded-full"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </button>
            <div
              data-popover
              id="popover-user-profile"
              role="tooltip"
              class="absolute z-10 invisible inline-block text-sm text-neutral-400 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
            >
              <div class="p-1">
                <div class="items-center justify-between mb-2">
                  <a href="#">
                    <img
                      class="w-30 h-30 rounded-lg"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EAD0QAAEDAgIECggDCQAAAAAAAAEAAgMEEQUSBiExQRMUFVFhcZGSoeEHIjJCUlSBsXLB0RYzNFNiY4Li8P/EABsBAQACAwEBAAAAAAAAAAAAAAABBgMEBQIH/8QAMxEAAQMBBAgFAwQDAAAAAAAAAAECAxEEBRIhBhMWMVFToeEiQWGRsXHR8RUjMlIUgcH/2gAMAwEAAhEDEQA/AOhr5Sd0IAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDQY/pdheCOMU0hmqBthi1kdZ2D79C6ljum0WlMW5vFTG6RGkSqPSfOXni1DTsbfVwjnOPhZdhmj0SJ4nqvQwrOpWl9J0+YCooad7d+R7mHxuj9HolTwPVFJSdfMl+A6VYZjZEUL3Q1JF+Al1E9R2H79C4tsuueypiXNvFDK2RHG8XNMgQBAEAQBAEAQBAEAQER9IWkr8DoI6ajdlraoHK/+WwbXdeuw+vMu3c13paZFkkTwt6qYZX4cjjz3Oe4ue4ucdpJuSrmahRCAgLtPUSQSNex7gWkEFpsQecHcVCoipRSUWh2zQvHDjmDiSZwNTCeDlI97Vqd9R4gqjXrYkss1G/xXNPsbsb8SG/XLMgQBAEAQBAEAQBAEBxb0k1PGNL6pt/4dkcQ7ub7uKvVzR4LE31qvWn/DRlWr1Iwxkk00dPTsMk8rgyNjdpJXUMZvcT0F0hwuMy8CyqjaLkU7i5w/xIBP0usbZWKtD26J7cyPxvDx0jaFkPB7QE+9EdSW4lW019UkAdb8Lv8AYqv6QsrA1/Bfn8GxAudDqV1UTaCAIAgCAIAgCAIAgOCacyS/tTjErYnljanIXhpIvlFhfnsNi+g3alLHF9DnyL41OmaE6HUmAxNqpgJ8TcLPmOyPnazm69p8FMsquy8jZjiRufmStzQ5tiLhYTKQvTDQenxZzqyic2mrzrMgb6svQ/p/q+6zxzK3JdxhkiR2bd5zHEcMr8KkMeI0kkBBtnIux3U7YVtI5HJVDXVqotFJT6KWv/aVz8jsnF3jNY2vduq/YuPf1P8AD/2hkg/kddVKNwIAgCAIAgCAIAgBQEc04ws4ho/JTwMAeKiKazRbMQ8F31tdXW65U1DF9KGGVlW5G6pTdh61nMpeQgIDFrqUzUdRHESHvic1vWQQFLclQh25TH0Xo+IaPYbSZcpjp2Zm2t6xFzfpuStG+Ht1D6+akRpRqG2tqVQMhRAEAQBAEAQBAV1IChQFisZmp5Lbhddm67bq11LkyXcQY1HIGtFzq2KyAzVBAQBAe2jeqveVtSdyMamSfJJVcskogCAIAgCAIAgCAFAFKKqLVAauaF1K8lovEfBWyw25tpbR38vn1QgvQz6tRzN5lvgvcYZvBQHuNzpCCBZvOd65l4W5IGqxq+JegLyqxIQFEAQBAEAQBAEABQAoCzU1VPSMz1M8cTed7gFsQWWe0LhhYrvolTDLPFElZHIn1L+j1RhmOx1kME5e9gANgWkA31i+1Wq77gdE1XWttFWlM93sc/8AUY5nfsrWm81WJ4NiOFyXBE9NumA9n8QGxdKWBWZ+RvRWhsmW5TLwrBa2us+Z7oYD7xGt3UEis6vzXceZbQ1mSZqZWOVOHYVVQUz5wx7475Tu17Sd1/yXGvHR+Zf3LI2qeeedeOe81G3nDG7BM6iqeI5Y5WB8T2vafeabhViSJ8TsMiUX1y+TpRyMkbiYtU9D3uWM9lEAQBAEAQBALIDGxGsiw+kfU1BORltQ1kk7AFt2KxyWydIY96mvabQyzxrI/chDcQ0qrqkltLamj3Zdb+39FfLFozY4KOl8bvXd7fcqlpvu0S1SPwp19zV8C6R5kqHukedpc657VYmRtjTC1ERPQ475HPXE5aqbHCMQnweujq6MDMzU5m6Ru9p/7bZHsR6UU9QTuhkR6E4xjTij5GbJhUrX10/qtieNcPOXjo8TbctRkCq6jtx2prxjSLFGua9DKo9M8PdgAr6uRrKlvqPpmn1nSDc0cx233DavKwux4UMjLfGsOscufD1Od4jWz4lWzVdUQZZXXIGxo3AdAC3mNRqUQr8srpXq93mW4J5qZ+eCV8budpssc9nhtDcMrUcnqTFNJCuKNyopu6HSaZhDK2MSN+Ngs7s2HwVYtuikL/FZXYV4Lmn3Tqdyy3/K3KdKpxTJft8Ekp54qmFk0Ds0bxcFUe02eSzSrFKlHIWiCZk8aSMWqKXVgMwQBAEAQC6Ai+nc+WlpqcH23l5HQB5q4aIw1lll4Iie/wCCu6QyUjZHxWvsRCAXlaOlXsqqmepPAQFLAEm2s70BTI3PnsM3OhJ6QgIAhJKtEZi+kmhJ/dvuOo+YKoOl0OG0Ry/2Snt+S2aPSqsLo+C/JvlUSxBAEAQBAEBBdNpuExaOIbI4R2kk/ovomikWGxK/+zl6UT7lOv6TFakbwT5NNSC8hPMFZziKZak8BAEAQBAEAQG+0Qfasnjv7UYd2HzVS0vjrZo38HU907Fg0dfSd7eKV9l7kqVALeEAQBAEBZnkkZ7DL9KyMRF3qemtRd5GMSwPj9dLVSVRY6Qi7eD2WAHP0K12DSD/AA7M2BsdaedfWvA41ruFtpmdLrKV8qehah0cbFe1UTf+35rb2rXldexrLow3m9O5c5BHzJ7nmp2rXldexGy7eb07jkEfMnueabVryuvYbLt5vTuOQR8ye55ptWvK69hsu3m9O45BHzJ7nmm1a8rr2Gy7eb07jkEfMnueabVryuvYbLt5vTuOQR8ye55ptWvK69hsu3m9O45BHzJ7nmm1a8rr2Gy7eb07mXhmHGgquGjmL3ZC22Tcbfouded9/qEGpdHTNFrXsbtguNtjm1usrlTcb6F73i72ZfzVYciJuOs5ETcXV4PIQBAEAQFCAdoBU1UHkxRn3G9inGvEnEvE8mCI+4O1TjdxJxu4lOLRfD4lTrHDG4cWi+E9pTWOJ1jhxaL4T2lNY4axw4tF8PiU1jiMbuJUQRfAFGN3EY3cT0Iox7jexRicRiXiegANgAUVUgqoAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB//9k="
                      alt="Jese Leos"
                    />
                  </a>
                </div>
                <p class=" text-sm font-normal">
                  <a href="#" class="hover:underline">
                    jeseleos
                  </a>
                </p>
              </div>
              <div className="p-2 align-middle justify-center flex">
                <button
                  type="button"
                  class="text-white w-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs   px-3 py-2 dark:bg-red-400 dark:hover:bg-red-500 focus:outline-none dark:focus:ring-red-600"
                >
                  Logout
                </button>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
          <div class="pl-4 bg-transparent h-4/5 border-b border-neutral-200 dark:border-neutral-500 ">
            <TextArea
              updateNoteEd={props.updateNote}
              currNoteEd={props.currNote}
            />
          </div>
          <div className="btn p-2 flex align-middle justify-end ">
            <button className="flex align-middle pl-4 justify-center p-2 bg-blue-600 rounded-xl">
              Save Note
              <img className="mx-2" src={saveIcon} alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
