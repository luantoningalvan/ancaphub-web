import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import {
  FiChevronDown as DropdownIcon,
  FiList as ListBoxIcon,
  FiGrid as GridIcon,
} from "react-icons/fi";

import { defaultStyles, FileIcon } from "react-file-icon";
import { FileExplorer, Toolbar } from "./styles";
import { Paper, IconButton, Menu } from "snake-ui";

const filelist = [
  {
    name: "45 ACP Smith And Wesson",
    updatedAt: "23/04/2020 às 18:37",
    type: "stl",
    size: "4.23mb",
  },
  {
    name: "Hino união soviética",
    updatedAt: "23/04/2020 às 18:37",
    type: "mp3",
    size: "3.11mb",
  },
];

const GroupFiles = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <FileExplorer>
      <Toolbar>
        <span>
          <FormattedMessage
            id="groups.files.number"
            values={{ num: filelist.length }}
          />
        </span>
        <ul>
          <li>
            <ListBoxIcon />
          </li>
          <li>
            <GridIcon />
          </li>
        </ul>
      </Toolbar>
      <Paper>
        <table>
          <thead>
            <th>
              <FormattedMessage id="groups.files.fileName" />
            </th>
            <th>
              <FormattedMessage id="groups.files.lastModified" />
            </th>
            <th>
              <FormattedMessage id="groups.files.type" />
            </th>
            <th>
              <FormattedMessage id="groups.files.size" />
            </th>
            <th>&nbsp;</th>
          </thead>

          <tbody>
            {filelist.map((file) => (
              <tr key={file.name}>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {/* @ts-ignore */}
                    <FileIcon
                      extension={file.type} // @ts-ignore
                      {...defaultStyles[file.type]}
                    />
                    {file.name}
                  </div>
                </td>
                <td>{file.updatedAt}</td>
                <td>{file.type}</td>
                <td>{file.size}</td>
                <td style={{ width: 48 }}>
                  <IconButton
                    icon={<DropdownIcon />}
                    onClick={(e: any) => setAnchorEl(e.currentTarget)}
                  />
                  <Menu
                    open={Boolean(anchorEl)}
                    placement="left"
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    options={[
                      { label: <FormattedMessage id="common.download" /> },
                      { label: <FormattedMessage id="common.delete" /> },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </FileExplorer>
  );
};
export default GroupFiles;
