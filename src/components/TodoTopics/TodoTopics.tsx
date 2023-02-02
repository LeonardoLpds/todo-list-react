import "./TodoTopics.scss"

export default function TodoTopics() {
  return <div className="relative overflow-hidden md:w-3/12">
    <button className="fixed md:hidden border border-gray-300 rounded p-3 hover:text-indigo-500 hover:bg-gray-100">
      <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
    <aside className="hidden md:block md:overflow-y-auto border-r border-gray-300 bg-gray-100 p-3 h-full">
      <nav>
        <h1 className="text-lg font-medium mb-4">Todo's Topics</h1>
        <ul>
          <li className="mb-2">Topic 1</li>
          <li className="mb-2">Topic 2</li>
        </ul>
      </nav>
    </aside>
  </div>
}