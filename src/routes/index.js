import { Routes, Route } from "react-router-dom";
import BaseLayout from "../components/layouts/BaseLayout";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetails />} />
      </Route>
    </Routes>
  );
};

export default Routing;