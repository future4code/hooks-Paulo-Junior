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
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/trips/list" element={<ListTripPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/trips/application" element={<ApplicationFormPages />} />
               

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
