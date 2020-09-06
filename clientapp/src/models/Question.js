export class QuestionModel {
  _title = "Default Question";
  _description = "";
  _value = null;
  _type = null;
  _image = null;
  _params = {
    question:
      "Give yourself a personal rating on how well you performed the task",
  };
  _comments = null;
  get comments() {
    return this._comments;
  }
  set comments(value) {
    this._comments = value;
  }

  /**
   *
   * @param {Object} data
   */
  constructor(data) {
    Object.assign(this, data);
  }

  get params() {
    return this._params;
  }
  set params(value) {
    this._params = value;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }

  get value() {
    return this._value == null ? 0 : parseInt(this._value);
  }
  set value(value) {
    this._value = value;
  }

  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }

  get image() {
    return this._image;
  }
  set image(value) {
    this._image = value;
  }
}
