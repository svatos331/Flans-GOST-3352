
var pNnum = [1, 2.5, 6, 10, 16, 25,40,63,100,160,200,250];

var valueMathPNnum = 0




for (let i = 0; i < pNnum.length; i++) {
    var divStickElem = document.createElement('div')
    divStickElem.classList.add('numberPNDown')
    divStickElem.innerText = pNnum[i]
    divStickElem.setAttribute('style', '    transform: translate(0px, '+valueMathPNnum+'px);')


    document.getElementsByClassName('PnPAdDum')[0].append(divStickElem)
    valueMathPNnum = valueMathPNnum + (408/pNnum.length) 
}

var tip_01 =  
[
    {DN: 10,  maxPN: 25, minPN:1},
    {DN: 15,  maxPN: 25, minPN:1},
    {DN: 20,  maxPN: 25, minPN:1},
    {DN: 25,  maxPN: 25, minPN:1},
    {DN: 32,  maxPN: 25, minPN:1},
    {DN: 40,  maxPN: 25, minPN:1},
    {DN: 50,  maxPN: 25, minPN:1},
    {DN: 65,  maxPN: 25, minPN:1},
    {DN: 80,  maxPN: 25, minPN:1},
    {DN: 100, maxPN: 25, minPN:1},
    {DN: 125, maxPN: 25, minPN:1},
    {DN: 150, maxPN: 25, minPN:1},
    {DN: 200, maxPN: 25, minPN:1},
    {DN: 250, maxPN: 25, minPN:1},
    {DN: 300, maxPN: 25, minPN:1},
    {DN: 350, maxPN: 25, minPN:1},
    {DN: 400, maxPN: 25, minPN:1},
    {DN: 450, maxPN: 25, minPN:1},
    {DN: 500, maxPN: 25, minPN:1},
    {DN: 600, maxPN: 25, minPN:1},
    {DN: 700, maxPN: 25, minPN:1},
    {DN: 800, maxPN: 25, minPN:1},
    {DN: 900, maxPN: 16,  minPN:1},
    {DN: 1000,maxPN: 16,  minPN:1}
];
var tip_02 =  
[
    {DN: 10,  maxPN: 25, minPN: 1},
    {DN: 15,  maxPN: 25, minPN: 1},
    {DN: 20,  maxPN: 25, minPN: 1},
    {DN: 25,  maxPN: 25, minPN: 1},
    {DN: 32,  maxPN: 25, minPN: 1},
    {DN: 40,  maxPN: 25, minPN: 1},
    {DN: 50,  maxPN: 25, minPN: 1},
    {DN: 65,  maxPN: 25, minPN: 1},
    {DN: 80,  maxPN: 25, minPN: 1},
    {DN: 100, maxPN: 25, minPN: 1},
    {DN: 125, maxPN: 25, minPN: 1},
    {DN: 150, maxPN: 25, minPN: 1},
    {DN: 200, maxPN: 25, minPN: 1},
    {DN: 250, maxPN: 25, minPN: 1},
    {DN: 300, maxPN: 25, minPN: 1},
    {DN: 350, maxPN: 25, minPN: 1},
    {DN: 400, maxPN: 25, minPN: 1},
    {DN: 450, maxPN: 25, minPN: 1},
    {DN: 500, maxPN: 25, minPN: 1},
    {DN: 600, maxPN: 25, minPN: 2.5},
];
var tip_03_04 =  
[
    {DN: 10,  maxPN: 25, minPN: 2.5},
    {DN: 15,  maxPN: 25, minPN: 2.5},
    {DN: 20,  maxPN: 25, minPN: 2.5},
    {DN: 25,  maxPN: 25, minPN: 2.5},
    {DN: 32,  maxPN: 25, minPN: 2.5},
    {DN: 40,  maxPN: 25, minPN: 2.5},
    {DN: 50,  maxPN: 25, minPN: 2.5},
    {DN: 65,  maxPN: 25, minPN: 2.5},
    {DN: 80,  maxPN: 25, minPN: 2.5},
    {DN: 100, maxPN: 25, minPN: 2.5},
    {DN: 125, maxPN: 25, minPN: 2.5},
    {DN: 150, maxPN: 25, minPN: 2.5},
    {DN: 200, maxPN: 25, minPN: 2.5},
    {DN: 250, maxPN: 25, minPN: 10},
    {DN: 300, maxPN: 25, minPN: 10},
    {DN: 350, maxPN: 25, minPN: 10},
    {DN: 400, maxPN: 25, minPN: 10},
    {DN: 450, maxPN: 25, minPN: 10},
    {DN: 500, maxPN: 25, minPN: 10},
    {DN: 600, maxPN: 25, minPN: 10},
];
var tip_11 =  
[
    {DN: 10,  maxPN: 250, minPN:1},
    {DN: 15,  maxPN: 250, minPN:1},
    {DN: 20,  maxPN: 250, minPN:1},
    {DN: 25,  maxPN: 250, minPN:1},
    {DN: 32,  maxPN: 250, minPN:1},
    {DN: 40,  maxPN: 250, minPN:1},
    {DN: 50,  maxPN: 250, minPN:1},
    {DN: 65,  maxPN: 250, minPN:1},
    {DN: 80,  maxPN: 250, minPN:1},
    {DN: 100, maxPN: 250, minPN:1},
    {DN: 125, maxPN: 250, minPN:1},
    {DN: 150, maxPN: 250, minPN:1},
    {DN: 200, maxPN: 250, minPN:1},
    {DN: 250, maxPN: 250, minPN:1},
    {DN: 300, maxPN: 160, minPN:1},
    {DN: 350, maxPN: 160, minPN:1},
    {DN: 400, maxPN: 160, minPN:1},
    {DN: 450, maxPN: 100, minPN:1},
    {DN: 500, maxPN: 100, minPN:1},
    {DN: 600, maxPN: 63, minPN:1},
    {DN: 700, maxPN: 63, minPN:1},
    {DN: 800, maxPN: 63, minPN:1},
    {DN: 900, maxPN: 63, minPN:1},
    {DN: 1000,maxPN: 63, minPN:1}
]
var tip_21 =  
[
    {DN: 10,  maxPN: 25, minPN:2.5},
    {DN: 15,  maxPN: 25, minPN:2.5},
    {DN: 20,  maxPN: 25, minPN:2.5},
    {DN: 25,  maxPN: 25, minPN:2.5},
    {DN: 32,  maxPN: 25, minPN:2.5},
    {DN: 40,  maxPN: 25, minPN:2.5},
    {DN: 50,  maxPN: 25, minPN:2.5},
    {DN: 65,  maxPN: 25, minPN:2.5},
    {DN: 80,  maxPN: 25, minPN:2.5},
    {DN: 100, maxPN: 25, minPN:2.5},
    {DN: 125, maxPN: 25, minPN:2.5},
    {DN: 150, maxPN: 25, minPN:2.5},
    {DN: 200, maxPN: 25, minPN:2.5},
    {DN: 250, maxPN: 25, minPN:2.5},
    {DN: 300, maxPN: 25, minPN:2.5},
    {DN: 350, maxPN: 25, minPN:2.5},
    {DN: 400, maxPN: 25, minPN:2.5},
    {DN: 450, maxPN: 25, minPN:2.5},
    {DN: 500, maxPN: 25, minPN:2.5},
    {DN: 600, maxPN: 25, minPN:2.5},
    {DN: 700, maxPN: 25, minPN:2.5},
    {DN: 800, maxPN: 25, minPN:2.5},
    {DN: 900, maxPN: 25, minPN:2.5},
    {DN: 1000,maxPN: 25, minPN:2.5}
]




// var fullTip = tip_01 //переменная типа фланца


var containter = document.getElementsByClassName('centerRound')[0]
var radRound = 360

// func for PN value





function createElementDN(tip){

    for (let debbug = 0; debbug < 20; debbug++) {
        for (let index = 0; index < document.getElementsByClassName('curSor_1').length; index++) {
            document.getElementsByClassName('curSor_1')[0].remove()
        }
        
    }
    var radItem = radRound / tip.length
    var radStep = 0 

    tip.forEach((currentItem)=> {


        var stick = document.createElement('div')
        var stickInside = document.createElement('div')
        var textDN = document.createElement('div')
        var spanDN = document.createElement('span')

        stick.classList.add('curSor_1');
        stick.setAttribute('style', 'transform: rotate('+ radStep +'deg) translateX(-186px);')

        stickInside.classList.add('curSor_2')

        textDN.classList.add('textDN')
        textDN.setAttribute('style', 'transform: rotate('+ (-radStep + 180) +'deg)')

        spanDN.innerText = currentItem.DN 
        spanDN.classList.add('spanClassDN')

        textDN.append(spanDN)
        stickInside.append(textDN)
        stick.append(stickInside)
        containter.append(stick)

        radStep += radItem
    })
}

function tip_01Debbug(arraForOpacity){




    for (let elem = 0; elem < document.getElementsByClassName('classFlexForQuestion_2')[0].children.length; elem++) {
        document.getElementsByClassName('classFlexForQuestion_2')[0].children[elem].classList.remove('boxForDebbug')
        
    }



    arraForOpacity.forEach((currentElement) => {
        
        switch (currentElement) {
            case 'A':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[0].classList.add('boxForDebbug')
                break;

            case 'B':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[1].classList.add('boxForDebbug')
                break;

            case 'F':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[2].classList.add('boxForDebbug')
                break;

            case 'E':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[3].classList.add('boxForDebbug')
                break;

            case 'D':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[4].classList.add('boxForDebbug')
                break;

            case 'M':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[5].classList.add('boxForDebbug')
                break;  

            case 'L':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[6].classList.add('boxForDebbug')
                break;

            case 'C':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[7].classList.add('boxForDebbug')
                break;

            case 'K':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[8].classList.add('boxForDebbug')
                break;

            case 'J':
                document.getElementsByClassName('classFlexForQuestion_2')[0].children[9].classList.add('boxForDebbug')
                break;
        }
    })

}


