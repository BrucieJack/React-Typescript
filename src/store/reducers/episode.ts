export default function episode(
  state = [],
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "PUT_EPISODE":
      return action.payload;

    default:
      return state;
  }
}
