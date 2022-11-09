import axios from "axios";
import { call, put } from "redux-saga/effects";
import { putEpisode } from "../actions/episodes";
import { rickAndMorty } from "../../constants/url";
import * as Eff from "redux-saga/effects";

const takeLatest: any = Eff.takeLatest;

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export const getEpisodeById = (id: number) => {
  return axios.get(rickAndMorty + "/episode/" + id).then((res) => {
    return res.data;
  });
};

function* putData(action: { payload: number }) {
  try {
    const episode: ResponseGenerator = yield call(
      getEpisodeById,
      action.payload
    );
    yield put(putEpisode(episode));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadEpisode() {
  yield takeLatest("GET_EPISODE_BY_ID", putData);
}
