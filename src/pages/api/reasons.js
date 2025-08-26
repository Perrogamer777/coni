export default function handler(req, res) {
  const reasons = [
    "Eres increíblemente amable y siempre piensas en los demás.",
    "Tu risa ilumina mi día y me hace sentir feliz.",
    "Admiro tu pasión por lo que haces y tu dedicación.",
    "Siempre sabes cómo hacerme sentir mejor cuando estoy triste.",
    "Eres muy inteligente y siempre me sorprendes con tus ideas.",
    "Me encanta pasar tiempo contigo, cada momento es especial.",
    "Tu creatividad es inspiradora y me motiva a ser mejor.",
    "Eres hermosa tanto por dentro como por fuera.",
    "Tu apoyo incondicional significa el mundo para mí.",
    "Me encanta cómo siempre encuentras la manera de hacerme reír."
  ];

  res.status(200).json(reasons);
}