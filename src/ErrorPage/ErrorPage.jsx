import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.ErrorPageContent}>
      <div className={styles.Lines}>
        <h2>Sorry, the content you're looking for does not exist.</h2>
        <h2>Désolé, le contenu que vous cherchez n'existe pas.</h2>
        <h2>Tut uns leid, die Inhalte, die Sie suchen, existieren nicht.</h2>
        <h2>Lo sentimos, el contenido que buscas no existe.</h2>
        <h2>O conteúdo que você está procurando não existe.</h2>
        <h2>抱歉，您寻找的内容不存在。</h2>
        <h2>抱歉，您尋找的內容不存在。</h2>
        <h2>對唔住，閣下尋找嘅內容唔喺到。</h2>
        <h2>残念ながらお探しのコンテンツは存在しません。</h2>
        <h2>죄송합니다만, 찾으시는 내용이 존재하지 않습니다.</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
