import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IProps {
  rows: {}[];
  columns: GridColDef[];
  handleRowClick: any;
}

export default function DataTable(props: IProps) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        onRowClick={props.handleRowClick}
        rows={props.rows}
        columns={props.columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
