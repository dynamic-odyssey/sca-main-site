package mail_handling

import "testing"

func TestReplaceValuesCorrectly(t *testing.T) {
	testString := "Hello {name}, you are {age} years old"
	testMap := map[string]string{
		"{name}": "john",
		"{age}":  "10",
	}

	got := ReplacePlaceholders(testString, testMap)
	want := "Hello john, you are 10 years old"

	if got != want {
		t.Errorf("got %s, wanted %s", got, want)
	}
}
