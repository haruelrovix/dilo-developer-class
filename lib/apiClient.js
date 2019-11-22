const BASE_URL = 'https://api.github.com'

const fetchGithubAPI = async (owner, repository) => {
  const url = `${BASE_URL}/repos/${owner}/${repository}/commits`

  try {
    const response = await fetch(url)
    const jsonResponse = await response.json()

    return jsonResponse
  } catch (e) {
    throw e
  }
}

export default fetchGithubAPI
