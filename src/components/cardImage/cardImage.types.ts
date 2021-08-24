
export interface Image {
  src: string;
  alt: string;
}

export interface ICardImage {
  id: string;
  image: Image;
  name: string;
  onClick: () => void;
}