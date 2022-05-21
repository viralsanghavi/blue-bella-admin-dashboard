import PropTypes from "prop-types";
import React, {useContext, useEffect} from "react";
import ReactTooltip from "react-tooltip";
import {Box} from "rebass";
import {ThemeContext} from "styled-components";

const TooltipBox = (props) => {
  useEffect(() => {
    const rebuilder = () => ReactTooltip.rebuild();
    return () => rebuilder();
  }, []);

  const themeContext = useContext(ThemeContext);

  const {
    id,
    tooltipProps: {sx: tooltipSx, ...tooltipProps},
  } = props;

  return (
    <Box
      arrowColor="white"
      as={ReactTooltip}
      id={id}
      sx={{
        "::before": {
          borderTop: (p) =>
            `8px solid ${themeContext.colors.secondary}!important`,
        },
        bg: (p) => `${themeContext.colors.white}!important`,
        borderColor: (p) => `${themeContext.colors.secondary}!important`,
        borderRadius: (p) => `${themeContext.radii[2]}!important`,
        boxShadow: 1,
        color: (p) => `${themeContext.colors.secondary}!important`,
        maxHeight: "10rem",
        maxWidth: "50ch",
        opacity: "1!important",
        p: 4,
        ...(tooltipSx || {}),
      }}
      {...tooltipProps}
    />
  );
};

TooltipBox.propTypes = {
  id: PropTypes.string.isRequired,
  tooltipProps: PropTypes.shape({sx: PropTypes.shape({})}),
};

TooltipBox.defaultProps = {
  tooltipProps: {},
};

export default TooltipBox;
