function primeNumber (num) {
    if(num === 2) {
        return true;
    } else {
        for (i = 2; i < num; i++) {
            if(num % 1 === 0) {
                return false;
                break;
            }

            if(i + 1 === num) {
                return true;
            }
        }
    }
}
