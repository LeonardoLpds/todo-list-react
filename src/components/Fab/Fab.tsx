import "./Fab.scss"

export default function Fab() {
  return <button className="fixed bottom-0 right-0 mb-12 mr-12 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-3 rounded-full shadow-lg">
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
    </svg>
  </button>
}