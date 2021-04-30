function changeOuterLinks() {
  const navElement = document.querySelector('#link-list');
  const links = document.querySelectorAll('#link-list a');

  links.forEach(link => {
    if (link.innerHTML.includes('outer-link')) {
      link.setAttribute('target', '_blank');
      link.innerHTML = `<strong>${link.innerHTML}</strong>`;
    }
    return link;
  });

  navElement.style.display = 'flex';
  navElement.style.flexDirection = 'column';
  navElement.style.width = '30%';
  navElement.style.margin = '0 auto';
  navElement.style.border = '1px solid blue';
  navElement.style.padding = '16px';
}

export { changeOuterLinks };