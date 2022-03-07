'use strict';


let getDay=+prompt('Введите день(ДД)');
if(isNaN(getDay)){
	alert('Введи число уже')
}else if(getDay==false){
	alert('Вообще ничего не ввёл!');
};
let getMonth=+prompt('Введите месяц(ММ)')-1;
if(isNaN(getMonth)){
	alert('Введи число уже')
}else if(getMonth===null){
	alert('Вообще ничего не ввёл!')
};
let getYear=+prompt('Введите год(ГГГГ)');
if(isNaN(getYear)){
	alert('Введи число уже')
}else if(getYear<1970){
	alert( 'год должен быть после 1970')
}else if(getYear==false){
	alert('Вообще ничего не ввёл!')
};

let date=new Date(getYear,getMonth,getDay);

const currentYear=date.getFullYear();

const currentDate=date.getDate();

const weekDay=function getWeekDay(date){
	let days=[
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'];
	return days[date.getDay()]
}

const month=function getMonth(date){
	let months=[
		'Января',
		'Февраля',
		'Марта',
		'Аперля',
		'Мая',
		'Июня',
		'Июля',
		'Августа',
		'Сентября',
		'Октября',
		'Ноября',
		'Декабря'
	];
	return months[date.getMonth()]
}


const week=function getNumberOfWeek(){
	let date1=date.getTime();
	let currentYear=date.getFullYear();
	let date1_2=new Date(currentYear,0,1);
	let date2=date1_2.getTime();
	return Math.round(((date1-date2)/(24*3600*1000*7)));
}


alert(weekDay(date)+', '+ week(date)+' неделя,'+currentDate+ ' ' +month(date)+' '+currentYear+' года');


