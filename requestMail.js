




var allRequest = []
function requestMail() {


    for (let index = 0; index < document.getElementsByClassName('containerbasketFornameFlans').length; index++) {
        var nameFlanets = document.getElementsByClassName('containerbasketFornameFlans')[index].children[0].textContent;
        var colVo = document.getElementsByClassName('containerbasketFornameFlans')[index].children[1].children[0].value

        var shpilki_Request = false;
        var prokladka_Request = false;
        var prokladka_Request = false;
        var description_Request = false;
        var dopotsiiforflans0102 = false
        var dopotsiitrebovania = false
        var dopotsiiforflans03 = false
        var dopotsiitruba = false
        var dopotsiipokritie = false
        var itemRequest = []
        itemRequest.push({'Название Фланца': nameFlanets})
        itemRequest.push({'Кол-во': colVo})
        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-shpilki') != undefined) {
            shpilki_Request = true;

            itemRequest.push({'Шпильки': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-shpilki')})
        }

        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-description') != undefined) {
            description_Request = true;
            itemRequest.push({'Описание': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-description')})
        }

        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-prokladka') != undefined) {
            prokladka_Request = true;
            itemRequest.push({'Прокладка': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-prokladka')})
        }

        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-trebovania') != undefined) {
            dopotsiitrebovania = true;
            itemRequest.push({'Требования': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-trebovania')})
        }

        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-forflans_01_02') != undefined) {
            dopotsiiforflans0102 = true;
            itemRequest.push({'Для фланцев типов 01,02': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-forflans_01_02')})
        }

        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-forflans_03') != undefined) {
            dopotsiiforflans03 = true;
            itemRequest.push({'Для фланцев типа 03': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-forflans_03')})
        }
        
        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-truba') != undefined) {
            dopotsiitruba = true;
            itemRequest.push({'Присоединительная труба': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-truba')})
        }

        if (document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-pokritie') != undefined) {
            dopotsiipokritie = true;
            itemRequest.push({'Покрытие': document.getElementsByClassName('containerbasketFornameFlans')[index].getAttribute('data-dopotsii-pokritie')})
        }


        allRequest.push(itemRequest)
    }


    // var bodyBlock =  '000__000 <br/>123'
    var bodyBlock = '<p>Заявка на фланец</p>'  
    + 'Адрес' + document.getElementById('kAders').value + '<br/>'
    + 'Телефон' + document.getElementById('kPhone').value  + '<br/>'
    + 'Имя' + document.getElementById('kTel').value + '<br/>'
    + 'Email' + document.getElementById('kMail').value + '<br/>'
    allRequest.forEach(element => {
        for (let allreq = 0; allreq < element.length; allreq++) {
            bodyBlock = '<span>'+ bodyBlock + JSON.stringify(element[allreq]) + '</span>'
        }
        bodyBlock =  '<div>'+ bodyBlock +'</div>' + '<br/>'
    });






    console.log(bodyBlock)

   // Создаём объект XMLHttpRequest
   var xhr = new XMLHttpRequest();

   // Инициализация запроса
   xhr.open("POST", 'sendEmail.php', true);
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

   // Инициализация обработчика события
   xhr.onreadystatechange = function () {
       // здесь код js который выполнится по завершению запроса
   };
   // послать запрос
   xhr.send(JSON.stringify({bodyBlock}));

}