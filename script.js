const toast = document.getElementById('toast')
const emoji = document.getElementById('emoji')
const phrase = document.getElementById('phrase')
const image = document.getElementById('image')
const apiKey = 'ANrc5Qj8vEOQadsCw4YCH55ghF5SHgZXu2gm1SvyCnBLBCAMP8CwHLzE';
const query = 'golden retriever';
const BASE_API = `https://api.pexels.com/v1/search?query=${query}`

const phrases = [
  {
    emoji: '🌷',
    phrase: '"Florecer exige pasar por todas las estaciones."'
  },
  {
    emoji: '🥲',
    phrase: '"No culpes a una versión más pequeña de ti por no saber antes lo que sabes ahora."'
  },
  {
    emoji: '🛤',
    phrase: '"Si crees que puedes, ya estás a medio camino."'
  },
  { emoji: '🌙', 
    phrase: '"Apunta a la luna. Si fallas, quizás le das a una estrella."'
  },
  { emoji: '🌈', 
  phrase: '"Después de la tormenta siempre sale el sol."'
  },
  { emoji: '🚀', 
  phrase: '"No dejes que nadie te diga que tus sueños son imposibles."'
  },
  { emoji: '🎨', 
  phrase: '"La creatividad es la inteligencia divirtiéndose."'
  },
]


const isToastVisible = (value) => toast.style.visibility = value

const setNewGolden = async () => {
  const response = await fetch(BASE_API, {
    headers: {
      Authorization: apiKey
    }
  });
  const golden = await response.json();
  const randomIndex = Math.floor(Math.random() * golden.photos.length);
  image.src = golden.photos[randomIndex].src.medium;
};

const setPhraseAndCloseToast = () => {
  isToastVisible('hidden')
  setNewGolden()
  const randomNumber = Math.floor(Math.random() * phrases.length)
  emoji.innerHTML = phrases[randomNumber].emoji
  phrase.innerHTML = phrases[randomNumber].phrase
}


// ANrc5Qj8vEOQadsCw4YCH55ghF5SHgZXu2gm1SvyCnBLBCAMP8CwHLzE

