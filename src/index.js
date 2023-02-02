class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [101, "Переменная не объявлена"],
      [202, "Некорректное имя"],
      [303, "Ошибка доступа"],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return "Unknown error";
  }
}

module.exports = {
  default: ErrorRepository,
};
