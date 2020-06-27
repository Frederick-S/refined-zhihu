const css = `
  .TitleImage {
    display: none;
  }
`
const style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(css))

document.head.appendChild(style)

document.addEventListener('click', (event) => {
  const target = event.target

  if (target && (target.tagName.toLowerCase() === 'a' || target.parentElement.tagName.toLowerCase() === 'a')) {
    const href = target.getAttribute('href') || target.parentElement.getAttribute('href')

    if (href && href.indexOf('link.zhihu.com/?target=') >= 0) {
      event.preventDefault()

      window.open(decodeURIComponent(href.split('target=')[1]), '_blank')
    }
  }
})
