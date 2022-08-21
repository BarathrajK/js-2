let isPrme;
const primes = [1, 2];
num = 300;
for (i=3;i<=num;i=i+2) {
  isPrimeNumber = true;
	for (j=1;j < primes.length;j ++) {
  	if(i % primes[j] == 0){
    	isPrimeNumber = false;8
      break;
    }
  }
  if(isPrimeNumber==true) {
  	primes[primes.length] = i
  }
}
console.log(primes)