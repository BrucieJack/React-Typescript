export default function characters(
  state = [],
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "PUT_CHARCTERS":
      return action.payload;

    default:
      return state;
  }
}
