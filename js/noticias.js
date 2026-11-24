const list = document.querySelector("#lista-noticias");
const API_KEY = "7e4c9f4a85c268f3de33b5edabdfd89f";
const URL = `https://gnews.io/api/v4/top-headlines?category=business&lang=pt&country=br&max=10&apikey=${API_KEY}`;


async function fetchNews() {
  try {
    const response = await fetch(URL);

    const data = await response.json();
    const articles = data.articles;

    articles.forEach((article) => {
      const card = document.createElement("article");
      card.classList.add("card-noticia");

      const img = document.createElement("img");
      img.src = article.image;
      img.alt = article.title;

      const div = document.createElement("div");

      const spanFont = document.createElement("span");
      spanFont.classList.add("card-font");
      spanFont.textContent = article.source.name;

      const title = document.createElement("h2");
      title.textContent = article.title;

      const paragrafo = document.createElement("p");
      paragrafo.textContent = article.description;

      const spanData = document.createElement("span");
      spanData.classList.add("card-data");
      spanData.textContent = new Date(article.publishedAt).toLocaleDateString("pt-BR");

      const link = document.createElement("a");
      link.textContent = "Leia mais";
      link.href = article.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const listItem = document.createElement("li");

      list.appendChild(listItem);
      listItem.appendChild(card);
      card.append(img, div);
      div.append(spanFont, title, paragrafo, spanData, link);
    })
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
  }
}

fetchNews();