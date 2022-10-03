function getArticleGenerator(articles) {
  let input = articles.slice();
  return () => {
    let newArticle = document.createElement(`article`);
    newArticle.textContent = input.splice(0, 1);
    if (newArticle.textContent !== ``) {
      let resultDiv = document.querySelector(`#content`);
      resultDiv.appendChild(newArticle);
    }
  };
}
