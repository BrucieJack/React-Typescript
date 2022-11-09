import axios from "axios";
import { call, put } from "redux-saga/effects";
import { putCharacter } from "../actions/characters";
import { rickAndMorty } from "../../constants/url";
import * as Eff from "redux-saga/effects";

const takeLatest: any = Eff.takeLatest;

export const getCharacterById = (id: number) => {
  return axios.get(rickAndMorty + "/character/" + id).then((res) => {
    return res.data;
  });
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* putData(action: { payload: number }) {
  try {
    const character: ResponseGenerator = yield call(
      getCharacterById,
      action.payload
    );
    yield put(putCharacter(character));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadCharacter() {
  yield takeLatest("GET_CHARACTER_BY_ID", putData);
}
