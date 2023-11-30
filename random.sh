APP_ENV="production"
if [ $APP_ENV == "development" ]
then
	echo "Running in development mode"
else
	echo "Running in production mode"
fi
