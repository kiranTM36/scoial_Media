import React from 'react'

const Form = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-5">Create Post</h2>

      <form className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows="4"
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  )
}

export default Form