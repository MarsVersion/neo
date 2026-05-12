import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={`container section ${styles.wrap}`}>
      <h1
        style={{
          fontFamily: "var(--font-headline)",
          fontSize: "5rem",
          fontWeight: "600",
          color: "var(--color-text-primary)",
          marginBottom: "1rem",
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        Contact
      </h1>

      <div className={styles.content}>
        <p className={styles.lede}>
          If this project resonates with you, I would be glad to hear from you.
        </p>
        <a className={styles.email} href="mailto:yes@neoslow.com">
          yes@neoslow.com
        </a>
      </div>
    </div>
  );
}
