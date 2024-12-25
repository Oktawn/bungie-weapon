import { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar"
import { useListStore } from "../components/State/useListStore";


function Main() {
  const { listWeapons, setList } = useListStore();

  useEffect(() => {
    if (listWeapons.length === 0) {
      setList();
    }

  }, [listWeapons])
  return (
    <div>
      <SearchBar />
    </div>
  )
}

export default Main