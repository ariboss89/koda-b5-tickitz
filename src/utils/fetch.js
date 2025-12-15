async function fetchUrl(url, options = {}) {
  const response = await fetch(url, options);
  // console.log(response.ok, "aaa");
  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);
  return response.json();
}

export default fetchUrl;
