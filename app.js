
const github = new Github;

const ui = new UI;

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup',loadUsers);

function loadUsers(e) {
  const userText = e.target.value;

  if(userText !== ''){
    
    github.getUser(userText)
     .then((data) => {
      // console.log(data);
       if(data.profile.message === 'Not Found'){
         ui.showAlert('User not Found','alert alert-danger');
       } else {
         ui.showProfile(data.profile);
         ui.showRepos(data.repos);
       }
     })
  } else {
   ui.clearProfile();
  }

}