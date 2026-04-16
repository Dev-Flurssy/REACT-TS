import type React from "react";
import { useState } from "react";
import "./Confirm.css";

interface ConfirmProps {
  title: string;
  content: string;
  open: boolean;
  okCaption: string;
  cancelCaption: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Confirm: React.FC<ConfirmProps> = (props) => {
  const [click, setClick] = useState(0);
  const handleConfirm = () => {
    props.onConfirm();
  };

  const handleCancelClick = () => {
    const newClick = click + 1;
    setClick(newClick);
    if (newClick >= 2) {
      props.onCancel();
    }
  };
  /*const handleCancel = () => {
    props.onCancel();
  }; */
  return (
    <div
      className={
        props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"
      }
    >
      <div className="confirm-container">
        <div className="confirm-title">
          {" "}
          <span>{props.title}</span>
        </div>
        <div className="confirm-content">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons">
          <button className="confirm-cancel" onClick={handleCancelClick}>
            {click === 0 ? props.cancelCaption : "Are you sure?"}
          </button>
          <button className="confirm-ok" onClick={handleConfirm}>
            {props.okCaption}
          </button>
        </div>
      </div>
    </div>
  );
};
