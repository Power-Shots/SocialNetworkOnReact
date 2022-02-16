const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const requiredField = (value) => {
  return value ? undefined : 'Это поле не может быть пустым'
}

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    return value && value.length <= maxLength ? undefined 
            : `Максимальная длина ${maxLength} символов`
  }
}

export const minLengthCreator = (minLength) => {
  return (value) => {
    return value && value.length >= minLength ? undefined : `Минимальная длина ${minLength} символов` 
  }
}

export const emailValidator = (value) => {
  return emailRegExp.test(value)?undefined:'Не правильный E-mail'
}
