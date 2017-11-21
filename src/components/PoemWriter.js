import React from "react";

function countWords(line) {
  return line.split(" ").filter(l => l).length;
}

function isValidPoem(poem) {
  if (poem) {
    const poemLines = poem.split("\n").filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords =
      countWords(poemLines[0]) === 5 &&
      countWords(poemLines[1]) === 3 &&
      countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: true
    };
  }

  setPoemContent = event => {
    let content = event.target.value;
    this.setState({
      content: content,
      isValid: isValidPoem(content)
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setPoemContent}
        />
        {!this.state.isValid && (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
