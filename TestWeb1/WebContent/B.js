/**
 * 기본 데이타 타입
 */

var num = 10;


console.log("num : " + num);

console.log("num Type : " + typeof(num));//타입오브 함수

// 동적 타입이다.
num = 3.4;

console.log("num : " + num);

console.log("num Type : " + typeof num );// 타입오브 연산자

num = "Korea";

console.log("num : " + num);

console.log("num Type : " + typeof num );// 타입오브 연산자

num = 3;

/* == : 숫자 비교 / = : 세미 부울린 */
if( null ){ // semy boolean? 0, null, undefined 이면 거짓, 그 외 참
	console.log("num : 참");
}else{
	console.log("num : 거짓");
}
console.log("num : " + num);
console.log("num Type : " + typeof num );// 타입오브 연산자
	
var tot;

console.log("tot : " + tot);

