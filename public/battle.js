async function startBattle() {
    const response =  fetch('/api/import-songs/songs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    //   .then(response =>{
    //     console.log(response)

      
      if (response.ok) {
        //   console.log("It worked")        
          await redirect("/home")
      } else {
        alert(response.statusText);
      }
    }
    // )}
  
  document.getElementById("beginMatch").addEventListener('click', startBattle);