import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { NotFound } from "./NotFound";

export const RoutesComp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
