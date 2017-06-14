# PublishDemo


Introduction:
--------------
PublishDemo is based on twitter api which create random numbers for people.<br />

Installation:
------------------
> npm install twit <br />
> npm install dotenv

- git clone https://github.com/farasatkhan/Publish-Demo.git

Usage:
------------------
- Login to your Twitter account<br />
- Go to this [URL](https://apps.twitter.com/) or Search Twitter apps Managment<br />
- Click on Create New App<br />
- Fill the boxes<br />
- Go to Application Setting and Grab your Consumer Key and Consumer Secret. <br />
- Scroll down the Page and Click on Create Access Token. It will generate access token then simple Grab your Access Token and Access token secret.<br />
- create .env file in the directory.<br />

- Open .env and enter the keys like this:
  
  ```
	CONSUMER_KEY        =	YourConsumerKey	
	CONSUMER_SECRET     =	YourConsumerSecret
	ACCESS_TOKEN        =	YourAccessToken
	ACCESS_TOKEN_SECRET =	YourAccessTokenSecret
  ```

- To Run the app in the background you have to install [Git-Download](https://git-scm.com/downloads) and [The Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Open the url and deploy your repository with Git
- [Deploying with Git](https://devcenter.heroku.com/articles/git)
- Open heroku in your favorite browser and open up resources.
- Close the web app and start worker app
- After the deployment, Open cmd and type the following.

```
	heroku config:set CONSUMER_KEY        = YourConsumerKey 
	heroku config:set CONSUMER_SECRET     = YourConsumerSecret 
	heroku config:set ACCESS_TOKEN        = YourAccessToken 
	heroku config:set ACCESS_TOKEN_SECRET = YourAccessTokenSecret
```

Authors:
------------------
  Farasatkhan farasatkahan@gmail.com, Pakistan

License:
------------------

	
```
MIT License

	Copyright (c) 2017 Farasat Khan
	

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

```
