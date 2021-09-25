import RootRouter from "./router/RootRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}
