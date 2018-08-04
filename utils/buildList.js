function buildList (node, entity, collection) {
  const container = document.querySelector(node);

  for (let i = 0; i < collection.length; i += 1) {
    const currentText = collection[i].replace('.html', '')
    const currentLink = `${entity}/${collection[i]}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href=${currentLink}>${currentText}</a>`

    container.appendChild(listItem);
  }
}

window.buildList = buildList;
