import { blogs } from '../data/blogs-data'

for(let blog of blogs){

document.querySelector('.wrapper').innerHTML += 
`
<figure class="blog-card">
          <img class="blog-image" src="${blog.image}">
          <figcaption class="blog-description">
            <div class="date">${blog.date}</div>
            <h2 class="blog-description__title">${blog.title}</h2>
            <p class="description"> ${blog.description} </p>
            <div class="blog-info">
              <div class="blog-duration__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                <span class="blog-duration__time"> ${blog.duration}</span>
                <div class="blog-type">${blog.type}</div>
              </div>
              <a href="songs.html" class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </a>
            </div>
</figcaption>
`
}


