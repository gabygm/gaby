const fechData = () => {
    fetch('https://api.github.com'.then(resp => {
        resp.json().then(data => {
            console.log(data)
        })
    }))
}

const fetchDatas = () => {
    const res = await fetch('https://api.github.com');
    const data = await resp.json();
    console.log(data)

}

fetchDatas();
