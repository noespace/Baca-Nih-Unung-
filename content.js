/*
  EDIT TULISAN DI FILE INI.

  - label  = tulisan kecil di atas judul
  - title  = judul halaman
  - body   = isi halaman

  Tag yang boleh dipakai di body:
  <p>parafgraf</p>
  <strong>tebal</strong>
  <em>miring</em>
  <blockquote>kutipan</blockquote>
  <div class="note">catatan warna kuning</div>
  <div class="note pink">catatan warna pink</div>
  <div class="big-text">tulisan besar</div>
*/

const STORY_PAGES = [
  {
    label: "01 — laporan gangguan",
    title: "SETIAP HARI GUE GATEL MAU NGOMONG.",
    body: `
      <p>Website ini dibuat karena setiap hari gue gatel banget mau ngomong sama lu, tapi setiap gue berusaha mendekat, lu jutekin.</p>
      <p>Terus gue mundur. Terus lama lama kesel juga. Terus besoknya gatel lagi.</p>
      <div class="note">Siklusnya muter terus dan sangat tidak efisien.</div>
      <p>Jadi yaudah. Karena ngomong langsung susah, gue bikin beginian aja </p>
    `
  },
  {
    label: "02 — sebelumnya",
    title: "MARI KITA LURUSKAN.",
    body: `
      <p>Waktu itu gue negur lu karena (menurut gue) cara lu nagih Sisil kurang etis. Dibahas di grup dan diceletukin terus, dan karena gua juga sedang berusaha memahami posisi ssisil.</p>
      <p>Gue ngerti kalau di Mikro hal begitu biasa. Gue juga ngerti kalau menurut lu itu cuma bercanda dan lu sama sekali enggak berniat jahat.</p>
      <div class="big-text">Tapi kalau sesuatu sudah biasa dilakukan banyak orang, bukan berarti otomatis jadi benar juga.</div>
      <p>Dan sampai sekarang gue masih berpikir kaya gitu.</p>
    `
  },
  {
    label: "03 — tapi nih ya, Khusnul",
    title: "GUE BUKAN MERASA LEBIH BAIK DARI LU.",
    body: `
      <p>Gue juga enggak merasa diri gue paling bijaksana, paling bermoral, paling paham tata cara berkehidupan sosial, atau tiba-tiba turun dari langit bawa etika pertemanan.</p>
      <div class="note pink"><strong>Gue ngomong karena lu temen gue.</strong></div>
      <p>Menurut gue, sebagai temen kita boleh saling ngingetin kalau ada sesuatu yang terasa kurang pas. Lu juga boleh melakukan hal yang sama ke gue, bahkan gua menuntut lu melakukan hal yang sama ke gue kalo gue ada salah.</p>
      <p>Yang gue komentarin waktu itu adalah <strong>satu tindakan lu pada satu kejadian.</strong></p>
      <p>Bukan seluruh kepribadian lu. Bukan our friendship (ceileh). Dan apalagi bukan menyatakan bahwa selama ini gue enggak nyaman main sama lu.</p>
    `
  },
  {
    label: "04 — kesalahan penerjemahan",
    title: "TERUS LU KOK LOMPATAN BERPIKIRNYA JAUH BANGET?",
    body: `
      <p>Dari:</p>
      <blockquote>“Gue ngomong supaya kita sama-sama lebih mindful.”</blockquote>
      <p>Tiba-tiba sampai ke:</p>
      <blockquote>“Kalau udah enggak nyaman dan enggak sefrekuensi, ya enggak usah dipaksain main lagi.”</blockquote>
      <div class="big-text">LAH. ALLAHU ALLAHU.</div>
      <p>Gimana dah, masa satu kegelisahan langsung dianggep sebagai pemutusan hubungan pertemanan?</p>
      <p><strong>GASEMUA ORANG YANG MENGUNGKAPKAN PERASAAN ARTINYA GAMAU MAIN LAGI, WOY.</strong></p>
      <p>Kalau gue memang sudah enggak nyaman atau enggak srek sama lu, gue enggak akan repot-repot ngomong sepanjang ini. Gue tinggal <em>dor</em> lu dari kehidupan gue.</p>
      <p>Tapi kan enggak. Gue masih di sini dan menunggu lo ngomong lagi anj.</p>
      <div class="note">Bahkan bikin website lagi. Tolong dihargai.</div>
    `
  },
  {
    label: "05 — iya, gue emang kesel",
    title: "SATU GESEKAN KOK LANGSUNG MAU SELESAI?",
    body: `
      <p>Gue kesel karena rasanya cuma gara-gara gue menyampaikan satu hal yang mengganjal, terus lu menjauh dan mendiamkan gue sampai sekarang.</p>
      <p>Kayak pertemanan kita enggak boleh punya gesekan sedikit pun. Sekali ada yang ngomong, langsung dianggap ga nyaman, ga sefrekuensi, dan lebih baik selesai.</p>
      <p>Padahal gue ngga pengen gitu.</p>
      <p>Gue cuma lagi berusaha ngobrol aja, dan kalo lu ga setuju gapapa</p>
      <p>Udah. Itu doang.</p>
      <div class="note pink">Enggak ada agenda deleting Khusnul Khotimah dari hidup gue.</div>
    `
  },
  {
    label: "06 — pernyataan resmi Aliefi Mutiara Syafitri",
    title: "GUA MASIH MAU MAIN SAMA LU SAMPE SELAMANYA.",
    body: `
      <ul class="agenda">
        <li>Masih mau karaoke.</li>
        <li>Masih mau jalan-jalan.</li>
        <li>Masih mau jajan.</li>
        <li>Masih mau main sama Cleya dan Ion.</li>
        <li>Masih mau ngobrolin hal-hal enggak penting yang entah kenapa bisa panjang banget.</li>
        <li>Masih mau ketawa sama lu.</li>
        <li>Masih mau kesel sama lu juga sesekali karena ya namanya juga manusia.</li>
      </ul>
      <div class="big-text">Pokoknya masih mau temenan.</div>
      <p>Gue enggak pernah memutuskan bahwa gara-gara kejadian itu kita jadi enggak cocok. Itu kesimpulan yang lu buat sendiri, terus lu diemin gue terus. mau nangis anj faklah</p>
      <div class="note"><strong> GUA MENOLAK.</strong></div>
    `
  },
  {
    label: "07 — terkait Kuromi dan coklat",
    title: "ITU BUKAN SOGOKAN YA.",
    body: `
      <p>Bukan upaya suap supaya lu mau ngomong lagi.</p>
      <p>Bukan juga barang bukti manipulasi emosional.</p>
      <p>Walaupun kita lagi enggak berantem pun, gue akan tetap beli dan kasih ke lu.</p>
      <p>Karena yaa...</p>
      <p>Ekhm.</p>
      <div class="big-text">Gue sayang sama lu.</div>
      <p>Jijik silakan. Muntah juga gapapa. Tapi fakta tetaplah fakta.</p>
      <p>Gue menyayangi lu seperti teman kandung. Bahkan nyaman seperti di dalam rahim ibu seperti yang udah gua bilang.</p>
      <div class="note pink"><strong>IYA GUE TAU LU BAKAL BILANG NAJIS. DIEM DULU.</strong></div>
    `
  },
  {
    label: "08 — jadi begini",
    title: "GUE ENGGAK MINTA MAAF KARENA PUNYA KEGELISAHAN.",
    body: `
      <p>Dan gue enggak mau minta maaf karena sudah menyampaikannya ke lu. Karena menurut keyakinan gue, mengingatkan teman bukan sesuatu yang salah.</p>
      <p>Tapi gue ngerti kalau cara gue ngomong waktu itu mungkin bikin lu merasa sedang dianggap jahat atau dihakimi.</p>
      <div class="note"><strong>ITU BUKAN MAKSUD GUE KAK.</strong></div>
      <p>Gue enggak sedang menempatkan diri sebagai orang yang lebih baik dari lu. Gue cuma orang yang waktu itu merasa ada sesuatu yang perlu disampaikan ke temennya.</p>
      <p>Lu enggak harus setuju sama gue. Lu boleh tetap merasa kalau hal itu biasa aja. Gue juga boleh tetap merasa itu kurang pas.</p>
      <p>Kita enggak harus punya isi kepala yang sama persis untuk tetap bisa temenan jajan dan keliling jawa barat kan.</p>
    `
  },
  {
    label: "09 — terakhir",
    title: "DARI SISI GUE, GUE TETEP MAU TEMENAN.",
    body: `
      <p>Gue tahu gue enggak bisa maksa lu untuk tetap berteman sama gue. Tapi lu adalah salah satu teman yang paling gua hargai keberadaannya karena lu sangat genuine, walaupun caranya kadang berbeda dan ada gengssi gengsinya, tapi gua tau lu orang baik, dan gengsi lu itu kiyut sih jujur</p>
      <p>Kalau lu masih kesel atau butuh waktu, yaudah. Gue bisa ngerti.</p>
      <p>Tapi gue agak tidak terima kalau lu tiba-tiba memutuskan sendirian bahwa gue sudah enggak nyaman, kita sudah enggak sefrekuensi, lalu pertemanan ini selesai.</p>
      <div class="big-text">Enak aja. Minimal rapat dulu. Jajan dulu.</div>
      <p>Cleya dan Ion juga belum memberikan suara.</p>
      <div class="note pink">Sini peluk 3000×.<br><strong>AKU NYAMAN SEPERTI DI DALAM RAHIM IBU.</strong><br>50000×.</div>
    `
  }
];

const ENDING_RESPONSES = {
  yes: `<strong>YEY! TEMENAN :D</strong><br>Peluk diterima. Retur tidak tersedia. Karaoke dan jajan akan dijadwalkan kemudian.`,
  time: `<strong>Yaudah. Waktunya diterima.</strong><br>Tapi status teman kandung belum gue cabut. Gue tunggu sampai lu enggak jutek lagi.`
};
