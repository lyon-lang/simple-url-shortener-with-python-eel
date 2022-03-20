import pyshorteners
import eel

eel.init('web')

s = pyshorteners.Shortener()

@eel.expose
def generate_url(data):
    output = s.tinyurl.short(data)
    return output

eel.start('index.html',size=(1000,600))