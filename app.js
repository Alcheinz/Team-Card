// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Ayşe Yıldız',
    job: 'GRAFİK TASARIMCISI',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "Doğanın renkleri ve şehir hayatının karmaşası tasarımlarımda buluşuyor. Yaratıcılığımı sınırlayan hiçbir şey yok. Poster tasarımında yeni trendlere her zaman açığım, hayal gücüm sınır tanımaz.",
  },
  {
    id: 2,
    name: 'Zeynep Kaya',
    job: 'SOSYAL MEDYA UZMANI',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Hashtag’lerle aramda güçlü bir bağ var. Sosyal medya stratejileriyle markaları büyütmeye, kitlenin ilgisini çekmeye odaklanıyorum. Yaratıcı içerik ve etkili kampanyalar için çalışıyorum.',
  },
  {
    id: 3,
    name: 'Emre Demir',
    job: 'YAZILIM GELİŞTİRİCİSİ',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Kodu yazarken adeta bir puzzle çözer gibi düşünüyorum. Sürekli gelişen yazılım dünyasında yeniliklere ayak uydurmak için tutkuyla çalışıyorum. Backend projeleri ve veri tabanı tasarımı ilgi alanım.',
  },
  {
    id: 4,
    name: 'Ahmet Yılmaz',
    job: 'PROJE YÖNETİCİSİ',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Ekip çalışmasında verimliliği en üst düzeye çıkarmak için projeleri titizlikle yönetiyorum. Zaman yönetimi, risk analizi ve problem çözme konularında yetkinim. Başarıya giden yol her zaman detaylarda gizli.',
  },
];

// select items from html
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0;

// load initial item 

window.addEventListener("DOMContentLoaded",function(){
  showPerson()
})

// show person based on item 

function showPerson(person){
  const item = reviews[currentItem];
  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}

// show next person 

nextBtn.addEventListener('click',function(){
  currentItem++
  if(currentItem > reviews.length - 1 ){
    currentItem = 0;
  }
  showPerson();
})

prevBtn.addEventListener('click',function(){
  currentItem--
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
})

randomBtn.addEventListener('click', function(){
currentItem = Math.floor(Math.random() * reviews.length);
console.log(currentItem);
showPerson();
})
