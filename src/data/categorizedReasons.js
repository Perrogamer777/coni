export const categories = [
  {
    id: 'lo-que-hacemos',
    title: 'Lo que hacemos juntos',
    emoji: '💕',
    description: 'Cosas q hacemos',
    color: '#ff8e8e',
    reasons: [
      'Me gusta que andemos juntos',
      'Me gusta tomar café contigo',
      'Me gusta ir al cine contigo',
      'Me gusta salir solo contigo',
      'Me gusta completar un álbum contigo',
      'Me gusta hablar contigo',
      'Me gusta mirar el atardecer contigo',
      'Me gusta mirar las estrellas contigo'
    ]
  },
  {
    id: 'lo-que-veo',
    title: 'Eres mui wapa',
    emoji: '👀',
    description: 'Eres mui wapa', 
    color: '#ff6b6b',
    reasons: [
      'Me gusta tu pelo, es especial cuando te peino',
      'Me gustan tus ojos',
      'Me gustan tus labios'
    ]
  },
  {
    id: 'como-eres',
    title: 'Tú',
    emoji: '🍒',
    description: 'Me gusta cmo eres',
    color: '#ffa8a8',
    reasons: [
      'Me gusta tu personalidad',
      'Me gusta que no hables fuerte',
      'Me gusta que seas seria',
      'Me gusta que eres diferente',
      'Me gusta que coincidamos en tantas cosas',
      'Me gusta que no seas la típica mina que sale a la disco todos los fines de semana',
      'Me gusta que siempre seas sincera'
    ]
  },
  {
    id: 'lo-que-hago',
    title: 'Lo que me dejas hacer',
    emoji: '🧔🏻',
    description: 'Wardame más mokitos',
    color: '#ffb3b3',
    reasons: [
      'Me gusta limpiarte las manos cuando comemos papitas',
      'Me gusta limpiarte los mokitos',
      'Me gusta comer tus mokitos',
      'Me gusta peinarte',
    ]
  },
  {
    id: 'garcioso',
    title: 'Tu humor',
    emoji: '🌳',
    description: 'megustas',
    color: '#ff9999',
    reasons: [
      'Me gusta tu humor',
      'Me gusta que nos riamos los D, V y N',
      'Me gusta cuando nos reimos de las personas que tosen',
      'Me gusta que odies a los venecos'
    ] 
  }
];

export const getAllReasons = () => {
  return categories.reduce((all, category) => {
    return [...all, ...category.reasons.map(reason => `${category.emoji} ${reason}`)];
  }, []);
};