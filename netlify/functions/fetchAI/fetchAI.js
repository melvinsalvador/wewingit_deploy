// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
async function fetchReply() {
  const url = 'https://deft-smakager-03b2a5.netlify.app/.netlify/functions/fetchAI'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify(conversationStr)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

module.exports = { handler }
