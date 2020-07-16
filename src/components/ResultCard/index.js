import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

import { CardContainer, Code } from "./ResultCard.styles";

export default function ResultCard({ results }) {
  const [current, setCurrent] = useState("google");
  const result = results[current];

  function handleCopyClick() {
    navigator.clipboard.writeText(result);
  }

  function handleOpenClick() {
    window.open(result);
  }

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Result
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Copy this to your clipboard and add to the href of an anchor tag
          </Typography>
          <Code>{result}</Code>
        </CardContent>
        <CardActions>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Button color="primary" onClick={handleCopyClick}>
                Copy to Clipboard
              </Button>
              <Button onClick={handleOpenClick}>Open</Button>
            </Box>
            <Box>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={current}
                onChange={e => setCurrent(e.target.value)}
              >
                <MenuItem value="google">Google</MenuItem>
                <MenuItem value="outlook">Outlook</MenuItem>
              </Select>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </CardContainer>
  );
}
