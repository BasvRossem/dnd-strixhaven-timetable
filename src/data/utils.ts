export function getGlobalLanguage(): "en" | "nl" {
  const input = document.getElementById("selectedLanguage");
  if (input === null) {
    return "en"
  }
  return (input as HTMLInputElement).value == "en" ? "en" : "nl";
}
