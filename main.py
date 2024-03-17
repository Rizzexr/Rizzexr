import pyshorteners

url = "http://example.com"
shortener = pyshorteners.Shortener()

short_url = shortener.tinyurl.short(url)
print("Сокращенная ссылка:", short_url)
