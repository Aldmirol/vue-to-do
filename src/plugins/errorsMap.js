export default function errorsMap(message) {
  let errorMessage;
  switch (message) {
    case '1': {
      errorMessage = 'yes';
      break;
    }
    case '2': {
      errorMessage = 'no';
      break;
    }
  }

  return errorMessage;
}
