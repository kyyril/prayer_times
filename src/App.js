import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("jakarta");
  const [data, setData] = useState({});
  const prayerTime = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  useEffect(() => {
    fetch(`https://api.aladhan.com/v1/timingsByAddress?address=${term}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [term]);

  return (
    <div className="h-screen flex flex-col bg-[url('./assets/bg-masjid1.jpg')] text-[#e3e6e3] gap-5 justify-center items-center bg-cover">
      <div className="flex flex-col w-full justify-between items-center gap-3 absolute top-5">
        <div className="w-full flex justify-between px-[70px] text-[#e3e6e3]">
          <div>
            <div>{data.date && data.date.gregorian.weekday.en}</div>
            <div>{data.date && data.date.readable}</div>
          </div>
          <div>{term}</div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTerm(input);
            setInput("");
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="search by city"
            className="w-[250px] py-2 px-4 rounded-full text-[14px] text-slate-600 focus:shadow-lg outline-none"
          ></input>
          <input type="submit" value=""></input>
        </form>
      </div>
      <div>
        <ul className="flex flex-col rounded-xl py-2 w-[200px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          {data &&
            prayerTime.map((p) => {
              return (
                <li className="odd:text-yellow-400 even:text-[#e3e6e3] flex justify-between p-2">
                  <div>{p}</div>
                  <div className="font-bold">{data?.timings?.[p]}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
