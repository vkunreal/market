export interface ICardProps {
  id: number;
  name: string;
  type: string;
  imgSrc: string;
  isSelected: boolean;
  onClick: (id: string | null | undefined) => void;
}
