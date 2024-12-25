import { useState } from "react";
import { ShortWeapon, useListStore } from "../State/useListStore";
import CardsList from "../CardsList/CardsList";
import { Input, InputGroup } from "rsuite";

function SearchBar() {
  const getWeapons = useListStore(state => state.getWeapons);
  const [delay, setDelay] = useState(0);
  const [searchRes, setSearchRes] = useState<ShortWeapon[]>([]);

  const handleSearch = (value: string) => {

    if (delay)
      clearTimeout(delay);

    setDelay(setTimeout(() => {
      const ans = getWeapons(value);
      if (value !== '') {
        setSearchRes(ans);
      }
      else
        setSearchRes([]);
    }, 350))
  }
  return (
    <div >
      <InputGroup>
        <Input type="text" size="lg" placeholder="Search" onChange={(v) => handleSearch(v)} />
        <InputGroup.Addon>🔍</InputGroup.Addon>
      </InputGroup>
      <CardsList listWeapon={searchRes} />
    </div>
  )
}
export default SearchBar