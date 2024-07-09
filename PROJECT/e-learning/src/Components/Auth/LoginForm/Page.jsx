import React, { useState } from "react";
import { assets } from "../../../utils/assets";
import "./Page.css";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const Page = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAllCoursesClick = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const handleClick = () => {
    navigate("/react");
  };
  console.log(assets, "console me this.");

  return (
    <>
      <div className="container">
        <nav className="home-nav">
          <img src={assets?.LOGO} alt="Logo" className="intro-logo" />
          <div className="button-container">
            <button className="coursesButton" onClick={handleAllCoursesClick}>
              All Courses
            </button>
            <button className="coursesButton" onClick={() => {}}>
              My Courses
            </button>
          </div>
        </nav>
      </div>

      <div>
        <br />
        <h1 className="quote">
          "Empowering learners with the tools to master full stack development,
          one course at a time."
        </h1>
      </div>
      <div className="person"></div>

      <Dialog
        className="custom-dialog"
        open={isDialogOpen}
        onClose={closeDialog}
        sx={{ width: "100vw !important" }}
        PaperProps={{ className: "paperPropClass" }}
      >
        <DialogTitle className="custom-title">
          All Courses Available{" "}
        </DialogTitle>
        <DialogContent>
          <div className="custom-window1 a">
            {
              <p>
                <button onClick={() => handleClick()}></button>
              </p>
            }
          </div>
          <div className="custom-window1 b">
            {
              <p>
                <button onClick={() => handleClick()}></button>
              </p>
            }
          </div>
          <div className="custom-window1 c">
            {
              <p>
                <button onClick={() => handleClick()}></button>
              </p>
            }
          </div>
          <div className="custom-window1 d">
            {
              <p>
                <button onClick={() => handleClick}></button>
              </p>
            }
          </div>

          {/* <p>React, HTML CSS, JS, Git</p> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Page;
