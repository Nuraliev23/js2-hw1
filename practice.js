let passport = document.querySelector('.passport')

let passport_inner  = document.createElement('div')
passport.append(passport_inner)
passport_inner.classList.add('passport_inner')

let front_in = document.createElement('div')
passport_inner.append(front_in)
front_in.classList.add('front_in')

let image1 = document.createElement('img')
image1.src = './img_avatar.png'
front_in.append(image1)
image1.classList.add('image1')

let menuText = document.createElement('div')
front_in.append(menuText)
menuText.classList.add('menuText')

let country = document.createElement('h1')
country.innerHTML = 'Republic of Tajikistan'
menuText.append(country)
country.classList.add('country')
 
let surname = document.createElement('h3')
surname.innerHTML = 'NURALIEV'
menuText.append(surname)
surname.classList.add('surname')

let myname = document.createElement('h3')
myname.innerHTML = 'RAHIMJON'
menuText.append(myname)
myname.classList.add('myname')

let nation = document.createElement('div')
menuText.append(nation)
nation.classList.add('nation')

let pol = document.createElement('h5')
pol.innerHTML = 'pol / M'
nation.append(pol)
pol.classList.add('pol')

let nationality = document.createElement('h5')
nationality.innerHTML = 'nationality / TJK'
nation.append(nationality)
nationality.classList.add('nationality')

let birth = document.createElement('h5')
birth.innerHTML = 'birthday / 04.05.2004'
nation.append(birth)
birth.classList.add('birth')

let placebirth = document.createElement('h5')
placebirth.innerHTML = 'placebirth / TJK'
nation.append(placebirth)
placebirth.classList.add('placebirth')


let etibor = document.createElement('div')
menuText.append(etibor)
etibor.classList.add('etibor')

let dateOfis = document.createElement('h5')
dateOfis.innerHTML = 'date of issue / 01.09.2020'
etibor.append(dateOfis)
dateOfis.classList.add('dateOfis')

let dateOfex = document.createElement('h5')
dateOfex.innerHTML = 'date of expire / 31.08.2030'
etibor.append(dateOfex)
dateOfex.classList.add('dateOfex')

let nationId = document.createElement('h5')
nationId.innerHTML = 'National ID No / 3500107069722'
etibor.append(nationId)
nationId.classList.add('nationId')

let imgpodpis = document.createElement('img')
imgpodpis.src = './signature-free-img.png'
menuText.append(imgpodpis)
imgpodpis.classList.add('imgpodpis')

let front_back = document.createElement('div')
passport_inner.append(front_back)
front_back.classList.add('front_back')

let addres = document.createElement('h1')
addres.innerHTML = 'Region Khatlon / District Vose / Settlement Hulbuk / Street Sino-№28'
front_back.append(addres)
addres.classList.add('addres')

let Status = document.createElement('h3')
Status.innerHTML = 'Status   /   SINGLE'
front_back.append(Status)
Status.classList.add('Status')

let IDnumber = document.createElement('h3')
IDnumber.innerHTML = 'IDnumber   /   196159815'
front_back.append(IDnumber)
IDnumber.classList.add('IDnumber')

let authority = document.createElement('h3')
authority.innerHTML = 'Authority / DIA IN VISE DISTRICT'
front_back.append(authority)
authority.classList.add('authority')

let endId = document.createElement('h3')
endId.innerHTML = 'IDTJKA0445088213500107069722<<040504M3008317TJK<<2NURALIEV<<RAHIMJON'
front_back.append(endId)
endId.classList.add('endId')