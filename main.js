$(function(){
    // создаем два массива для чисел и для операций
    let operation =[];
    let numbers =[];
    let prom = [];
    //заполняем дисплей калькулятора
    $('.show').on('click', function(){
        let data = $(this).val();
        //console.log(data);
        $('#display').append(data);
    });

    
    //пушим в массив с операциями
    $('.degree').on('click', function(){
        operation.push('deg');
        //console.log(operation);
    })
    
    //пушим в массив с операциями
    $('.multi').on('click', function(){
        operation.push('multi');
        //console.log(operation);
    })

    //пушим в массив с операциями
    $('.subt').on('click', function(){
        operation.push('subt');
        //console.log(operation);
    })

    //пушим в массив с операциями
    $('.sum').on('click', function(){
        operation.push('sum');
        //console.log(operation);
    })

    //выводим результат
    $('.result').on('click', function(){
        let count =0;
        //заполнили массив числами с дисплея
        numbers = $('#display').text().split(/\D/);
        // удаляю 22 первых элемента в массиве которые не ясно от куда берутся
        numbers.splice(0, 22);
        console.log(numbers);
        console.log(operation)
        //-----------------------------------------------------------------------------------
        for(let i=0; i<operation.length; i++){
            if(operation[i] === 'multi'){
                if(operation[i-1] !== 'sum' && operation[i-1] !== 'subt') {
                    numbers.splice(i, 2, numbers[i]*numbers[i+1]);
                    operation.splice(i, 1);
                    i--
                } else {
                    numbers.splice(i, 2, numbers[i]*numbers[i+1]);
                    operation.splice(i, 1);
                    i--
                }   
            }
            if(operation[i] === 'deg'){
                if(operation[i-1] !== 'sum' && operation[i-1] !== 'subt') {
                    numbers.splice(i, 2, numbers[i]/numbers[i+1]);
                    operation.splice(i, 1);
                    i--
                } else {
                    numbers.splice(i, 2, numbers[i]/numbers[i+1]);
                    operation.splice(i, 1);
                    i--
                }
            }
        }

        let result = 0;

        for (let i = 0; i < operation.length; i++) {
            if (count === 0) {
                if (operation[i] === 'sum'){
                    result = (+numbers[i])+(+numbers[i+1]);
                }
                if (operation[i] === 'subt'){
                    result = (+numbers[i]) - (+numbers[i+1]);
                }
            }

            if (count !== 0) {
                if (operation[i] === 'sum'){
                    result = (+result)+(+numbers[i+1]);
                }
                if (operation[i] === 'subt'){
                    result = (+result) - (+numbers[i+1]);
                }
            }
            count++
        }
        if (numbers.length === 1) {
            result = numbers[0]
        }
        console.log(numbers);
        console.log(operation)
        console.log(result)
        $('#display').append('='+result);
    })
})