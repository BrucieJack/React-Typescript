export default function episodes(
  state = [],
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "PUT_EPISODES":
      return action.payload;

    default:
      return state;
  }
}
