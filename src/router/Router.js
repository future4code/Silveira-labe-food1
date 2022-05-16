import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartPage from "../../pages/CartPage";
import LoginPage from '../../pages/LoginPage/LoginPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import SignupPage from '../../pages/SignupPage/SignupPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import EditPage from '../../pages/EditPage/EditPage';
import ProfilePage from '../../pages/ProfilePage.Js/ProfilePage.Js';
import HomePage from '../../pages/HomePage/HomePage';


function Router() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage/>} />
                    <Route path="/registerpage" element={<RegisterPage />} />
                    <Route path="/profilepage" element={<ProfilePage />} />
                    <Route path="/homepage" element={<HomePage/>} />
                    <Route path="/detailspage/:id" element={<DetailsPage />} />
                    <Route path="/editpage" element={<EditPage />} />
                    <Route path="/cartpage" element={<CartPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;