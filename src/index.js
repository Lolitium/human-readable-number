module.exports = (number) => {
    let result = '';
    let result2 = '';
    let result3 = '';
    let i = number.toString().length;

    if (i == 1) {
        switch (number) {
            case 0: result = "zero"; break;
            case 1: result = "one"; break;
            case 2: result = "two"; break;
            case 3: result = "three"; break;
            case 4: result = "four"; break;
            case 5: result = "five"; break;
            case 6: result = "six"; break;
            case 7: result = "seven"; break;
            case 8: result = "eight"; break;
            case 9: result = "nine"; break;
        }
        return result;
    }


    else if (i == 2 && number <= 20) {
        
        switch (number) {
            case 10: result = "ten"; break;
            case 11: result = "eleven"; break;
            case 12: result = "twelve"; break;
            case 13: result = "thirteen"; break;
            case 14: result = "fourteen"; break;
            case 15: result = "fifteen"; break;
            case 16: result = "sixteen"; break;
            case 17: result = "seventeen"; break;
            case 18: result = "eighteen"; break;
            case 19: result = "nineteen"; break;
            case 20: result = "twenty"; break;
        }

        return result;
    }


    else if (i == 2 && number > 20) {
        switch (number.toString()[0]) {
            case '2': result = "twenty"; break;
            case '3': result = "thirty"; break;
            case '4': result = "forty"; break;
            case '5': result = "fifty"; break;
            case '6': result = "sixty"; break;
            case '7': result = "seventy"; break;
            case '8': result = "eighty"; break;
            case '9': result = "ninety"; break;
        }
        switch (number.toString()[1]) {
            case '0': break;
            case '1': result2 = " one"; break;
            case '2': result2 = " two"; break;
            case '3': result2 = " three"; break;
            case '4': result2 = " four"; break;
            case '5': result2 = " five"; break;
            case '6': result2 = " six"; break;
            case '7': result2 = " seven"; break;
            case '8': result2 = " eight"; break;
            case '9': result2 = " nine"; break;
        }
        return `${result}${result2}`;
    }


    else if (i == 3) {

        switch (number.toString()[0]) {
            case '1': result = "one"; break;
            case '2': result = "two"; break;
            case '3': result = "three"; break;
            case '4': result = "four"; break;
            case '5': result = "five"; break;
            case '6': result = "six"; break;
            case '7': result = "seven"; break;
            case '8': result = "eight"; break;
            case '9': result = "nine"; break;
        }

        
                    if (number.toString()[1] =='1') 
                    {
                        switch (number.toString()[2]) {
                        case '0': result2 = " ten"; break;
                        case '1': result2 = " eleven"; break;
                        case '2': result2 = " twelve"; break;
                        case '3': result2 = " thirteen"; break;
                        case '4': result2 = " fourteen"; break;
                        case '5': result2 = " fifteen"; break;
                        case '6': result2 = " sixteen"; break;
                        case '7': result2 = " seventeen"; break;
                        case '8': result2 = " eighteen"; break;
                        case '9': result2 = " nineteen"; break; 
                        }
                    return `${result} hundred${result2}`;
                    }

        switch (number.toString()[1]) {
            case '0': result2 = ''; break;
            case '2': result2 = " twenty"; break;
            case '3': result2 = " thirty"; break;
            case '4': result2 = " forty"; break;
            case '5': result2 = " fifty"; break;
            case '6': result2 = " sixty"; break;
            case '7': result2 = " seventy"; break;
            case '8': result2 = " eighty"; break;
            case '9': result2 = " ninety"; break;
        }

        switch (number.toString()[2]) {
            case '0': break;
            case '1': result3 = " one"; break;
            case '2': result3 = " two"; break;
            case '3': result3 = " three"; break;
            case '4': result3 = " four"; break;
            case '5': result3 = " five"; break;
            case '6': result3 = " six"; break;
            case '7': result3 = " seven"; break;
            case '8': result3 = " eight"; break;
            case '9': result3 = " nine"; break;
        }
        return `${result} hundred${result2}${result3}`;
    }
}
