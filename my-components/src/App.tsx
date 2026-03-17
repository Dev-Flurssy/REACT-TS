import React, { useState, useEffect } from "react";
import Confirm from "./confirm";
import "./confirm.css";
import logo from "./logo.svg";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [confirmSms, setConfirmSms] = useState("Please hit the confirm Button");
  const [isVisible, setConfirmVisible] = useState(true);
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    // runs once when component mounts
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup when unmounting
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      setConfirmSms("Too late to confirm!");
      setConfirmVisible(false);
      setIsOpen(false);
    } else {
      setConfirmSms(`Please hit the confirm button ${countDown} secs to go`);
    }
  }, [countDown]);

  const handleOkConfirmClick = () => {
    setConfirmSms("Cool Carry On");
    setIsOpen(false);
  };

  const handleCancelConfirmClick = () => {
    setConfirmSms("Alright Let's Stop");
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Confirm
        open={isOpen}
        title="Confirmation"
        content="Will you like to Continue"
        confirmOption="Yes"
        cancelOption="No"
        confirmSms={confirmSms}
        isVisible={isVisible}
        confirmTimer={countDown}
        handleOkClick={handleOkConfirmClick}
        handleCancelClick={handleCancelConfirmClick}
      />
    </div>
  );
}

export default App;
