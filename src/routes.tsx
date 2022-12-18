import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFoundPage from "./pages/NotFound"
import Resume from "./pages/Resume"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Resume />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
