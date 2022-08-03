function tugas25() {
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya :", angka.join());
    console.log("Ascending :", angka.sort().join());
    console.log("Descending :", angka.reverse().join());
    var angkaflt = angka.filter(array => {
        return array > 10
    });
    console.log("Filter > 10 :", angkaflt.join());
}
tugas25()