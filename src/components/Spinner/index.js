import React, {useContext} from "react";
import {BarLoader} from "react-spinners";
import {Box} from "rebass";
import {ThemeContext} from "styled-components";

const Spinner = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <Box display="flex" justifyContent="center" py={7} width="100%" {...props}>
      <BarLoader color={theme.colors.text.primary} />
    </Box>
  );
};

export default Spinner;
