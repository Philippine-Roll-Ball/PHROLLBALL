export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}