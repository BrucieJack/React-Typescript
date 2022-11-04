import axios from "axios";
import { call, put } from "redux-saga/effects";
import { putCharacters } from "../actions/characters";
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

export const getAllCharacters = (page: number) => {
  return axios.get(rickAndMorty + `/character/?page=${page}`).then((res) => {
    return res.data.results;
  });
};

function* putData(action: { payload: number }) {
  try {
    const characters: ResponseGenerator = yield call(
      getAllCharacters,
      action.payload
    );
    yield put(putCharacters(characters));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadCharacters() {
  yield takeEvery("GET_CHARACTERS", putData);
}
