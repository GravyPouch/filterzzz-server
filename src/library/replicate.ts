import Replicate from "replicate";
const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });
import { promises as fs } from "fs";

export async function pushImage(imgName) {
  console.log(imgName);

  const path = `uploads/${imgName}.png`;
  const data = await fs.readFile(path);
  // Convert the buffer into a base64-encoded string
  const base64 = data.toString("base64");
  // Set MIME type for PNG image
  const mimeType = "image/png";
  // Create the data URI
  const dataURI = `data:${mimeType};base64,${base64}`;

  const model =
    "fofr/face-to-many:35cea9c3164d9fb7fbd48b51503eabdb39c9d04fdaef9a68f368bed8087ec5f9";
  const input = {
    image: dataURI,
    style: "Video game",
    prompt:
      "pixelated glitchart of close-up of {subject}, ps2 playstation psx gamecube game gta, dreams screencapture, bryce 3d --style ddCHhSumaNyOrL1Q",
    instant_id_strength: 0.8,
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
