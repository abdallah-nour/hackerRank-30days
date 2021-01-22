class Calculator {
  power(n, p) {
    // return n+" "+p;
    if (n < 0 || p < 0) {
      return ("n and p should be non-negative");
    }
    return Math.pow(n, p);
  }
}
