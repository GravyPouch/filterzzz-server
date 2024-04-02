import Replicate from "replicate";
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
import { promises as fs } from "fs";
import { FindPrompt } from "./promptHelper";

export async function pushImage(imgName, filter) {
  console.log(imgName);

  const prompt = await FindPrompt(filter);

  const promptInput = prompt.input;

  console.log(promptInput);

  const path = `uploads/${imgName}.jpg`;
  const data = await fs.readFile(path);
  // Convert the buffer into a base64-encoded string
  const base64 = data.toString("base64");
  // Set MIME type for PNG image
  const mimeType = "image/png";
  // Create the data URI
  const dataURI = `data:${mimeType};base64,${base64}`;

  const model = promptInput.model;
  const input = {
    image: dataURI,
    style: promptInput.style,
    prompt: promptInput.prompt,
    instant_id_strength: promptInput.instant_id_strength,
***REMOVED***;

  const output = await replicate.run(model, { input });

  await fs.unlink(path);

  console.log(output);

  if (output***REMOVED***0***REMOVED***) {
    return output***REMOVED***0***REMOVED***;
***REMOVED*** else {
    return "error";
***REMOVED***
}
