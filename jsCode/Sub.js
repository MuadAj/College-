let count = document.querySelector('.count');
let takenUnit = document.querySelector(".TakenUnit");
let takenSubject = document.querySelector(".lb2 p");
let takenAllSubject = document.querySelector(".lb1 p");
let restSubject = document.querySelector(".lb3 p");
let countUnits = document.querySelector('.count');
let sumUnits = document.querySelector('.sumUnits')
let numOfTakenUnit = 0;
let numOfTakenSubject = 0;


const subjectsMap = [
    {
     code: 'GH2203',
     name: 'ثقافة إسلامية',
     root: null,
     units: 2,
     status: false,
     allowed: false,
    },
    {
     code: '152',
     name: 'مبادئ العلوم السياسية',
     root: null,
     units: 2,
     status: false,
     allowed: false,
    },
    {
     code: 'GH150',
     name: 'اللغة العربية',
     root: null,
     units: 2,
     status: false,
     allowed: false,
    },
    {
     code: 'GH141',
     name: 'اللغة الانجليزية 1',
     root: null,
     units: 2,
     status: false,
     allowed: false,
    } ,
    {
     code: 'GH142',
     name: 'اللغة الانجليزية 2',
     root: 'GH141',
     units: 2,
     status: false,
     allowed: false,
    },
    {
     code: 'GS100',
     name: 'رياضة 1',
     root: null,
     units: 3,
     status: false,
     allowed: false,
    },
    {
     code: 'GS101',
       name: 'رياضة 2',
       root: 'GS100',
      units: 3,
        status: false,
     allowed: false,
    },
    {
     code: 'GS209',
     name: 'جبر خطي والمنطق',
     root: 'GS101',
     units: 3,
     status: false,
     allowed: false,
    },
    {
     code: 'GS242',
     name: 'إحصاء واحتمالات',
     root: 'GS100',
     units: 4,
     status: false,
     allowed: false,
    },
    {
     code: 'CS205',
     name: 'تراكيب منفصلة',
     root: 'GS101',
     units: 3,
     status: false,
     allowed: false,
    },
    {
        code:'CS200',
        name:'مبادئ حاسب',
        root:null,
        units:3,
        status:false,
        allowed:false
    },
{
    code:'GS199',
    name:'مبادئ هندسة كهربائية',
    root:null,
    units:4,
    status:false,
    allowed:false
},
{
    code:"CS201",
    name:"اساسيات برمجة",
    root:null,
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS207',
    name:'لغة C',
    root:'CS201',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS211',
    name:'تحليل نطم',
    root:'CS201',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS318',
    name:'هندسة برمجيات',
    root:'CS211',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS322',
    name:'نظم تشغيل',
    root:'CS318',
    units:4,
    status:false,
    allowed:false
},
{
    code:"CS313",
    name:"إدارة قواعد بيانات",
    root:"CS211",
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS320',
    name:'لغة دلفي',
    root:'CS313',
    units:4,
    status:false,
    allowed:false
},
{
    code:"CS210",
    name:"برمجئة مرئية1 (بيسك)",
    root:"CS207",
    units:4,
    status:false,
    allowed:false
},
{
    code:"CS417",
    name:"برمجئة مرئية2 (VB)",
    root:"CS210",
    units:4,
    status:false,
    allowed:false
},
{
    code:"CS415",
    name:"البرمجة الشيئية باستخدام c++",
    root:"CS207",
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS419',
    name:'لغة جافا',
    root:'CS415',
    units:4,
    status:false,
    allowed:false
},         
{
    code:'CS423',
    name:'تصميم مواقع انترنت',
    root:'CS419',
    units:3,
    status:false,
    allowed:false
},
{
    code:"CS414",
    name:"النمذجة والمحاكاة",
    root:"CS210",
    units:4,
    status:false,
    allowed:false
},
{
    code:"CS427",
    name:"الرسم بالحاسوب",
    root:"CS414",
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS204',
    name:'مقدمة أنظمة رقمية',
    root:'GS199',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS303',
    name:'تنظيم حاسبات',
    root:'CS204',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS319',
    name:'لغة تجميع ASSEMBLY',
    root:'CS303',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS425',
    name:'شبكات حاسوب',
    root:'CS319',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS321',
    name:'معمارية الحاسوب',
    root:'CS319',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS416',
    name:'برمجة نطم',
    root:'CS321',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS312',
    name:'تراكيب بيانات 1',
    root:'CS207',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS418',
    name:'تراكيب بيانات 2',
    root:'CS312',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS426',
    name:'ذكاء اصطناعي',
    root:'CS418',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS308',
    name:'طرق عددية',
    root:'CS207',
    units:4,
    status:false,
    allowed:false
},
{
    code:'CS429',
    name:'مواضيع مختارة 1',
    root:'115',
    units:4,
    status:false,
    allowed:false,
    required:115
},
{
    code:'CS428',
    name:'مواضيع مختارة 2',
    root:'115',
    units:4,
    status:false,
    allowed:false,
    required:115
},
{
    code:'CS430',
    name:'مناهج البحث والتدريب الميداني',
    root:'115',
    units:2,
    status:false,
    allowed:false,
    required:115
},
{
    code:null,
    name:'مشروع التخرج',
    root:'115',
    units:4,
    status:false,
    allowed:false,
    required:115
},
];

const numOfSubjects = subjectsMap.length;

takenAllSubject.textContent = numOfSubjects;

  function unitsSum(subjectsMap) {
    let sum = 0;
  
    subjectsMap.forEach(subject => {
      sum += subject.units;
    });  
    return sum;
  }

  count.textContent = unitsSum(subjectsMap);
  
function connectButtonsWithSubjectsByName(subjectsMap) {
      const buttons = document.querySelectorAll('.btn'); 
    buttons.forEach(button => {
      const subjectName = button.textContent.trim();
      const subject = subjectsMap.find(item => item.name === subjectName);
      if (subject) {
        button.addEventListener('click', (e) => {
            if(e.currentTarget.classList.contains('pressed')){
                e.currentTarget.classList.remove('pressed');
                numOfTakenUnit -= subject.units;
                numOfTakenSubject -= 1;
            }else{
                e.currentTarget.classList.add('pressed');
                numOfTakenUnit += subject.units;
                numOfTakenSubject += 1;
            }

            takenUnit.textContent = numOfTakenUnit;
            takenSubject.textContent = numOfTakenSubject;
            restSubject.textContent = numOfSubjects - numOfTakenSubject;
            countUnits.textContent =sumUnits.textContent - numOfTakenUnit;

            const relatedSubjects = subjectsMap.filter(item => item.root === subject.code);
          relatedSubjects.forEach(relatedSubject => {
            const relatedButton = Array.from(buttons).find(btn => btn.textContent.trim() === relatedSubject.name);
            
            const cr = subjectsMap.filter(item => !isNaN(parseInt(item.root)));
            if(numOfTakenUnit > 115){

                 cr.forEach(c =>{
                    const relatedButton = Array.from(buttons).find(btn => btn.textContent.trim() === c.name);
                    relatedButton.classList.add('animation-class');
                 });
            }else{
                cr.forEach(c =>{
                    const relatedButton = Array.from(buttons).find(btn => btn.textContent.trim() === c.name);
                    relatedButton.classList.remove('animation-class');
                 });

            }

            if(e.currentTarget.classList.contains('pressed')){
                setTimeout(() => {
                    relatedButton.classList.add('animation-class');
                  }, 0);
            }else{
                relatedButton.classList.remove('animation-class');
   
            }
          });
        });
      }
       
    });
  }
  
  connectButtonsWithSubjectsByName(subjectsMap);

  
  