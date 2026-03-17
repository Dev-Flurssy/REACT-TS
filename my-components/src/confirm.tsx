interface Iprops {
  open: boolean;
  title: string;
  content: string;
  confirmOption: string;
  cancelOption: string;
  confirmSms: string;
  isVisible: boolean;
  confirmTimer: number;
  handleOkClick: () => void;
  handleCancelClick: () => void;
}

const Confirm: React.FC<Iprops> = ({
  open,
  title,
  content,
  confirmOption,
  cancelOption,
  confirmSms,
  isVisible,
  confirmTimer,
  handleCancelClick,
  handleOkClick,
}) => {
  return (
    <div
      className={open ? "confirm-wrapper confirm-visible" : "confirm-wrapper "}
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{content}</p>
        </div>
        <div className="confirm-button-container">
          <p>{confirmSms}</p>
        </div>
        <button className="confirm-ok" onClick={handleOkClick}>
          {confirmOption}
        </button>
        <button className="confirm-cancel" onClick={handleCancelClick}>
          {cancelOption}
        </button>
      </div>
    </div>
  );
};

export default Confirm;
