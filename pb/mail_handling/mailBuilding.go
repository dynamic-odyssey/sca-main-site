package mail_handling

import (
	"errors"
	"fmt"
	"io/ioutil"
	"strings"

	"github.com/pocketbase/pocketbase/core"
)

type EMAIL_TEMPLATE int

const (
	QUOTE_REQUEST EMAIL_TEMPLATE = iota
	CONTACT_REQUEST
	THANKS_FOR_CONTACTING
)

func GetEmailTemplatePath(template EMAIL_TEMPLATE) string {
	switch template {
	case CONTACT_REQUEST:
		return "email-templates/contactRequest.html"
	case THANKS_FOR_CONTACTING:
		return "email-templates/thanksForContactingUs.html"
	default:
		return ""
	}
}

func ReadFileAsString(path string) string {
	content, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		return ""
	}

	fileContent := string(content)
	return fileContent
}

func ReplacePlaceholders(template string, placeholders map[string]string) string {
	for key, value := range placeholders {
		template = strings.ReplaceAll(template, key, value)
	}

	return template
}

func GetReplacementValues(templateType EMAIL_TEMPLATE, e *core.RecordCreateEvent) (map[string]string, error) {
	switch templateType {
	case CONTACT_REQUEST:
		return map[string]string{
			"{name}":    e.Record.GetString("name"),
			"{email}":   e.Record.GetString("email"),
			"{subject}": e.Record.GetString("subject"),
			"{message}": e.Record.GetString("message"),
		}, nil
	case THANKS_FOR_CONTACTING:
		return map[string]string{
			"{name}": e.Record.GetString("name"),
		}, nil
	default:
		return nil, errors.New("invalid template type")
	}
}
