"use strict"
// fetch data from API example
fetch('http://localhost:8080/api/sales-performance')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

function init() {
  const dashboardLink = document.querySelector('#dashboard-link');
  const formsLink = document.querySelector('#forms-link');
  const chartTestLink = document.querySelector('#chart-test-link');

  dashboardLink.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default link behavior
    changePage("dashboard.html");
  });

  formsLink.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default link behavior
    changePage("forms.html");
  });

  chartTestLink.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default link behavior
    changePage("chart-test.html");
  });

  dashboardLink.click();

  // drawChart();
}

function updateMainContent(content) {
  const mainContent = document.querySelector('.main-content');
  setInnerHTML(mainContent,content);
  //mainContent.innerHTML = content;
}

function changePage(filePath) {
  fetch(filePath)
  .then(response => response.text())
  .then(data => updateMainContent(data));
}

function setInnerHTML(elm, html) {
  elm.innerHTML = html;
  
  Array.from(elm.querySelectorAll("script"))
    .forEach( oldScriptEl => {
      const newScriptEl = document.createElement("script");
      
      Array.from(oldScriptEl.attributes).forEach( attr => {
        newScriptEl.setAttribute(attr.name, attr.value) 
      });
      
      const scriptText = document.createTextNode(oldScriptEl.innerHTML);
      newScriptEl.appendChild(scriptText);
      
      oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
  });
}





