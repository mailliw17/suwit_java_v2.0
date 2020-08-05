function getPilihanComputer() {
    const comp = Math.random(); //Math.random itu generate rentang 0 smpe 1
    if (comp < 0.34) return 'gajah';
    if ( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, p) {
    //tentukan aturan
    if (p == comp) return 'SERI';
    if (p == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (p == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (p == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}  

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' +gambar[i++]+ '.png');
        if( i == gambar.length) i = 0;
    }, 100);
}
    
const pgajah = document.querySelector('.gajah');
pgajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pgajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // console.log('pc :'+pilihanComputer);
    // console.log('orang : '+pilihanPlayer);
    // console.log('hasil : '+hasil);

    putar();

    setTimeout(function() {
        const gambarComp = document.querySelector('.img-komputer');
        gambarComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;

    },1000);
});

const porang = document.querySelector('.orang');
porang.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = porang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // console.log('pc :'+pilihanComputer);
    // console.log('orang : '+pilihanPlayer);
    // console.log('hasil : '+hasil);

    putar();

    setTimeout(function() {

        const gambarComp = document.querySelector('.img-komputer');
        gambarComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    },1000);

});

const psemut = document.querySelector('.semut');
psemut.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = psemut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // console.log('pc :'+pilihanComputer);
    // console.log('orang : '+pilihanPlayer);
    // console.log('hasil : '+hasil);

    putar();

    setTimeout(function() {

        const gambarComp = document.querySelector('.img-komputer');
        gambarComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    },1000);

});