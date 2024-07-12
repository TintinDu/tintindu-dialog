import React from "react";
import { TintinDuDialog } from "tintindu-dialog";

// This is a test script to check if the component is working as expected
const test = () => {
  return (
    <TintinDuDialog isOpen={true} onClose={() => {}}>
      Hello, World!
    </TintinDuDialog>
  );
};

console.log(test());
