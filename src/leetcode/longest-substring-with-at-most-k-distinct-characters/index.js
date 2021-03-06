/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const counter = new Counter();
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nDistincts > k) {
      counter.delete(s[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.freq = {};
    this.nDistincts = 0;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    if (this.freq[c] === 1) {
      this.nDistincts += 1;
    }
  }

  delete(c) {
    this.freq[c] -= 1;
    if (this.freq[c] === 0) {
      this.nDistincts -= 1;
    }
  }
}
