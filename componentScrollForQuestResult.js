var elem = document


if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}

//скролл колесом и закрыть форму с результатом 
function onWheel(e) {
  if(e.deltaY == 100){
      document.getElementsByClassName('resultAllFlansBoxFix')[0].setAttribute('style', 'transform: translate(0px, -215px);')
      document.getElementById('upspan_1').classList.add('spanBlock_1up')
      document.getElementById('upspan_1').classList.remove('spanBlock_1')
      document.getElementById('upspan_2').classList.add('spanBlock_2up')
      document.getElementById('upspan_2').classList.remove('spanBlock_2')

      document.getElementsByClassName('searthForFlanets')[0].classList.add('displayNoneClose')
  }
}

// клик на закрыть конечный результатфланца(язык)
document.getElementsByClassName('classForierforReuslt')[0].addEventListener('click', function(){
    document.getElementsByClassName('resultAllFlansBoxFix')[0].setAttribute('style', 'transform: translate(0px, -215px);')

    document.getElementById('upspan_1').classList.add('spanBlock_1up')
    document.getElementById('upspan_1').classList.remove('spanBlock_1')

    document.getElementById('upspan_2').classList.add('spanBlock_2up')
    document.getElementById('upspan_2').classList.remove('spanBlock_2')

})
// наведение на конечный результатфланца(язык)
document.getElementsByClassName('classForierforReuslt')[0].addEventListener('mouseover', function(){
        document.getElementsByClassName('resultAllFlansBoxFix')[0].setAttribute('style', 'transform: translate(0px, 0px);')
        document.getElementById('upspan_1').classList.remove('spanBlock_1up')
        document.getElementById('upspan_1').classList.add('spanBlock_1')
        document.getElementById('upspan_2').classList.remove('spanBlock_2up')
        document.getElementById('upspan_2').classList.add('spanBlock_2') 
})

// клик на закрыть корзину

document.getElementsByClassName('closeModalForBasket')[0].addEventListener('click', function(){
   document.getElementsByClassName('modalBasket')[0].classList.add('displayNoneClose') 
})



// открыть корзину
document.getElementsByClassName('basketforQuest')[0].addEventListener('click', function(){
    document.getElementsByClassName('modalBasket')[0].classList.remove('displayNoneClose') 
 })

//  клик на открытие формы отправки на почту

document.getElementsByClassName('requestForFormQuest')[0].addEventListener('click', function(){
    if(document.getElementsByClassName('containerbasketFornameFlans').length >= 1){
        document.getElementsByClassName('modalBasket')[1].classList.remove('displayNoneClose')
    }

})

// закрытие формы отправки на почту 


document.getElementsByClassName('closeModalForBasket')[1].addEventListener('click', function(){
    document.getElementsByClassName('modalBasket')[1].classList.add('displayNoneClose')
})


document.getElementsByClassName('requestForFormQuest')[1].addEventListener('click', function(){
var boolItem = 0
var boolItem_2 = false
for (let i = 0; i <= 3; i++) {
    if(document.getElementsByClassName('classForboxZakazInside_2')[i].value != ""){
        boolItem++
    }
    if(boolItem == 4){
        boolItem_2 = true
    }
}
    if(boolItem_2){
        requestMail();
        alert('Заявка успешно отправлена')
    }else{
        alert('Заполните поля')
    }
})





 document.getElementsByClassName('openBasket')[0].addEventListener('click', function(){
    document.getElementsByClassName('modalBasket')[0].classList.remove('displayNoneClose') 
    document.getElementsByClassName('modalmessage')[0].classList.add('displayNoneClose') 
 })
 



//  закрыть сообщение о успешном  добавлении в корзину
document.getElementsByClassName('closeMessage')[0].addEventListener('click', function(){
    document.getElementsByClassName('modalmessage')[0].classList.add('displayNoneClose') 
 })

//  клик по добавить ещё 
document.getElementsByClassName('borderRightForButtons')[0].addEventListener('click', function(){
    window.scrollTo(0, 250)
    document.getElementsByClassName('modalmessage')[0].classList.add('displayNoneClose') 
 })

// открыть сообщение о успешном  добавлении в корзину
 document.getElementsByClassName('buttonForRequestQuize')[0].addEventListener('click', function(){

var cunstBool = false
var x = 0
for (let i = 0; i < document.getElementsByClassName('inpitemgrForResultForFlanets').length; i++) {

    if(document.getElementsByClassName('inpitemgrForResultForFlanets')[i].value != ''){

        x++
        if(x == document.getElementsByClassName('inpitemgrForResultForFlanets').length){
            cunstBool= true
        }
    }else{
        alert('НЕ работает')
        i = document.getElementsByClassName('inpitemgrForResultForFlanets').length
    }  


    
}
if(cunstBool){
    document.getElementsByClassName('textFlanetsMess')[0].innerText = 'Фланец '+document.getElementsByClassName('inpitemgrForResultForFlanets')[0].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[1].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[2].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[3].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[4].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[5].value+' ГОСТ 33259'

    document.getElementsByClassName('modalmessage')[0].classList.remove('displayNoneClose') 
    basketItemcreate();
}
 })

//  клик на открыть дополнительные опции
 document.getElementById('dopOpt').addEventListener('click', function(){

     document.getElementById('dopOpt_2').classList.toggle('displayNoneClose')

 })

// клик по поиску 
document.getElementsByClassName('inputForSearth')[0].addEventListener('click', function(){
document.getElementsByClassName('inputForSearth')[0].classList.add('inputForSearthAktive')
document.getElementsByClassName('boxFlanetsForSearth')[0].classList.add('inputForSearthAktive_2')
document.getElementsByClassName('searthForFlanets')[0].classList.remove('displayNoneClose')
})
//  обработка события поиска вбивать символы

var boolTester = true





document.getElementsByClassName('inputForSearth')[0].oninput = function name() {


    var word = document.getElementsByClassName('inputForSearth')[0].value
    var wordSearth = new RegExp(word,"y");
    var wodrSection = 0;



    for (let wordElem = 0; wordElem < word.length; wordElem++) {

        if(word[wordElem] == '-'){
            wodrSection++
        }  
    }

    if(word != ''){
        if (boolTester) {
            removeComponentSearth();
        }

switch(wodrSection) {
    case 0:  // DN
    tip_01.forEach((currentSEarth) => {
        let elem = JSON.stringify(currentSEarth.DN)
        if (elem.match(wordSearth)) {
            var str_01 = 'Фланец' + ' ' + elem
            createSeart(str_01)
        }
    }) 
      break;

    case 1:  // PN

    if(word[word.length -1] == '-'){
        var elemRedact = word.replace('-', '');
        tip_01.forEach((currentSEarth) => {
            let elem  = JSON.stringify(currentSEarth.DN)
            if(elemRedact == elem){
                pNnum.forEach((currentSEarthInside) => {
                    if((currentSEarthInside <= currentSEarth.maxPN) && (currentSEarthInside >=currentSEarth.minPN)){
                        var str_01 = 'Фланец'+ ' ' + elemRedact + '-'+ currentSEarthInside
                        createSeart(str_01)
                    }
                })
            }
        })
    }else{
        elemRedactStart = word.split("-")[0];
        elemRedact = word.split("-")[1];
        var wordSearth = new RegExp(elemRedact,"y");
                    pNnum.forEach((currentSEarthInside) => {
                        if(JSON.stringify(currentSEarthInside).match(wordSearth)){
                        var str_01 = 'Фланец'+ ' ' + elemRedactStart + '-'+ currentSEarthInside
                        createSeart(str_01)
                    }
                    
                })
   
    }
  
      break;

      case 2:  // ТИП фланца
      if(word[word.length -1] == '-'){
        elemRedactStart = word.split("-")[0];
        elemRedact = word.split("-")[1];
        tip_01.forEach(element => {
            if((element.DN == elemRedactStart) && (element.minPN <= elemRedact) && (element.maxPN >= elemRedact)){
                  var str_01 = 'Фланец'+ ' ' + elemRedactStart + '-'+ elemRedact + '-'+ '01'
                        createSeart(str_01)
            }

        });
        tip_02.forEach(element => {
            if((element.DN == elemRedactStart) && (element.minPN <= elemRedact) && (element.maxPN >= elemRedact)){
                  var str_01 = 'Фланец'+ ' ' + elemRedactStart + '-'+ elemRedact + '-'+ '02'
                        createSeart(str_01)
            }
        });

        tip_03_04.forEach(element => {
            if((element.DN == elemRedactStart) && (element.minPN <= elemRedact) && (element.maxPN >= elemRedact)){
                  var str_01 = 'Фланец'+ ' ' + elemRedactStart + '-'+ elemRedact + '-'+ '03/04'
                        createSeart(str_01)
            }
        });
        tip_03_04.forEach(element => {
            if((element.DN == elemRedactStart) && (element.minPN <= elemRedact) && (element.maxPN >= elemRedact)){
                  var str_01 = 'Фланец'+ ' ' + elemRedactStart + '-'+ elemRedact + '-'+ '03/04'
                        createSeart(str_01)
            }
        });
        tip_11.forEach(element => {
            if((element.DN == elemRedactStart) && (element.minPN <= elemRedact) && (element.maxPN >= elemRedact)){
                  var str_01 = 'Фланец'+ ' ' + elemRedactStart + '-'+ elemRedact + '-'+ '11'
                        createSeart(str_01)
            }
        });


    }

    

        break;

        case 3:  // ТИП фланца
        if(word[word.length -1] == '-'){
          elemRedactStart = word.split("-")[0];
          elemRedact = word.split("-")[1];

          var boolM = true

            // пробегает по раду 1
          arrForColomsFlans.forEach(element => {
              if((element.DN == elemRedactStart) && (element.PN == elemRedact)){
                if(boolM){
                    var str_01 = 'Фланец '+ document.getElementsByClassName('inputForSearth')[0].value + '1'
                    createSeart(str_01)
                    boolM = false
                } 
              }
          });
          

        //  пробегает по 2 типу
        boolM = true
        arrForColomsFlans_2.forEach(element => {
            if((element.DN == elemRedactStart) && (element.PN == elemRedact)){
              if(boolM){
                  var str_01 = 'Фланец '+ document.getElementsByClassName('inputForSearth')[0].value + '2'
                  createSeart(str_01)
                  boolM = false
              } 
            }
        });

      }
        break;

    case 4:  // Уплотнительная поверхность
        if (word[word.length - 1] == '-') {
            elemRedactStart = word.split("-")[0];
            elemRedact = word.split("-")[1];
            elemTip = word.split("-")[2]; // переменная типа фланца
            elemColons = word.split("-")[3]; // переменная ряд фланца


            if (elemColons == 1) {
                // пробегает по раду 1
                arrForColomsFlans.forEach(element => {
                    if ((element.DN == elemRedactStart) && (element.PN == elemRedact)) {
                        var str_01 = 'Фланец ' + document.getElementsByClassName('inputForSearth ')[0].value + element.тип
                        createSeart(str_01)
                    }
                });
            }
            if (elemColons == 2) {
                //   должен пробегать по 2 ряду
                arrForColomsFlans_2.forEach(element => {
                    if ((element.DN == elemRedactStart) && (element.PN == elemRedact) && (element.tip == elemTip)) {
                        for (let g = 0; g < element.result.length; g++) {
                            if (g % 2 == 0) {
                                var str_01 = 'Фланец ' + document.getElementsByClassName('inputForSearth ')[0].value + element.result[g]
                                createSeart(str_01)
                            }
                        }
                    }
                });
            }

        }
        break;
            
            case 5:  // Марка стали
            if(word[word.length -1] == '-'){
              elemRedactStart = word.split("-")[0];
              elemRedact = word.split("-")[1];
                arrMetallInside.forEach(element => {
                        var str_01 ='Фланец '+ document.getElementsByClassName('inputForSearth ')[0].value + element
                              createSeart(str_01)
              });
          }
              break;
              case 6:  // группа контроля

              if(word[word.length -1] == '-'){
  
  
                elemRedactStart = word.split("-")[0];
                elemRedact = word.split("-")[1];
                  arrKontrolya.forEach(element => {
                          var str_01 = 'Фланец '+ document.getElementsByClassName('inputForSearth ')[0].value + element 
                                createSeart(str_01)
                                
                });

                
                
            }
                break;






    default:
        removeComponentSearth();
      break;
  }




if(wodrSection == 7){
    document.getElementsByClassName('boxAddBasket')[0].classList.remove('displayNoneClose')
}else{
    document.getElementsByClassName('boxAddBasket')[0].classList.add('displayNoneClose')
}





for (let k = 0; k < document.getElementsByClassName('itemSearth').length; k++) {

    document.getElementsByClassName('itemSearth')[k].addEventListener('click', function(){
        elemRedactStart = this.textContent.split("Фланец ")[1];
        document.getElementsByClassName('inputForSearth')[0].value = elemRedactStart + '-'
        // this = document.getElementsByClassName('inputForSearth')[0]
        name();
    })  
    
}









    }






}



 


document.getElementsByClassName('boxAddBasket')[0].addEventListener('click', function(){

    // 
        var basketContainer = document.getElementById('basketItems')
    
        let divContainer = document.createElement('div')
        divContainer.classList.add('containerbasketFornameFlans')
    
        let div_1 = document.createElement('div')
        div_1.classList.add('textbasketFornameFlans')
        div_1.innerText = document.getElementsByClassName('textFlanetsMess')[0].innerText = 'Фланец ' + document.getElementsByClassName('inputForSearth')[0].value + ' ГОСТ 33259'
    
        let div_2 = document.createElement('div')
    
        let div_2_1 = document.createElement('input')
        div_2_1.setAttribute('type', 'number')
        div_2_1.value = document.getElementById('nuMberForSearth').value
        div_2_1.classList.add('inpNumbasketFornameFlans')
    
    
        div_2.append(div_2_1)
    
        let div_3 = document.createElement('div')
    
    
        let div_3_1 = document.createElement('img')
        div_3_1.setAttribute('src', 'editItemBasket.png')
        div_3_1.classList.add('img_1NumbasketFornameFlans')
        div_3.append(div_3_1)
    
        let div_4 = document.createElement('div')
    
        let div_4_1 = document.createElement('div')
        // div_4_1.setAttribute('src', 'closebasketItem.png')
        div_4_1.classList.add('img_2NumbasketFornameFlans')
        div_4.append(div_4_1)
    
        divContainer.append(div_1)
        divContainer.append(div_2)
        divContainer.append(div_3)
        divContainer.append(div_4)
        basketContainer.append(divContainer)

        document.getElementsByClassName('modalBasket')[0].classList.remove('displayNoneClose')

        for (let z = 0; z < document.getElementsByClassName('img_2NumbasketFornameFlans').length; z++) {
            document.getElementsByClassName('img_2NumbasketFornameFlans')[z].addEventListener('click', function(){

                this.parentElement.parentElement.remove()

            })
            
        }
    
    })



  


  
function removeComponentSearth(){
    for (let deb = 0; deb < 10; deb++) {
        for (let searth = 0; searth < document.getElementsByClassName('searthForFlanets')[0].children.length; searth++) {
            document.getElementsByClassName('searthForFlanets')[0].children[0].remove(); 
        }
    }
}

// Функция создания эллементов поиска
function createSeart(x){

    var divSEarth = document.createElement('div')
    divSEarth.classList.add('itemSearth')
    divSEarth.innerText = x



    document.getElementsByClassName('searthForFlanets')[0].append(divSEarth)
}

 function basketItemcreate(){
     

    var basketContainer = document.getElementById('basketItems')

    let divContainer = document.createElement('div')
    divContainer.classList.add('containerbasketFornameFlans')


    let div_1 = document.createElement('div')
    div_1.classList.add('textbasketFornameFlans')
    div_1.innerText = document.getElementsByClassName('textFlanetsMess')[0].innerText = 'Фланец '+document.getElementsByClassName('inpitemgrForResultForFlanets')[0].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[1].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[2].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[3].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[4].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[5].value+' ГОСТ 33259'


       let div_2 = document.createElement('div')

       let div_2_1 = document.createElement('input')
       div_2_1.setAttribute('type', 'number')
       div_2_1.value =  parseInt(document.getElementById('kol_vo').value)  
       div_2_1.classList.add('inpNumbasketFornameFlans')


    div_2.append(div_2_1)

    let div_3 = document.createElement('div')

    
       let div_3_1 = document.createElement('img')
       div_3_1.setAttribute('src', 'editItemBasket.png')
       div_3_1.classList.add('img_1NumbasketFornameFlans')
       div_3.append(div_3_1)

       let div_4 = document.createElement('div')

       let div_4_1 = document.createElement('img')
       div_4_1.setAttribute('src', 'closebasketItem.png')
       div_4_1.classList.add('img_2NumbasketFornameFlans')
       div_4.append(div_4_1)


    divContainer.append(div_1)
    divContainer.append(div_2)
    divContainer.append(div_3)
    divContainer.append(div_4)

    divContainer.setAttribute('data-nameFlanets', document.getElementsByClassName('textFlanetsMess')[0].innerText = 'Фланец '+document.getElementsByClassName('inpitemgrForResultForFlanets')[0].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[1].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[2].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[3].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[4].value+'-'+document.getElementsByClassName('inpitemgrForResultForFlanets')[5].value+' ГОСТ 33259')
    divContainer.setAttribute('data-description', document.getElementById('flanetsDescription').value) // комментарий
    divContainer.setAttribute('data-cols', document.getElementById('kol_vo').value) // кол-во штук
    divContainer.setAttribute('data-shpilki', arrDopObject[1].shpilki) // нужны ли шпильки
    divContainer.setAttribute('data-prokladka', arrDopObject[0].prokladka) // прокладка

if(arrDopObject[2] != undefined){
    divContainer.setAttribute('data-DOPOTSII-trebovania', arrDopObject[2].dopTrebovaniya) // ДОПОЛНИТЕЛЬНЫЕ ТРЕБОВАНИЯ К КОНТРОЛЮ
}

if(arrDopObject[3]!= undefined){
    divContainer.setAttribute('data-DOPOTSII-forFlans_01_02', arrDopObject[3].forFlans_01_02) // ДЛЯ ФЛАНЦЕВ ТИПОВ 01,02
}

if(arrDopObject[3] != undefined){
    divContainer.setAttribute('data-DOPOTSII-forFlans_03', arrDopObject[3].forFlans_03) // ДЛЯ ФЛАНЦЕВ ТИПА 03

}
if((arrDopObject[4] != undefined)&&(arrDopObject[5] != undefined)){
    divContainer.setAttribute('data-DOPOTSII-truba', arrDopObject[4].trubaMaterial+' '+arrDopObject[5].trubaRazmer) // ПРИСОЕДИНИТЕЛЬНАЯ ТУБА
}





if(arrDopObject[6] != undefined){
    divContainer.setAttribute('data-DOPOTSII-pokritie', arrDopObject[6].pokritie) // ПОКРЫТИЕ
}

// arrDopObject.splice(0,arrDopObject.length) // очистить массив

    basketContainer.append(divContainer)




    //  клик на удалить фланец в корзине
for (let item = 0; item < document.getElementsByClassName('img_2NumbasketFornameFlans').length; item++) {

    document.getElementsByClassName('img_2NumbasketFornameFlans')[item].addEventListener('click', function(){
        this.parentElement.parentElement.remove()
    })  
}



 }







