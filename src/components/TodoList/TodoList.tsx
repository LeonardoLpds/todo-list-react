import Fab from "../Fab/Fab"
import "./TodoList.scss"

export default function TodoList() {
  return <div className="w-full mt-12 md:mt-0">
    <Fab />

    <ul className="list-reset">
      <li className="hover:bg-gray-200 py-3 pl-6 pr-4 flex items-center">
        <input className="cursor-pointer form-checkbox h-5 w-5" type="checkbox" />
          <span className="ml-2 text-gray-700">Item 1</span>
      </li>
      <li className="hover:bg-gray-200 py-3 pl-6 pr-4 flex items-center">
        <input className="cursor-pointer form-checkbox h-5 w-5" type="checkbox" />
          <span className="ml-2 text-gray-700">Item 2</span>
      </li>
      <li className="hover:bg-gray-200 py-3 pl-6 pr-4 flex items-center">
        <input className="cursor-pointer form-checkbox h-5 w-5" type="checkbox" />
          <span className="ml-2 text-gray-700">Item 3</span>
      </li>
    </ul>
  </div>
}