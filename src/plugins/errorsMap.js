export default function errorsMap(message, lang) {
  let errorMessage;
  switch (message) {
    case 'auth/user-not-found': {
      const ruMessage = 'Пользователя с такой электронной почтой не существует';
      const enMessage = 'The user with this email does not exist';

      errorMessage = lang === 'ru' ? ruMessage : enMessage;
      break;
    }
    case '2': {
      errorMessage = 'no';
      break;
    }
  }

  return errorMessage;
}
