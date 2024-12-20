import { ChangeEvent, useState } from "react";
import { ShortWeapon, useListStore } from "../State/useListStore";
import { Link } from "react-router-dom";

function SearchBar() {
  const getWeapons = useListStore(state => state.getWeapons);
  const [delay, setDelay] = useState(0);
  const [searchRes, setSearchRes] = useState<ShortWeapon[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (delay)
      clearTimeout(delay);

    setDelay(setTimeout(() => {
      const ans = getWeapons(value);
      if (value !== '') {
        console.log(value);
        setSearchRes(ans);
      }
      else
        setSearchRes([]);
    }, 300))
  }
  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      {
        searchRes.length > 0 &&
        <ul>
          {
            searchRes.map(item => (
              <Link to={`/weapon/${item.id}`} key={item.id} >
                <li key={item.id} className="result-item">
                  <div className="icon-container">
                    <img src={"https://www.bungie.net" + item.icon} className="icon" />
                    <img src={"https://www.bungie.net" + item.watermark} className="watermark" />
                    {item.name}
                  </div>
                </li>
              </Link>
            ))
          }
        </ul>
      }
    </div>
  )
}
export default SearchBar