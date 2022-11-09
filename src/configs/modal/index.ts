export type ModalType = {
  title: string;
  data: any;
};

export const episode: ModalType[] = [
  { title: "Date", data: (data: any) => data.air_date },
  { title: "Episode", data: (data: any) => data.episode },
];

export const character: ModalType[] = [
  { title: "Status", data: (data: any) => data.status },
  { title: "Species", data: (data: any) => data.species },
  { title: "Gender", data: (data: any) => data.gender },
];
