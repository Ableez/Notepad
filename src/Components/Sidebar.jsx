import logo from "../assets/vite.svg";
import addNote from "../assets/addNote.svg";
export default function Sidebar(props) {
  const notesTitles = props.notes.map((note, index) => {
    return (
      <button
        onClick={() => props.setCurrNoteId(note.id)}
        className={`text-neutral-800 w-full text-left transition-all duration-200 hover:bg-neutral-300 p-2 mb-1 ${
          note.id === props.currNote.id
            ? "bg-blue-500 dark:hover:bg-blue-700 dark:bg-blue-600 hover:bg-blue-400"
            : "bg-neutral-200 dark:text-neutral-50 dark:hover:bg-neutral-700 dark:bg-opacity-90 dark:bg-transparent"
        } dark:text-neutral-200`}
        key={note.id}
      >
        {note.title}
      </button>
    );
  });
  return (
    <div className="Sidebar bg-sidebarBg dark:bg-neutral-800 ">
      <div className="logo flex text-xl">
        <img src={logo} className="w-7" alt="" />
        <span className="font-extrabold text-neutral-700 dark:text-neutral-50 mx-2">
          Notepad
        </span>
      </div>
      <div className="search--bar my-2 border-b dark:border-neutral-500 border-neutral-300  py-2 w-full">
        <div class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-neutral-500 dark:text-neutral-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 bg-neutral-1 00 text-neutral-300 text-sm rounded-lg block w-full pl-10 p-2.5  focus:outline-none "
              placeholder="Search"
              required
            />
          </div>
          <button
            type="button"
            onClick={props.newNote}
            class="p-2.5 ml-2 text-sm font-medium transition-all duration-300 text-white bg-blue-600 rounded-lg border border-blue-600 hover:border-blue-500 focus:outline-none hover:bg-blue-500"
          >
            {" "}
            <img src={addNote} alt="" />
          </button>
        </div>
      </div>
      <div className="notes--title">{notesTitles}</div>
    </div>
  );
}
