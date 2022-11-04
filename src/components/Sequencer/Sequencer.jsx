import React from "react";
import Container from "../UI/Container";

export default function Sequencer() {
  return (
    <div>
      <Container>
        <div className="sequencer">
          <div className="transport">
            <div>REACT-SEQUENCER</div>
            <div>
              <button>STOP</button>
              <button>PLAY</button>
            </div>
          </div>
          <hr />
          <div className="steps">Step Numbers</div>
          <hr />
          <div className="editor"> Editor</div>
        </div>
      </Container>
    </div>
  );
}
