export const getEpisodes = (page: number) => ({
  type: "GET_EPISODES",
  payload: page,
});

export const putEpisodes = (data: any) => ({
  type: "PUT_EPISODES",
  payload: data,
});

export const getEpisodeById = (id: number) => ({
  type: "GET_EPISODE_BY_ID",
  payload: id,
});

export const putEpisode = (data: any) => ({
  type: "PUT_EPISODE",
  payload: data,
});
