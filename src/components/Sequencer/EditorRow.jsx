import styles from './Sequencer.module.css'
import React from 'react'

export default function EditorRow() {
  return (
    <div className={styles.editorRow}>
      <div className={styles.instrument}>Kick</div>
      <div className={styles.rowSteps}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
      </div>
    </div>
  )
}
