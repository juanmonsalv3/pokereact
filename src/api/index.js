export async function get(url) {
  const local = localStorage.getItem(url);
  if (local) {
    return JSON.parse(local);
  }

  const response = await fetch(url);

  const data = await response.json();
  const json = JSON.stringify(data);

  localStorage.setItem(url, json);
  return data;
}
