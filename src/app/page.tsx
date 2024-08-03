import Image from "next/image";
import styles from "./page.module.css";
import ConnectBtn from "../../components/ConnectBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        <div>
          <ConnectBtn /> 
        </div>
      </div>

      
    </main>
  );
}