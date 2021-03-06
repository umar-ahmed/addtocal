import React from "react";

import { AppBar, IconButton, Toolbar, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import GitHubIcon from "./GitHubIcon";
import { ExpandedTitle } from "./AppHeader.styles";

export default function AppHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ExpandedTitle>Add to Calendar Link Generator</ExpandedTitle>
        <Tooltip title="Edit in CodeSandbox">
          <IconButton
            aria-label="Edit"
            color="inherit"
            component="a"
            href="https://codesandbox.io/s/github/umar-ahmed/addtocal"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub repo">
          <IconButton
            aria-label="View Source"
            color="inherit"
            component="a"
            href="https://github.com/umar-ahmed/addtocal"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
