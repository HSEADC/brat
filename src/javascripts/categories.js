import Airtable from "airtable"
const token = 
'patZigvXMUxxtCm9B.800fe155635a29733a0f2a963f7d5b7a57c08287a24d5043485d520aa6323068'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});
var base = Airtable.base('apps8aTTafAVgvrSV');

async function getCategories() {
  try {
    const records = await base('Articles').select({
      maxRecords: 100,
    }).firstPage();

    return records.map(record => ({
      id: record.id,
      title: record.get('Title') || 'Без названия',
      description: record.get('Description') || '',
      tags: record.get('Tags') || [],
      link: record.get('URL') || '#',
      image: record.get('Image')?.[0]?.url || ''
    }));
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return [];
  }
}

function createArticlesTeasersCards(content) {
  const container = document.querySelector('.O_Articles');
  if (!container) return;

  container.innerHTML = '';

  content.forEach((stroke) => {
    let { title, description, tags, link, image } = stroke;

    const articleHeader = document.createElement('h3');
    articleHeader.classList.add('A_IndexH3');
    articleHeader.innerText = title;

    const articleTags = document.createElement('div');
    articleTags.classList.add('C_IndexSectionCardTags');

    tags.forEach((tag) => {
      const articleTag = document.createElement('span');
      articleTag.classList.add('A_IndexSectionCardTag');
      articleTag.innerText = tag;
      articleTags.appendChild(articleTag);
    });

    const articleCard = document.createElement('a');
    articleCard.classList.add('O_IndexSectionCard');
    articleCard.href = link;
    
    if (image) {
        articleCard.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`;
    }

    articleCard.appendChild(articleHeader);
    articleCard.appendChild(articleTags);

    container.appendChild(articleCard);
  });
}

getCategories().then(data => {
    createArticlesTeasersCards(data);
});