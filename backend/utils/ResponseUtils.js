class CustomResponse {
  constructor(success) {
    this.success = success;
  }
}

exports.ErrorReponse = class ErrorReponse extends CustomResponse {
  constructor(message) {
    super(false);
    this.message = message;
  }
};

exports.SuccessReponse = class SuccessReponse extends CustomResponse {
  constructor(data) {
    super(true);
    this.data = data;
  }
};
