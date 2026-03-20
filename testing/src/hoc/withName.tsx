import React from "react";

type IName = {
  name?: string;
};

const WithName = <P extends object>(
  OriginalComp: React.ComponentType<P & IName>,
) => {
  const newComp: React.FC<P> = (props) => {
    return <OriginalComp {...props} name="Geeks" />;
  };
  return newComp;
};

export default WithName;
