import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  const buttons=["All","movies","actions","music","News","Information ","Sports","Entairtainment","trending","live","recently uploaded","watched"]
  return (
    <div className="flex">
      <Button name={buttons} />
      

    </div>
  );
};

export default Buttonlist;
