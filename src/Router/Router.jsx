import {createBrowserRouter, creaRoutesFromElements, Route} from 'react-router-dom';
import Authenticator from '../Components/Authenticator';


const router = createRoutesFromElements(
    <Route path="/" element = {<Authenticator />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Route>
);

export const routes = createBrowserRouter(router);