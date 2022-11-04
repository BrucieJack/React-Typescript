export const getCharacters = (page: number) => ({
  type: "GET_CHARACTERS",
  payload: page,
});

export const getCharacterById = (id: number) => ({
  type: "GET_CHARACTER_BY_ID",
  payload: id,
});

export const putCharacters = (data: any) => ({
  type: "PUT_CHARCTERS",
  payload: data,
});

export const putCharacter = (data: any) => ({
  type: "PUT_CHARCTER",
  payload: data,
});
