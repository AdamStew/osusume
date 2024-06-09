import { Page } from '@dynatrace/strato-components-preview';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';
import Navbar from './shared/components/navbar.component';
import { useDeviceSize } from './shared/hooks/device-size.hook';
import { DeviceContext } from './shared/contexts/device.context';

function App() {
  const device = useDeviceSize();

  return (
    <DeviceContext.Provider value={device}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <Page.Header style={{ padding: 0 }}>
                  <Navbar />
                </Page.Header>
                <Page.Main>
                  <Outlet />
                </Page.Main>
              </Page>
            }
          >
            <Route path="/genre-recommendations" element={<HomePage />} />
            <Route path="/" element={<Navigate replace to="/genre-recommendations" />} />
            <Route path="*" element={<>404 lol</>} />
          </Route>
        </Routes>
      </Router>
    </DeviceContext.Provider>
  );
}

export default App;
