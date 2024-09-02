import "./App.css";

function App() {
  const [input, setInput] = {};
  return (
    <div className="h-screen flex flex-col bg-[url('./assets/bg-masjid1.jpg')] text-[#e3e6e3] gap-5 justify-center items-center bg-cover">
      <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
        <div className="w-full flex justify-between px-[70px] text-[#e3e6e3]">
          <div>
            <div>wednesday</div>
            <div>21 jan, yyyy</div>
          </div>
          <div>Jakarta</div>
        </div>
        <form>
          <input
            type="text"
            placeholder="search by city"
            className="w-[250px] py-2 px-4 rounded-full text-[14px] text-slate-600 focus:shadow-lg outline-none"
          ></input>
          <input type="submit" value=""></input>
        </form>
      </div>
      <div>
        <ul className="flex flex-col rounded-xl py-2 w-[200px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <li className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2">
            <div>Fajr</div>
            <div className="font-bold">5.00</div>
          </li>
          <li className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2">
            <div>Fajr</div>
            <div className="font-bold">5.00</div>
          </li>
          <li className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2">
            <div>Fajr</div>
            <div className="font-bold">5.00</div>
          </li>
          <li className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2">
            <div>Fajr</div>
            <div className="font-bold">5.00</div>
          </li>
          <li className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2">
            <div>Fajr</div>
            <div className="font-bold">5.00</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
