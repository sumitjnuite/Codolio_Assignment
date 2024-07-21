import React, { useState } from "react";

const PopupModal = () => {
  // ------------------------
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // --------------------------
  // Initialize selectedField with 'field1' to ensure one element is always selected
  const [selectedField, setSelectedField] = useState('field1');

  const handleSelectField = (field) => {
    setSelectedField(field);
  };

  const getFieldStyle = (field) => {
    if (selectedField === field) {
      return field === 'field1' ? { backgroundColor: '#ebffce' } : { backgroundColor: '#fee4e3' };
    }
    return {};
  };

  //   ---------------------

  return (
    <div className="">
      {/* Button to open the modal */}
      {/* <button 
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg"
        onClick={toggleModal}
      >
        Open Form
      </button> */}

      <button
        className="grid place-items-center fixed right-8 bottom-8 rounded-full bg-pink-400 w-16 h-16 text-white text-3xl"
        onClick={toggleModal}
      >
        +
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-end">
              <button className="text-gray-600" onClick={toggleModal}>
                &times;
              </button>
            </div>

            <form className="space-y-4">
              <div className="flex">
                <input
                  className="outline-none mb-4 text-xl font-semibold w-[50%] text-center p-2 hover:bg-blue-50"
                  readOnly
                  type="text"
                  placeholder="INCOME"
                  value="INCOME"
                  onClick={() => handleSelectField("field1")}
                  style={getFieldStyle("field1")}
                />
                <input
                  className="outline-none mb-4 text-xl font-semibold w-[50%] text-center p-2 hover:bg-blue-50"
                  readOnly
                  type="text"
                  placeholder="EXPENSE"
                  value="EXPENSE"
                  onClick={() => handleSelectField("field2")}
                  style={getFieldStyle("field2")}
                />
              </div>
              <div className="flex items-center gap-4 ">
                <label
                  className="block text-md font-bold min-w-24"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="w-full p-1 mt-1 bg-slate-100 border border-gray-300 rounded-sm"
                  type="Date"
                  id="date"
                  name="date"
                  required
                />
              </div>

              <div className="flex items-center gap-4 ">
                <label
                  className="block text-md font-bold min-w-24"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="w-full p-1 mt-1 bg-slate-100 border border-gray-300 rounded-sm"
                  type="number"
                  id="amount"
                  name="amount"
                  required
                />
              </div>

              <div className="flex items-center gap-4 ">
                <label
                  className="block text-md font-bold min-w-24"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  className="w-full p-1 mt-1 bg-slate-100 border border-gray-300 rounded-sm"
                  //   type="number"
                  //   id="category"
                  name="category"
                  required
                >
                  <option value="">Category</option>
                  <option value="">Bonus</option>
                  <option value="">Education</option>
                  <option value="">Entertainment</option>
                  <option value="">Food</option>
                  <option value="">Freelance</option>
                  <option value="">Gift</option>
                  <option value="">Healthcare</option>
                  <option value="">Investment</option>
                  <option value="">Rent</option>
                  <option value="">Salary</option>
                  <option value="">Shopping</option>
                  <option value="">Transportation</option>
                  <option value="">Travel</option>
                  <option value="">Utilities</option>
                </select>
              </div>

              <div className="flex items-center gap-4 ">
                <label
                  className="block text-md font-bold min-w-24"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="w-full p-1 mt-1 bg-slate-100 border border-gray-300 rounded-sm"
                  type="text"
                  name="amount"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  className="w-full p-2 mt-1 bg-slate-100 border border-gray-300 rounded-sm"
                  id="notes"
                  name="notes"
                  rows="3"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-1 font-semibold text-white bg-red-700 rounded-sm"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
