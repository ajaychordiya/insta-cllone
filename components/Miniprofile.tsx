function Miniprofile() {
  return (
    <div className="flex justify-between items-center ml-10 mt-14">
      <img src="/insta.png" className="w-16 h-16 rounded-full border p-[2px]" />
      <div>
        <h2 className="font-bold">ajay</h2>
        <h3 className="text-sm text-gray-600">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400">Sign out</button>
    </div>
  );
}

export default Miniprofile;
