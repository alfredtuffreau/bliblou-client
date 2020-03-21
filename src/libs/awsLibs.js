import { Storage, API } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;
  const stored = await Storage.put(filename, file, { contentType: file.type });
  return stored.key;
}

export async function s3Download(filename) {
  return await Storage.get(filename);
}

export async function s3Delete(filename) {
  return await Storage.remove(filename);
}

export async function createRecipe(content) {
  return await API.post("recipes", "/recipes", { body: content });
}

export async function fetchRecipes() {
  return await API.get("recipes", "/recipes");
}

export async function fetchRecipe(id) {
  return await API.get("recipes", `/recipes/${id}`);
}

export async function deleteRecipe(id) {
  return await API.del("recipes", `/recipes/${id}`);
}
