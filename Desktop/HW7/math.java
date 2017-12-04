package utils;

public class Math {

	public static int factorial(int n) {
		if(n <= 1) {
			return 1;		}
		return n * factorial(n - 1);
		
	}
	public static int factorialLoop(int n) {
		{
			int result = 1;
			for (int i = n; i >= 1; i--) {
				result *= i;
			}
			return result;
		}
		}
		
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		
		Math object=new Math();
		System.out.print(object.factorial(5)+":"+object.factorialLoop(5));
		
		
	}
}
