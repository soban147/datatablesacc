import DataTable from "./Components/DataTable/DataTable";
import { useEffect, useState } from "react";
function App() {
  const [row, setRow] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setRow(json));
  }, []);

  const columns = [
    {
      field: "id",
      header: "id",
      options: { sort: true, display: true, width: "5rem", align: "right" },
    },
    {
      field: "thumbnailUrl",
      header: "thumbnailUrl",
      options: { sort: true, display: true, width: "10rem" },
    },
    {
      field: "title",
      header: "title",
      options: {
        filter: true,
        sort: true,
        display: true,
        filterPlaceholder: "Search by title",
      },
    },
  ];

  return <DataTable row={row} columns={columns} />;
}

export default App;
