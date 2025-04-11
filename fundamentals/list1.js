// task 1. 7 kyu
// Your task is to remove all duplicate words from a
// string, leaving only single (first) words entries.
function removeDuplicateWords(s) {
  let stringArr = s.split(" ");
  let stringSet = new Set(stringArr);
  return [...stringSet].join(" ");
}
