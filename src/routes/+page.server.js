export async function load() {
  const url = 'https://cssday.nl/data.json'

  try {
    const response = await fetch(url)
    const data = await response.json();
    return data
  }
  catch {
    console.log('error')
  }
}