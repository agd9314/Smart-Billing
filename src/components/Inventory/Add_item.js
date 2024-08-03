import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addItem(newTitle);
    setNewTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Add new item"
        className="border rounded px-4 py-2 w-full text-black"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors duration-200"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
