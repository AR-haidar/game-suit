let tanya = true;
while (tanya) {

    // menangkap pilihan user
    let user = prompt('pilih : kertas, gunting, batu');
    // menangkap pilihan computer
    //membangkitakn bilangan random
    let comp = Math.random()
    if (comp < 0.34) {
        comp = 'kertas';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'gunting';
    } else {
        comp = 'batu';
    }

    //rules
    let hasil = '';

    if (user == comp) {

        hasil = 'SERI';

    } else if (user == 'kertas') {

        hasil = (comp == 'batu') ? 'MENANG' : 'KALAH'

    } else if (user == 'gunting') {

        hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH'

    } else if (user == 'batu') {

        hasil = (comp == 'gunting') ? 'MENANG' : 'KALAH'

    } else {
        hasil = "anda memasukkan pilihan yang salah"
    }

    // hasil
    alert(`Kamu = ${user}, Komputer = ${comp} \n KAMU ${hasil}`)

    tanya = confirm('main lagi?');
}

alert('Terimakasih telah bermain');
