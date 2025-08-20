import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Team from './Component/Team';
import AdminLogin from './Admin/AdminLogin';
import AdminLayout from './Admin/AdminLayout';
import EventsAdmin from './Admin/EventsAdmin';
import GalleryAdmin from './Admin/GalleryAdmin';
import OutreachAdmin from './Admin/OutreachAdmin';
import { setToken } from './api/Api';
import RecentEvents from './Admin/RecentEvents';
import EventPage from './Pages/EventPage';
import GalleryPage from './Pages/GalleryPage';
import Outreachpage from './Pages/Outreachpage';
import RecentevtPage from './Pages/RecentevtPage';
import GalleryContentPage from './Pages/GalleryContentPage';
import Career from './Component/Career';

const token = localStorage.getItem('admin_token');
if (token) setToken(token);

function RequireAuth({ children }) {
  const t = localStorage.getItem('admin_token');
  return t ? children : <Navigate to="/admin" />;
}

function App() {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<EventPage/>} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery-content/:id" element={<GalleryContentPage />} />
        <Route path="/outreach" element={<Outreachpage/>} />
        <Route path="/recent-events" element={<RecentevtPage/>} />
        <Route path='/career' element={<Career/>} />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<div className="p-6">Select section</div>} />
          <Route path="events" element={<EventsAdmin />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="outreach" element={<OutreachAdmin />} />
          <Route path='recentevt' element={<RecentEvents/>}></Route>
        </Route>

        {/* Catch-all */}
        {/* <Route path="*" element={<Navigate to="/admin" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
