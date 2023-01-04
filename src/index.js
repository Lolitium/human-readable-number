module.exports = (number) => {
    let strHighBit='';
    let strSecBit ='';
    let strFirstBit='';

        let highBit = Math.floor (number/100);
        switch (highBit) {
            //case 0 : strHighBit=''; break;
            case 1 : strHighBit='one hundred'; break;
            case 2 : strHighBit='two hundred'; break;
            case 3 : strHighBit='three hundred'; break;
            case 4 : strHighBit='four hundred'; break;
            case 5 : strHighBit='five hundred'; break;
            case 6 : strHighBit='six hundred'; break;
            case 7 : strHighBit='seven hundred'; break;
            case 8 : strHighBit='eight hundred'; break;
            case 9 : strHighBit='nine hundred'; break;
        }

        if (number%100==0 && number/100==0) return 'zero';
        if (number%100==0) return strHighBit;


        if (number%100 >= 10 && number%100 < 20) {
            switch (number%100) {
                case 10 : strSecBit=' ten'; break;
                case 11 : strSecBit=' eleven'; break;
                case 12 : strSecBit=' twelve'; break;
                case 13 : strSecBit=' thirteen'; break;
                case 14 : strSecBit=' fourteen'; break;
                case 15 : strSecBit=' fifteen'; break;
                case 16 : strSecBit=' sixteen'; break;
                case 17 : strSecBit=' seventeen'; break;
                case 18 : strSecBit=' eighteen'; break;
                case 19 : strSecBit=' nineteen'; break;
            }
            return `${strHighBit}${strSecBit}`.trim();
        }


        let secBit = Math.floor((number%100)/10);
        switch (secBit) {
            //case 0 : strSecBit=''; break;
            //case 1 : strSecBit='one hundred'; break;
            case 2 : strSecBit=' twenty'; break;
            case 3 : strSecBit=' thirty'; break;
            case 4 : strSecBit=' forty'; break;
            case 5 : strSecBit=' fifty'; break;
            case 6 : strSecBit=' sixty'; break;
            case 7 : strSecBit=' seventy'; break;
            case 8 : strSecBit=' eighty'; break;
            case 9 : strSecBit=' ninety'; break;
        }

        if ((number%100)%10==0) return `${strHighBit}${strSecBit}`.trim();

        let firstBit = Math.floor((number%100)%10);

        switch (firstBit) {
            case 1 : strFirstBit=' one'; break;
            case 2 : strFirstBit=' two'; break;
            case 3 : strFirstBit=' three'; break;
            case 4 : strFirstBit=' four'; break;
            case 5 : strFirstBit=' five'; break;
            case 6 : strFirstBit=' six'; break;
            case 7 : strFirstBit=' seven'; break;
            case 8 : strFirstBit=' eight'; break;
            case 9 : strFirstBit=' nine'; break;
        }

        return `${strHighBit}${strSecBit}${strFirstBit}`.trim();
}