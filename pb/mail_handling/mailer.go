package mail_handling

import (
	"fmt"
	"net/mail"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/mailer"
)

func sendMail(app *pocketbase.PocketBase, e *core.RecordCreateEvent, messageType EMAIL_TEMPLATE, to string, subject string) error {
	templatePath := GetEmailTemplatePath(messageType)
	template := ReadFileAsString(templatePath)
	replacementValues, err := GetReplacementValues(messageType, e)
	if err != nil {
		fmt.Print(err.Error())
		return err
	}
	messageHtml := ReplacePlaceholders(template, replacementValues)

	message := &mailer.Message{
		From: mail.Address{
			Address: app.Settings().Meta.SenderAddress,
			Name:    app.Settings().Meta.SenderName,
		},
		To:      []mail.Address{{Address: to}},
		Subject: subject,
		HTML:    messageHtml,
	}

	return app.NewMailClient().Send(message)
}

func OnMessageFromClientReceived(app *pocketbase.PocketBase, e *core.RecordCreateEvent) error {

	fmt.Print("here!")
	fmt.Print(e.Record.TableName())

	// send message to support email address for staff to handle
	messageType := CONTACT_REQUEST
	subject := ""

	switch e.Record.TableName() {
	case "contact_us_messages":
		messageType = CONTACT_REQUEST
		subject = "Contact Request"
	case "parent_committee":
		messageType = PARENT_COMMITTEE
		subject = "Parent Committee Request"
	default:
		return nil
	}

	err := sendMail(app, e, messageType, "school.office@swakopca.com", subject)
	if err != nil {
		fmt.Print(err.Error())
		return err
	}

	// send message to client to confirm receipt of their message
	messageType = THANKS_FOR_CONTACTING
	subject = "Thank you for contacting us!"

	return sendMail(app, e, messageType, e.Record.Get("email").(string), subject)
}
