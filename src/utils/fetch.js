async function fetchUrl(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);
  return response.json();
}

export default fetchUrl;
