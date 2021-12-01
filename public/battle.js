const startBattle = () => 
    location.reload()
    // fetch('/api/import-songs/songs', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     console.log(song)
    //     console.log(response)
    //     // render("homepage", {response})
    // })
    // //   .then(response =>{

    // //     console.log(response)

      
    //   if (response.ok) {
    //     //   console.log("It worked")        
    //  redirect("/home")
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
    // )}
  
  document.getElementById("beginMatch").addEventListener('click', startBattle);