# AWS serverless lamda 

## Install boilerplate serverless
```
$ npm install -g serverless 
```

## Create template
```
$ sls create -t aws-nodejs
```
		
## Create IAM for lamda function
		
## Configuration credential of IAM for rankly-lamda
```
$ sls config credentials --provider aws --key AKIAVHVMV3MYUL3THBDG --secret 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
```

## Check .aws local
```
$ cd ~/.aws && less credentials
```
			
## Deploy
```
$ sls deploy
```
* Link result - https://iuygbdnr81.execute-api.us-east-1.amazonaws.com/prod/rank?rank=4
			
# #Docs:
```
https://serverless.com/framework/docs/providers/aws/guide/iam/
```
