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
    //на данный момент не реализован приоритет операций согласно математическим правилам
    $('.result').on('click', function(){
        let result;
        //заполнили массив числами с дисплея
        numbers = $('#display').text().split(/\D/);
        // удаляю 22 первых элемента в массиве которые не ясно от куда берутся
        numbers.splice(0, 22);
        console.log(numbers);
        console.log(operation)
        //-----------------------------------------------------------------------------------
        // for(let i=0; i<operation.length; i++){
        //     //если это не первый проход цыкла
        //     if(i>0){
        //         switch(operation[i]){
        //             case 'deg':
        //             result = result/Number(numbers[i+1]);
        //             break;
        //             case 'multi':
        //                     result = result*Number(numbers[i+1]);
        //             break;
        //             case 'subt':
        //                 result = result-Number(numbers[i+1]);
        //             break;
        //             case 'sum':
        //                 result = result+Number(numbers[i+1]);
        //             break;  
        //         };
        //     //при первом проходе цыкла
        //     } else {
        //         switch(operation[i]){
        //             case 'deg':
        //             result = Number(numbers[i])/Number(numbers[i+1]);
        //             break;
        //             case 'multi':
        //                     result = Number(numbers[i])*Number(numbers[i+1]);
        //             break;
        //             case 'subt':
        //                 result = Number(numbers[i])-Number(numbers[i+1]);
        //             break;
        //             case 'sum':
        //                 result = Number(numbers[i])+Number(numbers[i+1]);
        //             break;  
        //         };
        //     }
        // }
        // $('#display').append('='+result);
           // console.log(operation)
           //-----------------------------------------------------------------------------------
        
        for(let i=0; i<operation.length; i++){
            if(operation[i] === 'deg'){
                prom.push(numbers[i]/numbers[i+1]);
                
            }
        }
    })
})