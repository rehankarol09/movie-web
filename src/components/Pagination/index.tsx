import { Button, Stack } from "@mui/material";
import React, { FC } from "react";

interface IProps {
  handleNextButton: () => void;
  handlePrevButtonClick: () => void;
  currentPage: number;
  totalPages:number
}

export const Pagination: FC<IProps> = ({
  handleNextButton,
  handlePrevButtonClick,
  currentPage,
  totalPages
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ justifyContent: "flex-end", marginTop: "20px" }}
    >
      {currentPage != 1 && (
        <Button variant="contained" onClick={handlePrevButtonClick}>
          Prev
        </Button>
      )}

      {currentPage != totalPages &&
      <Button variant="contained" onClick={handleNextButton}>
      Next
    </Button>
      }
      
    </Stack>
  );
};
