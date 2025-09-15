import styles from "./Container.module.css";

type ContarinerProps = {
  children: React.ReactNode;
};

export function Contariner({ children }: ContarinerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
