export function counter(state = 0, action: any) {
  switch (action.type) {
    case 'change_state':
      return action.counter;
    default:
      return state;
  }
}
