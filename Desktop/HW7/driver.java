//import classes

import animals.Puppy;
import utils.Math;
import utils.ArrayUtils;



//get name

 public class Driver {	
 public static void main(String [] args){
	 
        Puppy p1 = new Puppy("Joey");
        Puppy p2 = new Puppy("Chandler");
        Puppy p3 = new Puppy("Ross");
    
        System.out.println(Joey.getName());
        System.out.println(Chandler.getName());
        System.out.println(Ross.getName());
	}

 
//stringifyArray
 
int[] arrays = {9, 20, 3, 44, 88, 300};
ArrayUtils.reverse(arrays);
	System.out.println(ArrayUtils.stringifyArray(arrays));

//factorial

double n = 15.4;
	System.out.println(Math.factorial((int)n));
}
}