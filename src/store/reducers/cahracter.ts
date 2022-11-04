export default function character(
  state = [],
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "PUT_CHARCTER":
      return action.payload;
    default:
      return state;
  }
}
