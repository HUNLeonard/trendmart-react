export const textFormatter = (text: string) => {
  let spacedText = text.replace(/([a-z])([A-Z])/g, '$1 $2');
  let formattedText = spacedText.charAt(0).toUpperCase() + spacedText.slice(1);

  return formattedText;
}