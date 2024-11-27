import React from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import css from "./index.module.css";

const AccardionComponent = () => {
  return (
    <Accordion className={css.accardion}>
      <AccordionSummary expandIcon={<FaChevronDown />}>
        <Typography variant="h6">
          What is included in the price of the tours your offer?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="span">
          The price of all our tour always included, travel around the country,
          a tourist guide, breakfast and dinner at the hotel, visits to all
          historical monuments.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccardionComponent;
