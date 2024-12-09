const Input = ({setRoomID}) => {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      className="px-3 py-2 border-none bg-transparent rounded-md focus:ring-0 block"
      onChange={(e) => setRoomID(e.target.value)}
    />
  );
};

export default Input;
