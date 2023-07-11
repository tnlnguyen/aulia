## ❯ Getting Started

I designed this architecture so that it can be scaled easily.

Swagger on local : http://localhost:5001/swagger => username: admin  password: 1234

I used AWS S3 to store the file which user uploaded.
I also developed authentication service to secure the APIs, so that it can be used with authorized user.

Deployment notes:
	+ Frontend already deployed to AWS S3: http://aulia-web.s3-website-us-east-1.amazonaws.com/
	+ Backend deployed to AWS EC2: http://ec2-35-172-200-90.compute-1.amazonaws.com:5001

### Step 1: Set up the Development Environment

```bash
npm install --global yarn
```

### Step 2: Create Environment Variables

```bash
npm install or yarn install
```
### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

```bash
npm start dev or yarn dev
```
