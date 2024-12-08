const Input = ({setRoomID}) => {
  return (
    <input
      type="text"
      placeholder="Enter Room ID "
      className="px-3 py-2 border-none bg-transparent rounded-md  block"
      onChange={(e) => setRoomID(e.target.value)}
    />
  );
};

export default Input;
