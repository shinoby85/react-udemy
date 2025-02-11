class Todo {
  id: string;
  text: string;

  constructor(textData: string) {
    this.text = textData;
    this.id = (new Date()).toISOString();
  }
}

export default Todo;