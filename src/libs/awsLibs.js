import { Storage, API } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;
  const stored = await Storage.put(filename, file, { contentType: file.type });
  return stored.key;
}

export async function createRecipe(content) {
  return await API.post("recipes", "/recipes", { body: content });
}

export async function getRecipes() {
  return await API.get("recipes", "/recipes");
}