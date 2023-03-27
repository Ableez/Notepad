export default function TextArea(props) {
  return (
    <textarea
      id="editor"
      onChange={() => props.updateNoteEd}
      value={props.currNoteEd.body}
      class="block w-full resize-none text-neutral-800 dark:text-neutral-100 h-full px-0 text-sm bg-transparent border-0  focus:ring-0  dark:placeholder-gray-400"
      placeholder="Write a note..."
    ></textarea>
  );
}
