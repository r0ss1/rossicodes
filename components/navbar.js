import React from 'react'

function navbar() {
  return (
    <div className="w-11/12 mt-4 mx-auto px-6 sm:px-12 py-6 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-base md:text-lg font-bold mt-4 sm:mt-0">
            <a className="p-2 hover:bg-yellow-300" to="#">
                📈 Dashboard
            </a>
            <a className="p-2 hover:bg-yellow-300" to="#">
                👷 Projects
            </a>
            <a className="p-2 hover:bg-yellow-300" to="#">
                🔖 Bookmarks
            </a>
            <a className="p-2 hover:bg-yellow-300" to="#">
                🧑‍💻 Snippets
            </a>
        </div>
    </div>
  )
}

export default navbar