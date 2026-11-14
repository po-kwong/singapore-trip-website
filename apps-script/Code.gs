function doGet() {
  const template = HtmlService.createTemplateFromFile('Index');
  const photos = ALBUM_PHOTOS.map(renderPhoto_);
  template.albumUrl = ALBUM_URL;
  template.hero = photos[0];
  template.exchange = photos.find(photo => photo.id === '1en7XRXSR44JhD_8KN9Mr02u8E21t9wqC');
  template.food = photos.find(photo => photo.id === '1Izj0g4bX7OMv-WAOiFBFsCEP9fYxN3U0');
  template.culture = photos.find(photo => photo.id === '1I5Shi2tvUHxjebEHM5J2pg-TeQlIyaKA');
  template.photos = photos;
  template.photosJson = JSON.stringify(photos).replace(/</g, '\\u003c');
  return template.evaluate()
    .setTitle('新加坡英語學習團｜Singapore English Study Tour')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function renderPhoto_(photo) {
  const id = encodeURIComponent(photo.id);
  const thumbnail = 'https://drive.google.com/thumbnail?id=' + id + '&sz=';
  return {
    ...photo,
    src: thumbnail + 'w1400',
    thumb: thumbnail + 'w240',
    driveUrl: 'https://drive.google.com/file/d/' + id + '/view'
  };
}

function include_(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
