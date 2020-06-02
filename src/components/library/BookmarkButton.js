import React from "react";
import SaveIcon from "react-ionicons/lib/IosBookmarkOutline";
import { IconButton } from "../ui";

export default (props) => (
  <IconButton
    icon={<SaveIcon />}
    color="primary"
    onClick={() => alert("Função indispomível.")}
  />
);
