// NUMBER OF PEOPLE CHECK
function number_of_people_Check(){
    let input = document.getElementById('number-of-people_input').value;
    // console.log(input)
    removeWarning()
    if (input == '0') {
        console.log(input)
        addWarning()
        return(false)
    }
    else{
        return(true)
    }
}


    function removeWarning(){
        let element = document.getElementById('number-of-people-input-container');
        element.classList.remove('orange-outline-show')
        element.classList.add('transparent-outline-show')


        let elementB = document.getElementById('cant-be-zero-warning');
        elementB.classList.add('hide')
    }

    function addWarning(){
        let element = document.getElementById('number-of-people-input-container');
        element.classList.add('orange-outline-show')
        element.classList.remove('transparent-outline-show')

        let elementB = document.getElementById('cant-be-zero-warning');
        elementB.classList.remove('hide')
    }

    
// TIP & TOTAL CALCULATE
function TipAmount_(){
    // console.log('person')


    let bill = document.getElementById('bill_input').value;


    let people = document.getElementById('number-of-people_input').value;

    let tipRateIn = document.getElementsByClassName('selected-tip');
    let tipRate = tipRateIn[0].value



    // console.log('b: ' , tipRate.value)
    // console.log(tipRate * 5)

    var tipPerPerson = bill * tipRate / 100 / people;
    var totalPerPerson = tipPerPerson + (bill/people);
                    console.log('Tip: ' ,  tipPerPerson )
                    console.log('total: ' ,  totalPerPerson )
    
    document.getElementById('tipAmount_person').innerHTML = tipPerPerson.toFixed(2)
    document.getElementById('tipAmount_Total').innerHTML = totalPerPerson.toFixed(2)
}








                                        // CALCULATE 
                                                        // Tip Amount per person: Bill * tip/100 / people
                                                        //Total: (Bill + Bill * tip/100) / people
                                        function calculate (){

                                            

                                            number_of_people_Check()
                                            if (number_of_people_Check()){ // if number of people != 0

                                                TipAmount_();

                                            }
                                        }




// TIP AMOUNT CHANGE

function tipAmount(A){
    console.log('input: ' , A)

    let buttons = document.getElementsByClassName('tip-option');



    for (let i = 0; i < 6; i++){
        buttons[i].classList.remove('selected-tip')
        buttons[i].classList.add('notSelected-tip');
    }

    buttons[A].classList.remove('notSelected-tip')
    buttons[A].classList.add('selected-tip')

    
    // console.log(buttons)



    calculate();
}


function reset(){
    //Bill = 42
    document.getElementById('bill_input').value = '42';

    //tip = 5%
    let buttons = document.getElementsByClassName('tip-option');
    for (let i = 0; i < 6; i++){
        buttons[i].classList.remove('selected-tip')
        buttons[i].classList.add('notSelected-tip');
    }
    buttons[0].classList.add('selected-tip')


    //people = 2
    document.getElementById('number-of-people_input').value = '2'


    calculate()
}