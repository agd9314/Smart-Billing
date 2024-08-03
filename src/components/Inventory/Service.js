import React, { useState } from "react";
import AddItemForm from "./Add_item";
import EditItemForm from "./EditingForm";

const initialItems = [
  { id: 1, title: "Laptop", stock: 10 },
  { id: 2, title: "Mobile Phone", stock: 15 },
  { id: 3, title: "Tablet", stock: 7 },
  { id: 4, title: "Smart Watch", stock: 5 },
  { id: 5, title: "Desktop", stock: 8 },
  { id: 6, title: "Headphones", stock: 12 },
  { id: 7, title: "Camera", stock: 6 },
  { id: 8, title: "Printer", stock: 9 },
  { id: 9, title: "Monitor", stock: 14 },
  { id: 10, title: "Keyboard", stock: 20 },
];

const InventoryPage = () => {
  const [items, setItems] = useState(initialItems);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [editingItemId, setEditingItemId] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    if (newItems.length <= indexOfFirstItem && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addItem = (title) => {
    const newItem = { id: items.length + 1, title, stock: 0 };
    setItems([...items, newItem]);
  };

  const updateItem = (id, newTitle) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, title: newTitle } : item
    );
    setItems(updatedItems);
    setEditingItemId(null);
  };

  const incrementStock = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, stock: item.stock + 1 } : item
    );
    setItems(updatedItems);
  };

  const decrementStock = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
    );
    setItems(updatedItems);
  };

  const paginate = (direction) => {
    setCurrentPage(currentPage + direction);
  };

  return (
    <div className="container mx-auto p-4 w-[90rem] ml-[30rem]">
      <h1 className="text-2xl font-bold mb-4 text-center">Inventory Items</h1>
      <div className="mb-12">
        <AddItemForm addItem={addItem} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm text-black">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">
                  {editingItemId === item.id ? (
                    <EditItemForm
                      item={item}
                      updateItem={updateItem}
                      cancelEdit={() => setEditingItemId(null)}
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td className="px-4 py-2 flex items-center">
                  <button
                    onClick={() => decrementStock(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors duration-200 mr-2"
                  >
                    -
                  </button>
                  <span>{item.stock}</span>
                  <button
                    onClick={() => incrementStock(item.id)}
                   className="bg-green-500 text-black px-2 py-1 rounded hover:bg-green-600 transition-colors duration-200 ml-2">
                    +
                  </button>
                </td>
                <td className="px-4 py-2">
                  {editingItemId === item.id ? null : (
                    <>
                      <button
                        onClick={() => setEditingItemId(item.id)}
                        className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition-colors duration-200 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {Math.ceil(items.length / itemsPerPage)}
        </span>
        <button
          onClick={() => paginate(1)}
          disabled={indexOfLastItem >= items.length}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            indexOfLastItem >= items.length ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryPage;
