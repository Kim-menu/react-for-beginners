import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
        <h1 className={styles.title}>Hello React World!</h1>
        <Button text="hey"/>
    </div>
  );
}

export default App;
