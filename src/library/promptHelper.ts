const path = "src/library/prompts.json";

export function PromptHelper(promptID) {}

export async function GetAllPrompts() {
  const file = Bun.file(path);

  const contents = await file.json();

  return contents;
}

export async function FindPrompt(id) {
  const file = Bun.file(path);

  const contents = await file.json();

  const found = contents.find((element) => element.id == id);

  return found;
}

export async function FilterPrompt(prompts) {
  let filterd = ***REMOVED******REMOVED***;

  prompts.forEach((prompt) => {
    filterd.push({
      id: prompt.id,
      name: prompt.name,
      displayName: prompt.displayName,
      image: prompt.image,
***REMOVED***);
***REMOVED***);

  return filterd;
}
