import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
    const [format, setFormat] = useState<string[]>([]);
    console.log({format});
    const handleFormatChange=(e:React.MouseEvent<HTMLElement>,updatedFormat:string[])=>{
        setFormat(updatedFormat);
    }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="send" color="secondary" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="medium"
          color="secondary"
          aria-label="aligment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup aria-label="text formatting" value={format} onChange={handleFormatChange}>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="inderline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
