import List from "@mui/material/List";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { GlobalContext } from "./globalState";
import { useContext } from "react";

const CartItem = ({ user, index, remove }) => {
  return (
    <div>
      <ListItem sx={{ minWidth: 335}} disablePadding>
        <h3 className="name">{user.name}</h3>
        <Button
          variant="text"
          color="inherit"
          style={{ marginLeft: "auto" }}
          onClick={() => remove(user.id)}
        >
          <DeleteIcon />
        </Button>

      </ListItem>
      <Divider />
    </div>
  );
};
export function Users() {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <List>
      <div className="list">
        <h1>User List</h1>
        {users.map((item, index) => (
          <CartItem key={index} user={item} index={index} remove={removeUser} />
        ))}
      </div>
    </List>
  );
}
