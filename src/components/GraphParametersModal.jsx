const GraphParametersModal = ({ onCancel, onAdd }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
          <h2 className="text-center text-xl font-semibold mb-6">
            Fill Graph Parameters
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Parameter 1 Name"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Parameter 1 Unit"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Parameter 2 Name"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Parameter 2 Unit"
              className="p-3 border rounded-md w-full"
            />
          </div>
  
          <div className="flex justify-between">
            <button
              className="py-2 px-6 bg-gray-200 text-gray-700 rounded-md"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="py-2 px-6 bg-gray-500 text-white rounded-md"
              onClick={onAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default GraphParametersModal;