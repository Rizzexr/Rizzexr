import pyshorteners # библиотека


# функция для сокращении ссылок
def shorten_url(url):

    return pyshorteners.Shortener().clckru.short(url)

url = input("Введите URL: ")
print("Сокращенный URL - ", format(shorten_url(url)))