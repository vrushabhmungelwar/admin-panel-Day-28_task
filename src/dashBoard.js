// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";

import { Products } from "./products";
import { Users } from "./Users";

export function Dashboard({ product, setProduct }) {
  // const navigate = useNavigate();

  return (
    <div className="main-cont">
      <div className="cont1">
        <Users />
      </div>
      <div className="cont2">
        <Products product={product} setProduct={setProduct} />
      </div>
    </div>
  );
}
