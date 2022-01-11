import "./App.css";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Products } from "./products";
import { Users } from "./Users";
import { Home } from "./Home";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { Dashboard } from "./dashBoard";
import { v4 as uuid } from "uuid";

function App() {
  const [product, setProduct] = useState([
    {
      id: uuid(),
      createdAt: "27/03/2019",
      description:
        "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      media: "/static/images/products/product_1.png",
      title: "Dropbox",
      totalDownloads: "594",
    },
    {
      id: uuid(),
      createdAt: "31/03/2019",
      description:
        "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
      media: "/static/images/products/product_2.png",
      title: "Medium Corporation",
      totalDownloads: "625",
    },
    {
      id: uuid(),
      createdAt: "03/04/2019",
      description:
        "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
      media: "/static/images/products/product_3.png",
      title: "Slack",
      totalDownloads: "857",
    },
    {
      id: uuid(),
      createdAt: "04/04/2019",
      description:
        "Lyft is an on-demand transportation company based in San Francisco, California.",
      media: "/static/images/products/product_4.png",
      title: "Lyft",
      totalDownloads: "406",
    },
    {
      id: uuid(),
      createdAt: "04/04/2019",
      description:
        "GitHub is a web-based hosting service for version control of code using Git.",
      media: "/static/images/products/product_5.png",
      title: "GitHub",
      totalDownloads: "835",
    },
    {
      id: uuid(),
      createdAt: "04/04/2019",
      description:
        "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
      media: "/static/images/products/product_6.png",
      title: "Squarespace",
      totalDownloads: "835",
    },
  ]);

  const navigate = useNavigate();

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack direction="column" spacing={0}>
        <h1 className="menu-content">Menu</h1>
        <Button variant="text" onClick={() => navigate("/dashBoard")}>
          Dashboard
        </Button>
        <Button variant="text" onClick={() => navigate("/products")}>
          Products
        </Button>
        <Button variant="text" onClick={() => navigate("/users")}>
          Users
        </Button>
      </Stack>
    </Box>
  );
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button variant="inherit" onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Dashboard product={product} setProduct={setProduct} />}
        />
        <Route
          path="/products"
          element={<Products product={product} setProduct={setProduct} />}
        />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
