import { Confirm } from "./new/confirm";

const App = () => {
  return (
    <>
      <Confirm
        title="Dialog"
        content="Welcome to our Mini Dialog Box"
        open={true}
        okCaption="OK"
        cancelCaption="Cancel"
        onConfirm={() => console.log("Confirmed")}
        onCancel={() => console.log("Cancelled")}
      />
    </>
  );
};

export default App;
