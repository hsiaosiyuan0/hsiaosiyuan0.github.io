function test() {
  let k = 0;
  let nelts = 9;
  let path = 0;
  for (k = 0, n = 1 + nelts; n >= 2; k += 1, n = (n / 2) & -1) {
    console.log(n);
    path = (path << 1) | (n & 1);
  }
  console.log(path, path.toString(2), k);
}

test();
