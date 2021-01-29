var Mahasiswa = {
    nama: 'Fadil',
    kelas: '3D',
    alamat: 'Desa Pangkah Kecamatan Pangkah Kabupaten Tegal Rt 21 Rw 05',
    displayType: function() {
      console.log('Nama '+this.nama);
      console.log('Kelas '+this.kelas);
      console.log('Alamat '+this.alamat);
      console.log('Hobi '+ this.hobi);
      console.log('');
    }
  };

  var mahasiswa1 = Object.create(Mahasiswa);
  mahasiswa1.displayType();
  
  var mahasiswa2 = Object.create(Mahasiswa);
  mahasiswa2.nama = 'Alip';
  mahasiswa2.kelas = '3C';
  mahasiswa2.alamat = 'Desa Jembayat Kecamatan Margasari Kabupaten Tegal Rt 21 Rw 03';
  mahasiswa2.hobi = 'Berenang';
  mahasiswa2.displayType();
