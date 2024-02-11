if ! command -v npm &> /dev/null
then
    echo "npm not found, please install Node Package Manager"
    exit 1
fi

if ! command -v ng &> /dev/null
then
    echo "ng not found, installing Angular CLI"
    npm install -g @angular/cli
fi

npm install
npm run start