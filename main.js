  // API and key
  const accessKey = "419cfc85baa862ec9c0e78063d2419a1ec64f085387d6d0c4a73f4dbcd0501a6";
  
  const API_URL = "https://api.unsplash.com/search/photos?query="

  // DOM elements
  const form = document.querySelector('form');

  const input = document.querySelector('input');

  const imageSection = document.querySelector('.imageSection');


  // Listening to the submit event on the form
  form.addEventListener('submit', formSubmitted);

  function formSubmitted (event){
    //prevent default reaction
    event.preventDefault();

    // Grabbing input text
    const searchTerm = input.value;

    // Searching function
    search(searchTerm) //Promise containing 10 arrays objects
      .then(displayImages) 
  }


  function search (searchTerm) {

    // loading the gif image when searching for images
    loadingGif();

    const search_url = `${API_URL}${searchTerm}&client_id=${accessKey}`

    return fetch(search_url)
      .then(response => response.json())
      .then(result => {
        return result.results
      })
  };

  // display images

  function displayImages (images) {

    imageSection.innerText = '';

    // looping through images
    images.forEach( image => {
      const imageElement = document.createElement('img');
      // setting image url to img tag
      imageElement.src = image.urls.small;
      imageSection.appendChild(imageElement);  
    })
    
  }

  function loadingGif (){

    const loadingGif = document.createElement('img');
    loadingGif.src = "loading-vanilla.gif";
    imageSection.appendChild(loadingGif);
  }