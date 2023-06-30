let doc = document

doc.body.innerHTML = "<header></header>"
let header = doc.getElementsByTagName("header")
header = header[0]
console.log(header)

let link = doc.createElement('link')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', 'css/style.css')

doc.head.append(link)



let imgApple = doc.createElement('img')

imgApple.setAttribute('src', 'img/apple.svg')
imgApple.setAttribute('alt', 'Что то пошло не так')

let imgAppleLink = doc.createElement('a')
imgAppleLink.appendChild(imgApple)
imgAppleLink.setAttribute('href', '#')


let imgSearch = doc.createElement('img')

imgSearch.setAttribute('src', 'img/search.svg')
imgSearch.setAttribute('alt', 'Что то пошло не так')

let imgSearchLink = doc.createElement('a')
imgSearchLink.appendChild(imgSearch)
imgSearchLink.setAttribute('href', '#')


let imgBag = doc.createElement('img')

imgBag.setAttribute('src', 'img/bag.svg')
imgBag.setAttribute('alt', 'Что то пошло не так')

let imgBagLink = doc.createElement('a')
imgBagLink.appendChild(imgBag)
imgBagLink.setAttribute('href', '#')



let headerLinkStore = doc.createElement('a')
headerLinkStore.setAttribute('href', '#')
headerLinkStore.innerText = "Store"

let headerLinkMac = doc.createElement('a')
headerLinkMac.setAttribute('href', '#')
headerLinkMac.innerText = "Mac"

let headerLinkiPad = doc.createElement('a')
headerLinkiPad.setAttribute('href', '#')
headerLinkiPad.innerText = "iPad"

let headerLinkiPhone = doc.createElement('a')
headerLinkiPhone.setAttribute('href', '#')
headerLinkiPhone.innerText = "iPhone"

let headerLinkWatch = doc.createElement('a')
headerLinkWatch.setAttribute('href', '#')
headerLinkWatch.innerText = "Watch"

let headerLinkVision = doc.createElement('a')
headerLinkVision.setAttribute('href', '#')
headerLinkVision.innerText = "Vision"

let headerLinkAirPods = doc.createElement('a')
headerLinkAirPods.setAttribute('href', '#')
headerLinkAirPods.innerText = "AirPods"

let headerLinkTVHome = doc.createElement('a')
headerLinkTVHome.setAttribute('href', '#')
headerLinkTVHome.innerText = "TV & Home"

let headerLinkEntertainment = doc.createElement('a')
headerLinkEntertainment.setAttribute('href', '#')
headerLinkEntertainment.innerText = "Entertainment"

let headerLinkAccessories = doc.createElement('a')
headerLinkAccessories.setAttribute('href', '#')
headerLinkAccessories.innerText = "Accessories"

let headerLinkSupport = doc.createElement('a')
headerLinkSupport.setAttribute('href', '#')
headerLinkSupport.innerText = "Support"



let ul = doc.createElement("ul")

let li = doc.createElement("li")

let liList = doc.getElementsByTagName('li')

header.append(ul)

ul.innerHTML = "<li></li>".repeat(14);

liList[0].append(imgAppleLink)
liList[1].append(headerLinkStore)
liList[2].append(headerLinkMac)
liList[3].append(headerLinkiPad)
liList[4].append(headerLinkiPhone)
liList[5].append(headerLinkWatch)
liList[6].append(headerLinkVision)
liList[7].append(headerLinkAirPods)
liList[8].append(headerLinkTVHome)
liList[9].append(headerLinkEntertainment)
liList[10].append(headerLinkAccessories)
liList[11].append(headerLinkSupport)
liList[12].append(imgSearchLink)
liList[13].append(imgBagLink)




header.style.height = "50px"
header.style.backgroundColor = "white"

imgApple.style.width = "30px"
imgSearch.style.width = "30px"
imgBag.style.width = "30px"

li.style.height = "100%"

ul.style.display = "flex"
ul.style.justifyContent = "space-between"
ul.style.alignItems = "center"
ul.style.height = "100%"
ul.style.maxWidth = "1024px"
ul.style.margin = "0 auto"


let a = doc.getElementsByTagName('a')

console.log(a)

for (let i = 0; i < a.length; i++) {
    a[i].style.color = 'black'
    a[i].style.textDecoration = 'none'
    a[i].style.fontSize = '14px'
}