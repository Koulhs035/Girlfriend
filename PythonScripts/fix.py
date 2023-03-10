
#This is script is used to put the reversed class to the message_8.html file

from bs4 import BeautifulSoup

# read the HTML file with UTF-8 encoding
with open('message_8.html', 'r', encoding='utf-8') as file:
    html = file.read()

# create BeautifulSoup object
soup = BeautifulSoup(html, 'html.parser')

# find all elements with class="noborder"
for elem in soup.find_all(class_='noborder'):
    # add "reversed" to class attribute
    classes = elem.get('class', [])
    classes.append('reversed')
    elem['class'] = ' '.join(classes)

# write the modified HTML back to the file with UTF-8 encoding
with open('messages.html', 'w', encoding='utf-8') as file:
    file.write(str(soup))



print("done")
