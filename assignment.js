// https://github.com/SadeeMsr/Basic-JavaScript

//1.Function to convert units for distance:

function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        return "input positive value because distance can't be negetive.";
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}




//2.function to calculate buying budget:

function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && watch % 1 == 0)  //---> this condition in this code avoids the float and negetive inputs for the items.
    {
        var totalWatchPrice = watch * 50;
    }
    else 
    {
        totalWatchPrice = 0;
        const noticeForWatch = "Your input for Watch is invalid. Watch price excluded";
        console.log(noticeForWatch);
    }

    if (phone >= 0 && phone % 1 == 0) 
    {
        var totalPhonePrice = phone * 100;
    }
    else 
    {
        totalPhonePrice = 0;
        const noticeForPhone = "Your input for Phone is invalid. Phone price excluded";
        console.log(noticeForPhone);
    }

    if (laptop >= 0 && laptop % 1 == 0) 
    {
        var totalLaptopPrice = laptop * 500;
    }
    else 
    {
        totalLaptopPrice = 0;
        const noticeForLaptop = "Your input for Laptop is invalid.Laptop price excluded";
        console.log(noticeForLaptop);
    }

    var sumOfPrices = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return sumOfPrices;
}




//3. function to sum the total cost of a hotel:

function hotelCost(day) 
{
    if(day >= 0 && day % 1 == 0) //---> this condition avoids the float (because hotel rules)and negetive inputs. 
    {
        var price=0;

        if (day > 0 && day < 11) 
        {
            var price = day * 100;
            return price;
        }
        else if (day > 0 && day < 21) 
        {
            var firstTenDaysPrice = 10 * 100;
            var remainingDays = day - 10;
            var secondTenDaysPrice = remainingDays * 80;
            price = firstTenDaysPrice + secondTenDaysPrice;
            return price;
        }
        else if (day > 20) 
        {
            var firstTenDaysPrice = 10 * 100;
            var secondTenDaysPrice = 10 * 80;
            var remainingDays = day - 20;
            var remainingDaysPrice = remainingDays * 50;
            price = firstTenDaysPrice + secondTenDaysPrice + remainingDaysPrice;
            return price;
        }
    }
    else
    {
        return "Your input is invalid";
    }
   
}




//4. function to find friends' long name:

function megaFriend(friends)
{    
    var longWordFriendLength = 0;

    //loop to extract the wanted names length
    for(var i=0;i<friends.length;i++) 
    {    
        var temp = friends[i].length;

        if(temp > longWordFriendLength)
        {
            longWordFriendLength = temp;
        }
    }

    //loop to find the wanted name
    for(var j=friends.length-1; j>=0; j--)  
    {
        if(longWordFriendLength==friends[j].length)
        {
            var frinedName=friends[j];
        }
    }
    return frinedName;
}



