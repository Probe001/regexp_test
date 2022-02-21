let str = `
  010-1234-5678
thesecon@gmail.com
  https://www.youtube.com/watch?v=-JhoMGoAfFc
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
  hxyp
  http://localhost:1234
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.match(regexp))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// str = str.replace(regexp, 'BBB')
// console.log(str)
// 실제로 문자열을 바꾸는 것은 아님.

// const regexp = /the/
// console.log(str.match(regexp))

// const regexp = /the/g
// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/the/gi))

console.log(str.match(/\.$/gim))
// . 는 특정한 문자를 검색하는 패턴으로, 명령어로 해석될 가능성이 있다.
// 따라서 앞부분에 \를 붙여 이스케이프 문자를 사용한다.
// 이스케이프 문자: 본래의 기능에서 벗어난 문자 그 자체
// $ : $앞에 있는 단어로 문장이 끝나는 부분을 찾는다.
// m이라는 키워드를 넣으면 줄바꿈한 부분을 인식한다.
// 넣지 않으면 마지막 백틱기호 앞부분만을 문장의 끝부분으로 인식

console.log(str.match(/.$/gim))

// console.log(
//   str.match(/h..p|dog/g) // |: 또는
// )

console.log(str.match(/https?/g))

console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))

console.log(str.match(/\b\w{2,3}\b/g))
// \b : 공백이나 특수문자 등 구분되는 것
// \w : 알파벳이나 숫자

console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9a-z]{1,}/g))

console.log(str.match(/\bf\w{1,}/g))

const h = `   the hello   world      !

`

console.log(
  h.replace(/\s/g, '')
)
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)