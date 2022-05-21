import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import EditPage from '../pages/EditPage/EditPage'
import EditAdress from '../pages/EditAdress/EditAdress'
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage'


function Router() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage/>} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="homepage" element={<HomePage/>} />

                    <Route path="details/:id" element={<DetailsPage />} />
                    <Route path="edit" element={<EditPage />} />
                    <Route path="cart" element={<CartPage />} />

                    <Route path="editadress" element={<EditAdress />} />


                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;