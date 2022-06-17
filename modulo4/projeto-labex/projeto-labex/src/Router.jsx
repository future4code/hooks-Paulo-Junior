import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListTripPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import ApplicationFormPages from "./pages/ApplicationFormPages";
import AdminHomePage from "./pages/AdminHomePage";

import Error from "./pages/Error";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ListTripPage" element={<ListTripPage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/TripDetailsPage" element={<TripDetailsPage />} />
                <Route path="/CreateTripPage" element={<CreateTripPage />} />
                <Route path="/ApplicationFormPages" element={<ApplicationFormPages />} />
                <Route path="/AdminHomePage" element={<AdminHomePage />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
