const styles = (theme) => ({
  listWrapper: {
    position: "relative",
  },
  listItem: {
    cursor: "pointer",
    fontFamily: "inherit !important",
    color: "#333",
    paddingBottom: "20px",
  },
  textSection: {
    maxWidth: "85%",
  },
  deleteIcon: {
    position: "absolute",
    right: "5px",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "red",
    },
  },
  small: {
    fontSize: "13px",
    fontStyle: "italic",
    color: "#aaa",
    width: "85%",
    padding: "0 5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "4px",
    left: "10px",
  },
});

export default styles;
