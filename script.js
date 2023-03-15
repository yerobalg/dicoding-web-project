const textList = [
  "Software Engineer",
  "Backend Engineer",
  "Football Enthusiast",
];

const articles = [
  {
    title: "SOLID Principles in Go Examples",
    description:
      "SOLID is an acronym for the first five object-oriented design (OOD) principles by Robert C. Martin, popularly known as Uncle Bob. These principles, when combined together, make it easy for a programmer to develop software that are easy to maintain and extend. The principles are a subset of many principles promoted by Martin, and are used to describe the responsibilities of software entities. The main idea of the SOLID principles is to make software easier to understand, tolerate to change, great reusablilty, and easier to test.",
    image: "article1.png",
    category: "Software Engineering",
  },
  {
    title: "How to implement pagination in Golang and MySQL",
    description:
      "Pagination is a common feature in web applications. It is used to display a list of items in a paginated format. For example, a list of 1000 items can be displayed in 10 pages, each page containing 100 items. Pagination is used to reduce the number of items displayed on a single page, and to make it easier to navigate through the list of items. In this article, we will learn how to implement pagination in Golang and MySQL.",
    image: "article2.png",
    category: "Backend Engineering",
  },
  {
    title: "The power of double pivot in football tactics",
    description:
      "A double pivot is a formation in football tactics where two central midfielders are positioned close to each other. The double pivot is a common formation in modern football. It is used by many top teams in the world, including Manchester City, Barcelona, and Bayern Munich. In this article, we will learn about the double pivot formation, and how it is used in modern football.",
    image: "article3.jpg",
    category: "Football",
  },
];

const initialize = () => {
  typeWriterAnimation();
  showFooter();
  loadArticles();
};

const typeWriterAnimation = () => {
  let textIndex = 0;
  let charTextIndex = 0;
  let text = textList[textIndex];
  let speed = 100;

  const isTextFullyTyped = (text, charIndex) => {
    return charIndex === text.length;
  };

  const typeCharacter = (text, charIndex) => {
    const profile = document.getElementById("profile");
    profile.innerHTML = text.substring(0, charIndex + 1);
  };

  const addBlinkingCursor = () => {
    const span = document.createElement("span");
    span.id = "blinking-cursor";
    span.setAttribute("aria-hidden", "true");

    const profile = document.getElementById("profile");
    profile.appendChild(span);
  };

  const isAllTextTyped = (textIndex) => {
    return textIndex === textList.length;
  };

  const typeWriter = () => {
    if (!isTextFullyTyped(text, charTextIndex)) {
      typeCharacter(text, charTextIndex);
      addBlinkingCursor();
      charTextIndex++;
      setTimeout(typeWriter, speed);
      return;
    }
    // all characters are typed, move to next text
    setTimeout(() => {
      document.getElementById("profile").innerHTML = "";
      charTextIndex = 0;
      textIndex++;
      if (isAllTextTyped(textIndex)) {
        textIndex = 0;
      }
      text = textList[textIndex];
      typeWriter();
    }, 2000);
  };

  typeWriter();
};

const showFooter = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const footer = document.querySelector("footer");
  footer.innerHTML = `Yerobal Gustaf Sekeon &copy; ${getCurrentYear()}`;
};

const loadArticles = () => {
  const articleContainer = document.querySelector(".article-container");
  const getArticleElement = (article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article-card");
    articleElement.innerHTML = `
      <div class="thumbnail" style="background-image: url('https://storage.googleapis.com/yero-profile-asset/${article.image}')"></div>
        <article>
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <span class="category">${article.category}</span>
          <button class="btn">View More</button>
        </article>`;

    return articleElement;
  };
  articles.forEach((article) => {
    articleContainer.appendChild(getArticleElement(article));
  });
};

document.addEventListener("DOMContentLoaded", initialize);
