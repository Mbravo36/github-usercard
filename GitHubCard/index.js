import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp => {
    document.querySelector('.cards').appendChild(gitCard(resp.data));
  })
  .catch(err => console.error(err))
}

  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/





/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitCard (obj){
  //instantiating elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const usersNameTwo = document.createElement('p');
  const usersLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const usersGitAddress = document.createElement('a');
  const usersFollowers = document.createElement('p');
  const usersFollowing = document.createElement('p');
  const usersBio = document.createElement('p');

  //Style
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  usersNameTwo.classList.add('userName');

  //setting class names, attributes, and text
  userImg.src = obj.avatar_url;
  userName.textContent = obj.name;
  usersLocation.textContent = obj.location;
  usersNameTwo.textContent = obj.login;
  userProfile.textContent = 'Profile: ';
  usersGitAddress.textContent = `${obj.url}`;
  usersGitAddress.href = obj.html_url;
  usersFollowers.textContent = `Followers: ${obj.followers}`;
  usersFollowing.textContent = `Following: ${obj.following}`;
  usersBio.textContent = `${obj.bio}`;


  //hierarchy
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(usersNameTwo);
  cardInfo.appendChild(usersLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(usersGitAddress);
  cardInfo.appendChild(usersFollowers);
  cardInfo.appendChild(usersFollowing);
  cardInfo.appendChild(usersBio);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/