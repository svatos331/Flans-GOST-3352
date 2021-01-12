var allArrStal = [

    arrStal0 = [
        {name: 'Ст3сп ', desc: 'не ниже 2-й категории'},
        {name: '20 '},
        {name: '20K '},
        {name: '20KA '}
    ],
    arrStal1 =[
        {name: '20ЮЧ'},
        {name: '15ГС'},
        {name: '16ГС '},
        {name: '10Г2С1'},
        {name: '17ГС '},
        {name: '12ХМ '},
        {name: '15ХМ '},
        {name: '09Г2С'},
        {name: '10Г2 '}
    ],
    arrStal2 =[
        {name: '15Х5М'}
    ],
    arrStal3 =[
        {name: '08Х18Н10Т'},
        {name: '12Х18Н9Т'},
        {name: '12Х18Н10Т'},
        {name: '10Х18Н9'},
        {name: '08Х22Н6Т'},
        {name: '08X21Н6М2Т'},
        {name: '15Х18Н12С4ТЮ'},
        {name: '06ХН28МДТ'},
        {name: '10Х17Н13М3Т'},
        {name: '10Х17Н13М2Т'},
        {name: '07Х20Н25М3Д2ТЛ (ЭИ 943Л)'},
    ]
]


var itemForKalk = document.getElementsByClassName('markastali_hover')
var valueitemForKalk  = document.getElementsByClassName('markastali_values')


for (let i = 0; i < itemForKalk.length; i++) {
    itemForKalk[i].addEventListener('mouseover', function() {
        


        for (let z = 0; z < document.getElementsByClassName('hoverKalculator').length; z++) {
            document.getElementsByClassName('hoverKalculator')[z].classList.remove('hoverKalculator')
            
        }


        this.classList.add('hoverKalculator')

        for (let i = 0; i < valueitemForKalk.length; i++) {
            for (let k = 0; k < 20; k++) {
                if(valueitemForKalk[i] == undefined){
                    k = 20
                }else{
                    valueitemForKalk[i].remove()
                }  
            }
        }

    allArrStal[i].forEach(element => {
        var divElem = document.createElement('div')    
        divElem.classList.add('markastali_values')
        divElem.classList.add('markastali')
        divElem.innerText = element.name
        document.getElementsByClassName('classFlexMy_2')[0].append(divElem)
        
    });




// клик на марку
    for (let i = 0; i < valueitemForKalk.length; i++) {
        valueitemForKalk[i].addEventListener('click', function(){


            for (let j = 0; j < valueitemForKalk.length; j++) {
                valueitemForKalk[j].classList.remove('hoverKalculator')
                
            }


            this.classList.add('hoverKalculator')

            document.getElementById('resultForKalkulator').innerText = this.innerText

            document.getElementsByClassName('inpitemgrForResultForFlanets')[5].value = this.innerText
        })
        
    }



    }) 



}







