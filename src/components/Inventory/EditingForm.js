import React, { useState } from "react";

const EditItemForm = ({ item, updateItem, cancelEdit }) => {
  const [editedTitle, setEditedTitle] = useState(item.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateItem(item.id, editedTitle);
  };

  return (
    <form onSubmit={handleUpdate} className="flex items-center space-x-2 text-black ">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors duration-200"
      >
        Save
      </button>
      <button
        type="button"
        onClick={cancelEdit}
        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors duration-200"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditItemForm;
