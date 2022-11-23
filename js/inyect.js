const column_right = document.querySelector(".column--right");

let fragment = document.createDocumentFragment()


for(let i = 0; i < proyects.length; i++){
  let actual = proyects[i];
    
    let div = document.createElement("ARTICLE");

    div.setAttribute("data-aos", "zoom-in");
    div.classList.add("card", "card--project");


    div.innerHTML = `
    <article data-aos="zoom-in" class="card card--project">

        <div class="card__image-container">
          <img src="../assets/images/${actual.reference}.png" alt="${actual.reference}" class="card__image image--project">
        </div>
        <div class="project">


          <h2 class="card__title">${actual.name}</h2>
          <p class="card__text"> ${actual.description}
          </p>

          <!--
          <div class="project__tags">
            <span class="project__tag">JS</span>
            <span class="project__tag">HTML</span>
            <span class="project__tag">SASS</span>
            <span class="project__tag">Responsive</span>
          </div>

          -->
          
          <div class="buttons">
            <a target="_blank" href="${actual.demo}" class="button button--primary">Demo</a>
            <a target="_blank" href="${actual.github}" class="button button--ghost">Github</a>

          </div>

        </div>
      </article>
    `

  
    console.log(div.children)


    fragment.appendChild(div)
}


column_right.appendChild(fragment)