function joinWithComma(var1, var2) {
  if (var1 && var2) {
    return var1 + "," + var2;
  } else {
    return var1 || var2 || "";
  }
}
