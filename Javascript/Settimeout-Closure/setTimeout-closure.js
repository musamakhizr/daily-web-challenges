function print()
{
    //fix the issue with a single change in the code
    for(var i =0; i<10; i++)
    {
        setTimeout(function(){
            console.log(i);    
        },1000);
    }
    console.log("Print Stop");
}

print();