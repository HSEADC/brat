import Airtable from "airtable"
const token = 'patZigvXMUxxtCm9B.add5013feb7015ebbfaf486d9247ed83e02a37a874e03ec81f39946421bb0f1f'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});
var base = Airtable.base('apps8aTTafAVgvrSV');

let content
getArtcilesTeasers().then((data) => {
  content = data

  createArticlesTeasersCards(content)
})

function getArtcilesTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Articles')
      .select({
        maxRecords: 100
      })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Summary'],
            tags: record.fields['Tags'],
            link: record.fields['URL'],
            image: record.fields['Image']
          })
        })
        resolve(content)
      })
  })
}

function createArticlesTeasersCards(content) {
  const container = document.querySelector('.cards_block');
  if (!container) return;

  container.innerHTML = '';

  const cardLine = document.createElement('div');
  cardLine.classList.add('card_line');
  container.appendChild(cardLine);

  content.forEach((stroke) => {
    let { title, description, tags, link, image } = stroke;

    const card = document.createElement('div');
    card.classList.add('card');
    
    if (image) {
      card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`;
    }

    const info = document.createElement('div');
    info.classList.add('info');

    const tagDiv = document.createElement('div');
    tagDiv.classList.add('tag');
    tagDiv.innerText = tags[0] || '';

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title_card');
    titleDiv.innerText = title;

    const descDiv = document.createElement('div');
    descDiv.classList.add('description');
    descDiv.innerText = description;

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('button_more');
    const btnLink = document.createElement('a');
    btnLink.href = link;
    btnLink.innerText = 'Подробнее';
    btnDiv.appendChild(btnLink);

    info.appendChild(tagDiv);
    info.appendChild(titleDiv);
    info.appendChild(descDiv);
    info.appendChild(btnDiv);
    card.appendChild(info);
    cardLine.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    getCategories().then(data => {
        createArticlesTeasersCards(data);
    });
});