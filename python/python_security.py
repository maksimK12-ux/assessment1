def check_username(i):
    u = True
    if len(i) > 10:
        u = False
        print("Username must be under 10 characters")
    if i.isalnum() == False:
        print('Username can only be letters or numbers')
        u = False
    if '<' in i or '>' in i:
        print('Username cannot have < or >')
        u = False 
    if u == False:
        print("Username check failed")
    else:
        print("Username accepted, check passed")

check_username("ilovesoftwareengineering") # Checking if username is more than 10 characters
check_username("ruru@67") # Checking if username is alphanumeric
check_username("i<3dogs") # Checking if username can have < or >
check_username("") # Checks if username can be blank
check_username("mango67") # Checks correct username
