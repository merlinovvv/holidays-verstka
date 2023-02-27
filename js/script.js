// const form = document.getElementById('holiday-form');
// const ul = document.getElementById('holidays');

// form.addEventListener('submit', event => {
//   event.preventDefault(); // Предотвращаем отправку формы по умолчанию

//   const year = form.year.value;

//   fetch('https://holidayapi.com/v1/countries?pretty&key=5e4a5263-ff0b-4082-bf44-fa6625074213')
//     .then(response => response.json())
//     .then(data => {
//       const countries = data.countries;

//       // Создаем массив промисов для выполнения запросов к API для каждой страны
//       const promises = countries.map(country => {
//         return fetch(`https://holidayapi.com/v1/holidays?pretty&country=${country.code}&year=${year}&key=5e4a5263-ff0b-4082-bf44-fa6625074213`)
//           .then(response => response.json())
//           .then(data => {
//             return {
//               name: country.name,
//               holidays: data.holidays
//             };
//           });
//       });

//       // Объединяем результаты запросов для каждой страны
//       Promise.all(promises)
//         .then(results => {
//           // Очищаем список праздников перед добавлением новых
//           while (ul.firstChild) {
//             ul.removeChild(ul.firstChild);
//           }

//           results.forEach(result => {
//             const countryName = result.name;
//             const holidays = result.holidays;

//             const li = document.createElement('li');
//             li.innerHTML = `<h3>${countryName}</h3>`;

//             const ul2 = document.createElement('ul');
//             holidays.forEach(holiday => {
//               const li2 = document.createElement('li');
//               li2.textContent = `${holiday.date} - ${holiday.name}`;
//               ul2.appendChild(li2);
//             });

//             li.appendChild(ul2);
//             ul.appendChild(li);
//           });
//         });
//     });
// });
