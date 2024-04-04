let jokes =[]
let imgAr = []
let img = null
let vits = null

let henteInfo = async () => {
    console.log("hente start")

    const url= "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10"
    const data = await fetch (url)
    const json = await data.json()
    jokes = await json
    console.log("hente slutt")
    console.log(" ")

    

    const url1 = "https://dog.ceo/api/breeds/image/random"
    const data1 = await fetch (url1)
    const json1 = await data1.json()
    imgAr = json1
    console.log(" ")
    console.log(imgAr)
    img = imgAr.message
}