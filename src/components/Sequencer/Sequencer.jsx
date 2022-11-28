import styles from './Sequencer.module.css'
import React from "react";
import Container from "../UI/Container";
import EditorRow from './EditorRow';

export default function Sequencer() {
  return (
    <div>
      <Container>
        <div className={styles.sequencer}>
          <div className={styles.transport}>
            <div>REACT-SEQUENCER</div>
            <div>
              <button>STOP</button>
              <button>PLAY</button>
            </div>
          </div>
          <hr />
          <div className={styles.steps}>Step Numbers</div>
          <hr />
          <div className={styles.editor}>
            <EditorRow/>
          </div>
        </div>
      </Container>
    </div>
  );
}
