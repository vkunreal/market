import { CardsList } from "components/CardsList";
import { Header } from "../../components/Header";

export const MainPage: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <CardsList />
      </main>
    </div>
  );
};
