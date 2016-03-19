//普通递归
function fibonacci(n){
	if (n==0) return 0;
	else if(n==1) return 1;
	else return fibonacci(n-1)+fibonacci(n-2);
}

//尾递归
function fibonacci_tail(n,ret1,ret2){
	if (n==0)return ret1;
	else return fibonacci_tail(n-1,ret2,ret1+ret2);
}

//迭代（循环)
function fibonacci_cycle(n){
	var fib;
	var f0=0;
	var f1=1;
	var fib;
	if(n==0) return f0;
	else if(n==1) return f1;
	else {
		for(i=2;i<=n;i++)
		{
			fib=f0+f1;
			f0=f1;
			f1=fib;
		}
		return fib;
	}
}


//尾递归优化
//ref:https://www.zhihu.com/question/29717057