function solve() {
  let creatorEl = document.querySelector("#creator");
  let titleEl = document.querySelector("#title");
  let categoryEl = document.querySelector("#category");
  let textEl = document.querySelector("#content");
  let createButton = document.getElementsByClassName("btn create")[0];
  createButton.addEventListener("click", create);
  function create(e) {
    e.preventDefault();
    let creator = creatorEl.value;
    let title = titleEl.value;
    let category = categoryEl.value;
    let text = textEl.value;
    clear();
    let appendEl = document.getElementsByTagName("section")[1];
    let newArticleEl = document.createElement("article");
    appendEl.appendChild(newArticleEl);
    let h1El = document.createElement("h1");
    h1El.textContent = title;
    newArticleEl.appendChild(h1El);

    let pEl = document.createElement("p");
    pEl.textContent = `Category:`;
    newArticleEl.appendChild(pEl);
    let strongEl = document.createElement("strong");
    strongEl.textContent = category;
    pEl.appendChild(strongEl);

    let pE2 = document.createElement("p");
    pE2.textContent = `Creator:`;
    newArticleEl.appendChild(pE2);
    let strongEl2 = document.createElement("strong");
    strongEl2.textContent = creator;
    pE2.appendChild(strongEl2);

    let pEl3 = document.createElement("p");
    pEl3.textContent = text;
    newArticleEl.appendChild(pEl3);

    let divBtnEl = document.createElement("div");
    divBtnEl.classList.add("buttons");

    let deleteButtonEl = document.createElement("button");
    deleteButtonEl.classList.add("btn", "delete");
    deleteButtonEl.textContent = "Delete";
    divBtnEl.appendChild(deleteButtonEl);
    let archiveButtonEl = document.createElement("button");
    archiveButtonEl.classList.add("btn", "archive");
    archiveButtonEl.textContent = "Archive";
    divBtnEl.appendChild(archiveButtonEl);
    newArticleEl.appendChild(divBtnEl);

    deleteButtonEl.addEventListener("click", () => {
      newArticleEl.remove();
    });
    archiveButtonEl.addEventListener("click", () => {
      let archivedArticleEl = document.getElementsByTagName("ol")[0];
      let archivedArticle = document.createElement("li");
      archivedArticle.textContent = h1El.textContent;
      archivedArticleEl.appendChild(archivedArticle);
      newArticleEl.remove();
      let items = [...archivedArticleEl.querySelectorAll('li')];
      archivedArticleEl.innerHTML = '';
  
       items.sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(e => archivedArticleEl.appendChild(e));
    });
  }
  function clear() {
    creatorEl.value = "";
    titleEl.value = "";
    categoryEl.value = "";
    textEl.value = "";
  }
}
