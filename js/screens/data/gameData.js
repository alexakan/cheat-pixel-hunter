export default function () {
  return [
    {
      type: 1,
      description: `Угадайте для каждого изображения фото или рисунок?`,
      content: {
        option1: `https://k42.kn3.net/CF42609C8.jpg`,
        option2: `http://i.imgur.com/1KegWPz.jpg`,
      },
      right: {
        question1: `paint`,
        question2: `photo`,
      }
    },
    {
      type: 2,
      description: `Угадай, фото или рисунок?`,
      content: {
        option1: `https://k32.kn3.net/5C7060EC5.jpg`,
      },
      right: {
        question1: `paint`,
      }
    },
    {
      type: 3,
      description: `Найдите рисунок среди изображений`,
      content: {
        option1: `http://i.imgur.com/DKR1HtB.jpg`,
        option2: `https://k42.kn3.net/D2F0370D6.jpg`,
        option3: `https://k32.kn3.net/5C7060EC5.jpg`,
      },
      right: {
        question1: `http://i.imgur.com/DKR1HtB.jpg`
      }
    },
  ];
}

