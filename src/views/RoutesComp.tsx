import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";

export const RoutesComp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
