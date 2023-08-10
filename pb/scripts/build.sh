# check if /pocketbase/pocketbase file exists
if [ -f "/pocketbase/pocketbase" ]; then
    rm /pocketbase/pocketbase
fi
if [ -f "/pocketbase/email-templates" ]; then
    rm -rf /pocketbase/email-templates
fi

go build -o /pocketbase/pocketbase

# check if status is not successful
if [ $? -ne 0 ]; then
    echo "Build failed"
    exit 1
fi

cp -r ./email-templates /pocketbase/
