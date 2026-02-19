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

    const content = records.map(record => ({
      id: record.id,
      title: record.get('Title'),
      description: record.get('Description'),
      tags: record.get('Tags'),
      URL: record.get('URL'),
      image: record.get('Image')
    }));

    console.log('Данные из Airtable получены:', content);
    return content;

  } catch (error) {
    console.error('Ошибка при получении данных из Airtable:', error);
    return [];
  }
}