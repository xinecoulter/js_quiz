//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/

// The first question's tests are written.
// See quiz.js for more details

describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

// Write the next tests yourself!
// See quiz.js for more details
describe('question2', function() {
  it('returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(93)).toBe(true);
  });

  it('returns false if the number is 89 or below', function() {
    expect(quiz.nearHundred(52)).toBe(false);
  });

  it('throws an error if the argument passed is not a number', function() {
    expect(quiz.nearHundred('two')).toThrow(new Error("Please enter a number!"));
  });
});

describe('question3', function() {
  it('removes the character that corresponds to the index from the string', function() {
    expect(quiz.missingChar("kittie", 1)).toEqual("kttie");
  });

  it('throws an error if a string is not entered', function() {
    expect(quiz.missingChar(347, 1)).toThrow(new Error("Please enter a string!"));
  });

});

describe('question4', function() {

  it("removes 'del' from a string if 'del' is present", function() {
    expect(quiz.delDel("abdelcd")).toEqual("abcd");
  });

  it("does not affect the string if 'del' is not present", function() {
    expect(quiz.delDel("xyz")).toEqual("xyz");
  });

});

describe('question5', function() {

});















