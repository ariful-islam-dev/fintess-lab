import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RoomIcon from "@mui/icons-material/Room";
import { List } from "@mui/material";
import Link from "next/link";
import { Box1 } from "../Styles/reusable";

export default function Sidebar() {
  return (
    <Box1
      item
      xs={4}
      sx={{ background: "#fff", padding: "24px", marginBottom: "24px" }}
    >
      <List>
        {/* <Link href="/">Home</Link> */}
        <Link href="/dashboard">
          <a>
            <PersonIcon fontSize="20px" /> Account information
          </a>
        </Link>
      </List>
      <List>
        <Link href="/dashboard/order">
          <a>
            <ReceiptIcon fontSize="20px" /> My order
          </a>
        </Link>
      </List>
      <List>
        <Link href="/dashboard/address">
          <a>
            <RoomIcon fontSize="20px" /> Manage address
          </a>
        </Link>
      </List>
    </Box1>
  );
}
