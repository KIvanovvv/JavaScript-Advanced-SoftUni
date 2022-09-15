function evenPosition(nums) {
  let res = " ";
  for (let [i, el] of nums.entries()) {
    if (i % 2 === 0) res += `${el} `;
  }
  console.log(res);
}
evenPosition(["20", "30", "40", "50", "60"]);
