function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}


describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})