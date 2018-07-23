export default function () {
  return [
    {
      type: 1,
      description: `Угадайте для каждого изображения фото или рисунок?`,
      content: {
        option1: `http://placehold.it/468x458`,
        option2: `http://placehold.it/468x458`,
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
        option1: `http://placehold.it/468x458`,
      },
      right: {
        question1: `paint`,
      }
    },
    {
      type: 3,
      description: `Найдите рисунок среди изображений`,
      content: {
        option1: `http://placehold.it/468x458`,
        option2: `http://placehold.it/468x458`,
        option3: `http://placehold.it/468x458`,
      },
      right: {
        question1: `http://placehold.it/468x458`
      }
    },
  ];
}

