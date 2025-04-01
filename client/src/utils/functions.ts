export function capitalise(word: string) {
  const capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalisedWord;
}
