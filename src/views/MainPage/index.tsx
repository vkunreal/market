import { Header } from "components/Header";
import { SelectCategory } from "components/SelectCategory";
import { CardsList } from "components/CardsList";

export const MainPage: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <SelectCategory />

        <CardsList />
      </main>
    </div>
  );
};
