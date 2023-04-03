import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import CreateAccount from '../pages/signup';

export default function LoggedOutRouter() {

  return (
     <Router>
        <Routes>
            <Route path={'/create-account'} element={<CreateAccount />} />
            <Route path={'/'} element={<Login />}>
            </Route>
        </Routes>
     </Router>
  );
}
