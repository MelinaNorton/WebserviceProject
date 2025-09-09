## Webservice Project

#This endpoint creates a test user to demo the endpoints
<img width="960" height="564" alt="post_user_webservicedemo" src="https://github.com/user-attachments/assets/71f249f7-87db-4f50-a41b-a0052cd38c87" />

## Endpoints Demo
### User Login
Here, the user's login data is sent via the request body, to
```
POST http://localhost:3000/authenticate
```
<img width="960" height="564" alt="endpoint1_login_webservicedemo" src="https://github.com/user-attachments/assets/5266000c-be89-43a3-8c8c-85c69234214b" />

### Apikey Authentication
Here, the user's returned apikey is sent via the request's url, to
```
GET http://localhost:3000/authenticate/${apikey_value}
```
<img width="960" height="564" alt="endpoint3_getloadlist_webservicedemo" src="https://github.com/user-attachments/assets/cda69a76-56d2-4db8-8de3-c02b054b1fdf" />

### Get User's Loads
Here, the user's load list is returned from the user's associated apikey, with the request sent to
```
GET http://localhost:3000/authenticate/apikey_value
```
<img width="960" height="564" alt="endpoint2_authapikey_webservicedemo" src="https://github.com/user-attachments/assets/6c22b30e-adbc-4b53-9047-d4879a82760c" />

