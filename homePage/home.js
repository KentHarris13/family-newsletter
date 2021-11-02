let newsletterContainer = document.querySelector('#newsletter-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4200/api/newsletter`

const newsletterCallback = ({data}) => displaynewsletter(data) 

const getAllnewsletter = () => axios.get(baseURL).then(newsletterCallback).catch(errCallback)
const createnewsletter = body => axios.post(baseURL, body).then(newsletterCallback).catch(errCallback)
const deletenewsletter = id => axios.delete(`${baseURL}/${id}`).then(newsletterCallback).catch(errCallback)
const updatenewsletter = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(newsletterCallback).catch(errCallback)


const errCallback = (err) => {
    console.log(err)
}

function submitHandler(e){
    e.preventDefault()
    let addText = document.querySelector('#addText')
    let addURL = document.querySelector('#addURL')

    let bodyObj = {
        addText: addText.value,
        addURL: addURL.value
        
    }

    createnewsletter(bodyObj)

    addText.value = ''
    addURL.value = ''
    
}



function createnewsletterCard(newsletter) {
    const newsletterCard = document.createElement('div')
    newsletterCard.classList.add('newletter-card')
    // console.log(newsletter.imageURL)
    newsletterCard.innerHTML = `<img alt='newletter image' src=${newsletter.addURL} class="newsletter-cover-image"/>
    <p class="addText">${newsletter.addText}</p>
    <button onclick="deletenewsletter(${newsletter.id})">delete</button>
    `


    newsletterContainer.appendChild(newsletterCard)
}

function displaynewsletter(arr) {
    console.log(arr)
    newsletterContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createnewsletterCard(arr[i])
    }
}
 
form.addEventListener('submit', submitHandler)


// if you comment out getAllnewsLetter() you dont get error for line 6
getAllnewsletter()






