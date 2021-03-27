const css = `
  .TitleImage, .ArticleItem-image, .RichContent-cover-inner img {
    display: none;
  }
`
const style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(css))

document.head.appendChild(style)

// Open link without confirmation
document.addEventListener('click', (event) => {
  const target = event.target
  const link = queryLinkElement(target)

  if (link) {
    const href = link.getAttribute('href')

    if (href && href.indexOf('link.zhihu.com/?target=') >= 0) {
      event.preventDefault()

      window.open(decodeURIComponent(href.split('target=')[1]), '_blank')
    }
  }
})

function queryLinkElement(element) {
  if (!element) {
    return null
  }

  const closest = element.closest('a')

  if (closest && closest.tagName.toLowerCase() === 'a') {
    return closest
  } else {
    return null
  }
}
