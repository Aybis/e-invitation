import ImageOne from '../images/1.jpg';
import ImageTwo from '../images/2.JPG';
import ImageThree from '../images/3.jpg';
import ImageFour from '../images/4.jpg';
import ImageFive from '../images/5.jpg';
import ImageBCA from '../images/bca.png';
import ImageBNI from '../images/bni.png';
import ImageCuciTangan from '../images/cuci_tangan.png';
import ImageFrisca from '../images/frisca.png';
import ImageHandsanitizer from '../images/handsanitizer.png';
import ImageJagaJarak from '../images/jaga_jarak.png';
import ImageMasker from '../images/masker.png';
import ImageMuchtar from '../images/muchtar.png';
import ImageWA from '../images/wa.png';

// eslint-disable-next-line import/no-anonymous-default-export

const dataUs = [
  {
    name: 'Frisca Ayuning Putri',
    father: 'Agus Susanto',
    mother: 'Supatmi',
    imageSrc: ImageFrisca,
  },
  {
    name: 'Abdul Muchtar Astria',
    father: 'Tugimin',
    mother: 'Dwi Hastuti Ningsih',
    imageSrc: ImageMuchtar,
  },
];

const dataStory = [
  {
    name: '2012',
    title: 'Begin of Our Story!',
    description: `
      <p>
      Awal pertemuan kami tak seindah kisah romansa bertajuk cinta, Biasa saja, tak ada yang istimewa, bertepat di SMA 5 di gedung baru Lantai 3. Kisah awal kedekatan kami semakin terasa. Setiap hari tidak pernah absen bertukar cerita, hingga pada suatu ketika kami memutuskan menjalin hubungan  pada tanggal <b> 12-12-2012</b> .</p>`,
    imageSrc: ImageOne,
    imageAlt: ImageOne,
  },
  {
    name: '2014',
    title: 'Attack of Titans!',
    description: `<p>
    Tak terasa <b> 2 tahun </b> berlalu, Dia dipilih untuk menjadi Putra daerah di Bogor, sedangkan saya ditarik secara paksa ke tempat orang tua saya di Semarang. 
    kami melanjutkan hubungan ini secara LDR terpisah jarak sejauh 473,4 KM. Melanjtukan pendidikan, berjuang untuk meraih cita cita, menggapai impian.
    </p> 
      <b>Dan disinilah ego kami dipertaruhkan !!!</b>`,
    imageSrc: ImageTwo,
    imageAlt: 'Simbolis',
  },
  {
    name: '2018',
    title: 'Utopia or Distopia!',
    description: `
    <p>Wahh akhirnya kami LuLuss 🎓 saatnya kami kembali dari jarak ini, kembali melangkah lebih tinggi, berada di fase transisi. untuk menjadi sosok yang lebih baik. Seseorang akan berubah. Pesan kami, jangan pergi.. Biasakan lahh !. 2 kata yang kami peggang <b>"Bertahan"</b> dan <b>"Berjuang"</b>. 💪💪 </p>`,
    imageSrc: ImageThree,
    imageAlt: 'Simbolis',
  },
  {
    name: '2021',
    title: 'One Step Closer !',
    description: `
      <span>
      One step Closer,<b> 12-09-2021</b> kami mempertemukan dua keluarga, setelah <b>9 Tahun</b> lamanya kami bersama, tanpa mengira bahwa ikatan kami sekuat ini. Kami sadar masi banyak hal yang perlu dibenahi, diperbaiki, namun kekurangan masing masing dari kami tidak akan pernah menjadi masalah dan tidak akan terlihat 🥰.
      </span>`,
    imageSrc: ImageFour,
    imageAlt: 'Simbolis',
  },
];

const dataGallery = [
  {
    imageSrc: ImageOne,
    imageAlt: 'Simbolis',
    title: 'Lorem Ipsum',
    desription:
      'LoremEnim officia sint quis cupidatat proident id ad deserunt voluptate Lorem proident proident anim.',
  },
  {
    imageSrc: ImageTwo,
    imageAlt: 'Simbolis',
    title: 'Lorem Ipsum',
    desription:
      'LoremEnim officia sint quis cupidatat proident id ad deserunt voluptate Lorem proident proident anim.',
  },
  {
    imageSrc: ImageThree,
    imageAlt: 'Simbolis',
    title: 'Lorem Ipsum',
    desription:
      'LoremEnim officia sint quis cupidatat proident id ad deserunt voluptate Lorem proident proident anim.',
  },
  {
    imageSrc: ImageFour,
    imageAlt: 'Simbolis',
    title: 'Lorem Ipsum',
    desription:
      'LoremEnim officia sint quis cupidatat proident id ad deserunt voluptate Lorem proident proident anim.',
  },
  {
    imageSrc: ImageFive,
    imageAlt: 'Simbolis',
    title: 'Lorem Ipsum',
    desription:
      'LoremEnim officia sint quis cupidatat proident id ad deserunt voluptate Lorem proident proident anim.',
  },
];

const dataImage = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];

const dataProtokol = [
  {
    name: 'Menggunakan Masker',
    description: 'Adipisicing veniam consectetur minim.',
    imageSrc: ImageMasker,
    imageAlt: 'menggunakan masker',
  },
  {
    name: 'Menjaga Jarak',
    description: 'Adipisicing veniam consectetur minim.',
    imageSrc: ImageJagaJarak,
    imageAlt: 'menjagajarak',
  },
  {
    name: 'Membawa Handsanitizer',
    description: 'Adipisicing veniam consectetur minim.',
    imageSrc: ImageHandsanitizer,
    imageAlt: 'handsanitizer',
  },
  {
    name: 'Mencuci Tangan',
    description: 'Adipisicing veniam consectetur minim.',
    imageSrc: ImageCuciTangan,
    imageAlt: 'cucitangan',
  },
];

const dataRekening = [
  {
    id: 1,
    name: 'Frisca Ayuning P.',
    bank: 'BCA',
    noRek: '3530053031',
    an: 'Frisca Ayuning Putri',
    imageSrc: ImageBCA,
  },
  {
    id: 2,
    name: 'Abdul Muchtar Astria',
    bank: 'BNI',
    noRek: '0355166803',
    an: 'Abdul Muchtar Astria',
    imageSrc: ImageBNI,
  },
  {
    id: 3,
    name: 'Frisca Ayuning Putri',
    bank: 'BNI',
    noRek: '0900671250',
    an: 'Frisca Ayuning Putri',
    imageSrc: ImageBNI,
  },
  {
    id: 4,
    name: 'Whatsapp',
    bank: 'BNI',
    noRek: '081*********',
    an: 'Frisca Ayuning Putri',
    imageSrc: ImageWA,
  },
];

const exportedObject = {
  dataUs,
  dataStory,
  dataProtokol,
  dataGallery,
  dataRekening,
  dataImage,
};

export default exportedObject;
