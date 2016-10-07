



function pow(a, n) {
	var a;
	var n;
	var result = 1;
	
	if (n > 0){
		for (var i = 1; i <= n; i++) {
			result *= a;
		} 
		return result;
	}  else if (a != 0 & n == 0) {
		result = 1;
		return result;;
		
	} else if (a == 0){
		return "result is not defined";
	} else if (a != 0 & n<0){
		result = (1/ (result *= a));
		return result;;
	} 
}
pow(5,2);




	module.exports.pow=pow;





















