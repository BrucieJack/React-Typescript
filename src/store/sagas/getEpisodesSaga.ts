import axios from "axios";
import { call, put } from "redux-saga/effects";
import { putEpisodes } from "../actions/episodes";
import { rickAndMorty } from "../../constants/url";
import * as Eff from "redux-saga/effects";

const takeEvery: any = Eff.takeEvery;

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export const getAllEpisodes = (page: number) => {
  return axios.get(rickAndMorty + `/episode/?page=${page}`).then((res) => {
    return res.data.results;
  });
};

function* putData(action: { payload: number }) {
  try {
    const episodes: ResponseGenerator = yield call(
      getAllEpisodes,
      action.payload
    );
    yield put(putEpisodes(episodes));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadEpisodes() {
  yield takeEvery("GET_EPISODES", putData);
}
