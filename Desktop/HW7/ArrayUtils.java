package utils;

public class ArrayUtils {
 
	public static int[] reverse(int[] n)
	{
		int[] result = new int[n.length];
		for (int i = n.length-1; i >= 0; i--) {
			result[n.length-1 - i] = n[i];
		}
		return result;
	}

	public static String stringifyArray(int[] arrays)
	{
		String outcome = "";
		for (int i = 0; i < arrays.length; i++) {
			outcome =outcome + arrays[i];
			if (i != arrays.length-1) {
				outcome = outcome + ", ";
			}
		}
		return outcome;
	}