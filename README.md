# Ketupat untuk Khusnul

Website statis tanpa framework. Bisa langsung dipasang di GitHub Pages.

## Mengganti tulisan

Buka `content.js`. Semua isi cerita berada di dalam `STORY_PAGES`.

- `label`: tulisan kecil di atas judul
- `title`: judul besar halaman
- `body`: isi halaman
- `ENDING_RESPONSES`: respons untuk dua tombol pada halaman terakhir

Simpan perubahan, lalu buka `index.html` untuk melihat hasilnya.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder ini ke bagian paling atas repository. Pastikan `index.html` tidak berada di dalam folder tambahan.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu beberapa menit. Tautan website akan muncul di halaman yang sama.

## Struktur file

```text
ketupat-untuk-khusnul/
├── index.html
├── content.js       # edit semua tulisan di sini
├── script.js        # navigasi dan interaksi
├── style.css        # tampilan
└── assets/
    └── ketupat.png
```
