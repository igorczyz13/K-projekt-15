// // Pobieranie elementów i zmienna root
// 1. Pobierz przycisk scroll-to-top
// 2. Stwórz zmienną root. Za pomocą tej zmiennej bedziemy sterowali zmienna --scroll-innerWidth, ktora dodalismy w css.
// Co przypisac do tej zmiennej sprawdz w Google

// Funkcje
// 1. Stworz funkcje do obslugi naszego scroll bara
// W funkcji bedziemy musieli miec dostep do takich wartosci jak

// *scroll (jak daleko zajechalismy)
// *ile pikseli mozemy scrollowac (bedziemy musieli poznac wysokosc calej strony oraz wysokosc viewportu, a nastepnie odjac od siebie te wartosci, dzieki czemu otrzymamy wynik, ktory bedzie iloscia pikseli, o ile mozemy scrollowac w dol)

// 2. Jesli poprawnie pobierzesz powyzsze wartosci, stworz nowa zmienna, a w niej dzialanie:(nasz obecny scroll/ilosc pikseli pozostalych do scrollowania) * 100

// 3. Za pomoca root.style zmien wartosc zmiennej --scroll-width.
// Szerokosc naszego scroll-bara powinna byc ustalana za pomoca wyniku dzialania z punktu 2.


const btn = document.querySelector('.scroll-to-top')
let root = document.documentElement;

const handleScrollBar = () => {
    const scroll = window.scrollY

    const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
    
    const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)

    root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

    if(scrollBarWidth > 80) {
        btn.classList.add('active')
    } else {
        btn.classList.remove('active')
    }
}

const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', handleScrollBar)
btn.addEventListener('click', scrollToTop)