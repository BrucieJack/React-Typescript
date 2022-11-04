import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";
import {
  getCharacterById,
  getCharacters,
} from "../../store/actions/characters";
import { getEpisodeById, getEpisodes } from "../../store/actions/episodes";
import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import React from "react";
import Modal from "../../components/Modal";
import { Button } from "@mui/material";
import { character, episode } from "../../configs/modal";
import { RickAndMortyType } from "../../types/RickAndMorty";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

export const RickAndMorty = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState("Episodes");
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const data: RickAndMortyType = useSelector((state: RickAndMortyType) => {
    return state;
  });

  React.useEffect(() => {
    dispatch(getCharacters(1));
    dispatch(getEpisodes(1));
  }, [dispatch]);

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    if (category === "Episodes") {
      dispatch(getEpisodeById(params.row.id));
    } else {
      dispatch(getCharacterById(params.row.id));
    }
    setOpen(true);
  };

  const handleCategory = () => {
    if (category === "Episodes") {
      setCategory("Characters");
    } else {
      setCategory("Episodes");
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleCategory}>
        {category}
      </Button>
      <Table
        rows={category === "Episodes" ? data.episodes : data.characters}
        columns={columns}
        handleRowClick={handleRowClick}
      />
      <Modal
        open={open}
        handleClose={handleClose}
        data={category === "Episodes" ? data.episode : data.character}
        config={category === "Episodes" ? episode : character}
      />
    </div>
  );
};
