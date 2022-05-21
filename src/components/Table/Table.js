import PropTypes from "prop-types";
import React, {useState} from "react";
import styled from "styled-components";
import {Box} from "rebass/styled-components";
import {camelCase} from "change-case";
import TooltipBox from "../TooltipBox";
import Button from "../Button";
import Spinner from "../Spinner";
import Card from "../Card";

const SortableTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;

  &:after {
    content: "";
    flex: none;
    margin: -4px ${(p) => p.theme.space[3]} 0;
    border: 5px solid transparent;
    border-bottom-color: ${(p) => p.theme.colors.secondary};
    opacity: 0.4;
  }

  &:hover:after {
    color: ${(p) => p.theme.colors.secondary};
  }

  &.asc:after,
  &.desc:after {
    opacity: 1;
    color: ${(p) => p.theme.colors.secondary};
  }

  &.desc:after {
    margin-top: 6px;
    border-top-color: ${(p) => p.theme.colors.secondary};
    border-bottom-color: transparent;
  }
`;

const formatCell = (cell, cellKey, fullyVisibleCells, setFullyVisibleCells) => {
  if (React.isValidElement(cell)) {
    return cell;
  }

  if (Array.isArray(cell) || (typeof cell === "object" && cell !== null)) {
    const json = JSON.stringify(cell, null, 2);
    const isFullyVisible = fullyVisibleCells.includes(cellKey);
    const cellSplit = json.split("\n");
    const visibleSplit = cellSplit.slice(0, isFullyVisible ? Infinity : 10);
    const visible = visibleSplit.join("\n");

    return (
      <>
        {(cellSplit.length > visibleSplit.length || isFullyVisible) && (
          <Button
            onClick={() =>
              setFullyVisibleCells(
                isFullyVisible
                  ? fullyVisibleCells.filter((c) => c !== cellKey)
                  : [...fullyVisibleCells, cellKey]
              )
            }
            simple
            sx={{"&:hover": {textDecoration: "underline"}, mb: 4}}
          >
            {isFullyVisible ? "Show less" : "Show all"}
          </Button>
        )}
        <pre>{visible}</pre>
      </>
    );
  }

  return String(cell);
};

const Table = ({
  activeRowIndex,
  cellSx,
  expandLastColumn,
  stickyColumnPosition,
  header,
  headerSx,
  headerCellSx,
  id,
  isLoading,
  keyPrefix,
  limit,
  onRowClick,
  onSortUpdate,
  orderBy,
  paginator,
  renderEmpty,
  rows,
  sortBy,
  stickyColumn,
  tableSx,
  tableWrapperSx,
  width,
}) => {
  const [fullyVisibleCells, setFullyVisibleCells] = useState([]);
  const [rowsFullyVisible, setRowsFullyVisible] = useState(false);

  const fixedSx = {
    bg: "inherit",
    boxShadow: (p) =>
      `${stickyColumnPosition === "left" ? "1px" : "-1px"} 0 0 ${
        p.colors.grays[2]
      }`,
    position: "sticky",
    [stickyColumnPosition]: 0,
    zIndex: 0,
  };

  const tdSx = {
    "&.fixed": fixedSx,
    px: 4,
    py: 2,
    ...cellSx,
  };

  return (
    <Card
      m={0}
      mb={7}
      p={0}
      sx={{
        borderRadius: 4,
        ...tableWrapperSx,
      }}
    >
      <Box sx={{borderRadius: 4, overflowX: "auto", width: "100%"}}>
        {limit !== Infinity && (
          <Button
            onClick={() => setRowsFullyVisible(!rowsFullyVisible)}
            simple
            sx={{"&:hover": {textDecoration: "underline"}, mb: 4}}
          >
            {rowsFullyVisible ? "Show less" : "Show all"}
          </Button>
        )}
        <Box
          as="table"
          id={id}
          sx={{
            borderCollapse: "collapse",
            borderRadius: 4,
            color: "secondary",
            fontSize: "17px",
            lineHeight: "1em",
            width: "100%",
            ...tableSx,
          }}
        >
          {!!rows.length && (
            <thead>
              <Box
                as="tr"
                sx={{
                  bg: "white",
                  borderBottomStyle: "solid",
                  borderColor: "tableBorder",
                  borderWidth: "1px",
                  position: "sticky",
                  ...headerSx,
                }}
              >
                {header.map((item, headerIndex) => (
                  <Box
                    key={keyPrefix + headerIndex}
                    as="th"
                    className={stickyColumn === headerIndex ? "fixed" : null}
                    data-cy={
                      typeof item === "object" && item.label
                        ? camelCase(item.label)
                        : camelCase(item)
                    }
                    sx={{
                      "&.fixed": fixedSx,
                      fontSize: "18px",
                      fontWeight: "medium",
                      p: 4,
                      textAlign: "left",
                      width: width ? `calc(${width[headerIndex]})` : null,
                      ...headerCellSx,
                    }}
                  >
                    {typeof item === "object" && item.value ? (
                      <Box
                        data-cy={camelCase(item.value)}
                        sx={{display: "flex", flexWrap: "noWrap"}}
                      >
                        <TooltipBox
                          id="tooltip"
                          tooltipProps={{
                            sx: {
                              maxHeight: "auto !important",
                              minWidth: "200px",
                            },
                          }}
                        />
                        <Button
                          data-cy={`tableSort_${sortBy}`}
                          onClick={() =>
                            onSortUpdate(
                              item.value,
                              item.value === sortBy && orderBy === "asc"
                                ? "desc"
                                : "asc"
                            )
                          }
                          simple
                          sx={{color: "secondary"}}
                        >
                          <SortableTitle
                            className={item.value === sortBy ? orderBy : ""}
                          >
                            {item.label}
                          </SortableTitle>
                        </Button>
                      </Box>
                    ) : (
                      item
                    )}
                  </Box>
                ))}
              </Box>
            </thead>
          )}
          <tbody>
            {rows.length ? (
              rows
                .slice(0, rowsFullyVisible ? Infinity : limit)
                .map((row, rowIndex) => {
                  const rowIsActive = rowIndex === activeRowIndex;

                  const trSx = {
                    "&:hover": {
                      bg: onRowClick && !rowIsActive ? "accentLight" : null,
                      color: onRowClick && !rowIsActive ? "white" : null,
                    },
                    bg: rowIsActive ? "white" : "tableBg",
                    color: "text.primary",
                    cursor: onRowClick ? "pointer" : "default",
                    py: "0.2rem",
                    transition: "background 0.1s, color 0.1s",
                  };

                  return (
                    <Box
                      key={keyPrefix + rowIndex}
                      as="tr"
                      onClick={() => onRowClick && onRowClick(row, rowIndex)}
                      sx={{
                        "&:nth-child(even)": {
                          "&:hover": trSx["&:hover"],
                          bg: rowIsActive ? "grays.0" : "white",
                          color: trSx.color,
                        },
                        ...trSx,
                      }}
                    >
                      {row.map((cell, cellIndex) => (
                        <Box
                          key={keyPrefix + cellIndex}
                          as="td"
                          className={
                            stickyColumn === cellIndex ? "fixed" : null
                          }
                          colSpan={
                            expandLastColumn && cellIndex === row.length - 1
                              ? header.length - row.length + 1
                              : 1
                          }
                          sx={tdSx}
                        >
                          <Box>
                            {formatCell(
                              cell,
                              keyPrefix + cellIndex,
                              fullyVisibleCells,
                              setFullyVisibleCells
                            )}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  );
                })
            ) : (
              <Box as="tr">
                <Box as="td" colSpan={header.length} sx={tdSx}>
                  {isLoading ? <Spinner /> : renderEmpty}
                </Box>
              </Box>
            )}
          </tbody>
        </Box>
      </Box>
      {paginator}
    </Card>
  );
};

export default Table;
