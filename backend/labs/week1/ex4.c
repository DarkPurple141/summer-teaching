
char *numToDay(int n){
    assert(0 <= n && n <= 6);
    char *day;
    if (n == 0) {
	     day = "Sun";
    }
    else if (n == 1) {
	     day = "Mon";
    }
    else if (n == 2) {
	     day = "Tue";
    }
    else if (n == 3) {
	     day = "Wed";
    }
    else if (n == 4) {
	     day = "Thu";
    }
    else if (n == 5) {
	     day = "Fri";
    }
    else if (n == 6) {
	     day = "Sat";
    }
    return  day;
}

// Pre:
// - a[] is a valid pointer to the start of an array of ints
// - n is a positive int indicating how many elements in a[]
// Post:
// - return value = ∀ i ∈ {0..n-2} ( a[i] ≤ a[i+1] )
bool isSorted(int *a, int n){
	...
}
