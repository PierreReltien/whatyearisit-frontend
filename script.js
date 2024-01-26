fetch('https://whatyearisit-backend-tau-three.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log(data)
    document.querySelector('body').innerHTML += `
    <div id="year">${data.year}</div>
    `
    return data;
})