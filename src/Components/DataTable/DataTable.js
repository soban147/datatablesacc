import React from "react";
import { useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { DataTable as DataGrid } from "primereact/datatable";
import { Column } from "primereact/column";

const DataTable = ({ row, columns }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const userBody = (rowData) => {
    const user = rowData.thumbnailUrl;
    return (
      <div className="p-d-flex p-ai-center">
        <img src={user} alt="user" className="p-mr-2" width="32" />
      </div>
    );
  };
  return (
    <div className="datatable-doc-demo">
      <div className="card">
        <DataGrid
          className="p-datatable-customers"
          value={row}
          scrollable
          scrollHeight="415px"
          virtualScrollerOptions={{ itemSize: 46 }}
          onSelectionChange={(e) => setSelectedRow(e.value)}
          selection={selectedRow}
          filterDisplay="menu"
        >
          <Column selectionMode="multiple" style={{ maxWidth: "3em" }}></Column>
          {columns.map((column) => (
            <Column
              key={column.field}
              field={column.field}
              header={column.header}
              filter={column.options.filter}
              filterPlaceholder={column.options.filterPlaceholder}
              align={column.options.align}
              sortable={column.options.sort}
              style={{ maxWidth: column.options.width }}
              body={column.field === "thumbnailUrl" ? userBody : null}
            ></Column>
          ))}
        </DataGrid>
      </div>
    </div>
  );
};

export default DataTable;
