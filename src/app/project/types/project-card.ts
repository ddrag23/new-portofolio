export type ProjectCardProps = {
  title: string;
  desc: string;
  img: string;
  icons: Icon[];
};

type Icon = {
  srcImg: string;
  alt: string;
  width: number;
  height: number;
};
