


        const circleRange = document.querySelector('.circle-range')	
        const hoverItem = document.getElementsByClassName('roundForsectionValuesScroll_2')[0]
        const hoverItem_2 = document.getElementsByClassName('rangePnInfo_2')[0]
        let isDragging;
        let isDragging_2;
        let maxinValue = true;
        let num = 0
        let resultOniput = true
        var structAddredStick = false;
        let maxValueBottom = 377;
        var heightForStick = 408


        var valueMaxPosY = 0;



        document.getElementsByClassName('SectionValuestextcolor2_1')[0].oninput = function() {
            editProductionResult(fullTip);
        };

        document.getElementsByClassName('sectionValuetextinputValue')[0].oninput = function() {
            editProductionResult(fullTip);
        };


        function editProductionResult(fullTipI){

            

            var dn = document.getElementsByClassName('SectionValuestextcolor2_1')[0].value
            var pn = document.getElementsByClassName('sectionValuetextinputValue')[0].value
            var editHtmlREsult = true

           for (let i = 0; i < fullTip.length; i++) {


            if((fullTip[i].DN == dn) &&(pn <= fullTip[i].maxPN) && (pn >= fullTip[i].minPN)){
                editHtmlREsult = false
            }
           }

           if(editHtmlREsult){
            document.getElementsByClassName('resultValuePNDN')[0].classList.add('flexDNPNN')
           }else{
            document.getElementsByClassName('resultValuePNDN')[0].classList.remove('flexDNPNN')
           }




           if((editHtmlREsult) && (structAddredStick)){
            document.getElementsByClassName('stickDN')[0].classList.add('radiusCircleREd')

           }else{
            document.getElementsByClassName('stickDN')[0].classList.remove('radiusCircleREd')
           }

           if(itemForAPrivarka[0]){
               console.log(pn)



               
            if(pn <= 6 ){
                document.getElementsByClassName('stickDN')[0].classList.remove('radiusCircleREd')
                document.getElementsByClassName('resultValuePNDN')[0].classList.remove('flexDNPNN')
            }else{
                document.getElementsByClassName('stickDN')[0].classList.add('radiusCircleREd')
                document.getElementsByClassName('resultValuePNDN')[0].classList.add('flexDNPNN')
            }
        }



        }
        


        hoverItem_2.addEventListener('mousedown',(e)=>{


            isDragging_2 = true; 

            if(maxinValue){
                maxValue = e.pageY
                maxinValue = false;
            }
            
            })
        document.addEventListener('mouseup',()=>{isDragging_2 = false})

        hoverItem.addEventListener('mousedown',()=>{
            isDragging = true;  

                window.addEventListener('mousemove',e=>{
                    valueMaxPosY = e.pageY

                    if(e.pageY != undefined){

                }
                })

          
        })
        document.addEventListener('mouseup',()=>{isDragging = false})

        let lastPageY = 0
        let valuesPageY = 0

        let resultYRaznost = 0
        let testResult = 0

            // Обработка введение в dn в круге
        document.getElementsByClassName('SectionValuestextcolor2')[0].oninput = function() {
            
            for (let i = 0; i < fullTip.length; i++) {
                if(this.value == fullTip[i].DN){
                    resultOniput = false
                }
            }
            if(resultOniput){
                document.getElementsByClassName('spanBlockMM')[0].classList.add('spanBlockMMMM')
                document.getElementsByClassName('outRound')[0].classList.add('radiusCircleREd')
                 
            }else{
                document.getElementsByClassName('spanBlockMM')[0].classList.remove('spanBlockMMMM')
                document.getElementsByClassName('outRound')[0].classList.remove('radiusCircleREd')
                document.getElementsByClassName('SectionValuestextcolor2_1')[0].value = this.value

                document.getElementById('PnREsult').value = this.value

            }
            resultOniput = true
          };

        window.addEventListener('mousemove',e=>{
            const slider = document.querySelector('.slider')
            const info = document.getElementsByClassName('SectionValuestextcolor2')[0]
            const box = circleRange.getBoundingClientRect()
            const {atan2, PI, round} = Math
            let angle 
            let centerX
            let centerY
            let deltaX
            let deltaY
            let posX
            let posY

// движение ползунка stick
            if((isDragging_2) && (maxValue < e.pageY)){
                if(lastPageY > e.pageY){
                    if(valuesPageY > -1){
                        resultYRaznost = e.pageY-lastPageY
                        if(maxValueBottom > testResult){
                            document.getElementsByClassName('rangePnInfo')[0].setAttribute('style', 'transform: translate(0px, '+ testResult +'px);')
                        }
                        if(pNnum[Math.round((testResult/(heightForStick/pNnum.length)))] != undefined){
                            document.getElementsByClassName('sectionValuetextinputValue')[0].value =  pNnum[Math.round((testResult/(heightForStick/pNnum.length)))]


                            document.getElementById('Pn_2REsult').value =  pNnum[Math.round((testResult/(heightForStick/pNnum.length)))]
                                // проверка есть ли такой фланец
                        editProductionResult();
                        }
                        
                        testResult = testResult+resultYRaznost  
 
                    }   
                }else if(lastPageY < e.pageY){
                    if(num == 0){
                        num++
                    }else{
                        resultYRaznost = e.pageY-lastPageY
                    }

                    if(maxValueBottom > testResult){

            

                        document.getElementsByClassName('rangePnInfo')[0].setAttribute('style', 'transform: translate(0px, '+ testResult +'px);')




                        
                    }
                    if(pNnum[Math.round((testResult/(heightForStick/pNnum.length)))] != undefined){
                        document.getElementsByClassName('sectionValuetextinputValue')[0].value =  pNnum[Math.round((testResult/(heightForStick/pNnum.length)))]


                        document.getElementById('Pn_2REsult').value =  pNnum[Math.round((testResult/(heightForStick/pNnum.length)))]
                        
                        // проверка есть ли такой фланец
                        structAddredStick = true;
                        editProductionResult();

                    }
                    testResult = testResult+resultYRaznost

                    
                }
                
                lastPageY = parseInt(e.pageY)
            }
// движение ползунка circle


            if(isDragging) {
                editProductionResult()
                centerX = (circleRange.offsetWidth / 2) + box.left
                centerY = (circleRange.offsetHeight / 2) + 400
                posX = e.pageX
                posY = e.pageY - 1292
                deltaY = centerY - posY
                deltaX = centerX - posX



                angle = atan2(deltaY, deltaX) * (180 / PI) 
                angle -= 90
                if(angle < 0)
                    angle += 360
                angle = round(angle)
                slider.setAttribute('style', 'transform: rotate('+ angle +'deg) translateX(-192px);')
                var result = angle/ (radRound/fullTip.length) 

                if(fullTip[result] != undefined){
     
                    info.value = fullTip[result].DN
                    document.getElementsByClassName('SectionValuestextcolor2_1')[0].value = fullTip[result].DN
                    document.getElementsByClassName('spanBlockMM')[0].classList.remove('spanBlockMMMM')
                    document.getElementById('PnREsult').value = fullTip[result].DN

                       // проверка есть ли такой фланец
                       editProductionResult();
                       document.getElementsByClassName('outRound')[0].classList.remove('radiusCircleREd')
                        //    проверка если это приварка A




                }
                
                
            }
        })



