// Used to mock the delay in a network response
export function networkDelayMock() {
  return new Promise(resolve => setTimeout(resolve, 500));
}
