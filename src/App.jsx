
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddVolunteer from './component/AddVolunteer';
import ViewVolunteer from './component/ViewVolunteer';
import NavigationBar from './component/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AddVolunteer />} />
        <Route path="/add" element={<AddVolunteer />} />
        <Route path="/view" element={<ViewVolunteer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;