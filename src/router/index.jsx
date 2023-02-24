import { Routes , Route} from "react-router-dom";
import Home from "../pages/";
import Coin from "../pages/Coin";

const createRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coin/:id" element={<Coin/>} />

    </Routes>
)

export default createRoutes