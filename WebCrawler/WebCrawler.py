from bs4 import BeautifulSoup
import re
import regex
import requests
import pandas as pd
import random

count = 0

blacklist = ["a", "ante", "bajo", "cabe", "con", "contra", "de", "desde", "en", "entre", "hacia", "hasta", "mediante", "para", "por", "según", "sin", "so", "sobre", "tras", "versus", "vía",
             "y", "e", "ni", "que", "o", "u", "es", "ya",
             "el", "los", "la", "las", "un", "unos", "una", "unas", "lo",
             "ellos", "ellas", "ello", "ella", "él",
             "", " ", "se", "al", "si", "no", "pero", "hay", "fue", "del", "su", "mas", "más", "son",
             "esa", "eso", "esos", "esas", "así", "como", "cómo", "cada",
             "\n"]

def depuraString(lista):
    listaF = []
    blacklist2 = [" ", "\\", "\n", "\t", "\b", "\r", "\f", ":", ",", "^", "º", "!", "?", "¡", "¿", "(", ")", "[", "]", "{", "}", ";", "/", "*", "&", "%", "$", "#", "@", "~", "`", ">", "<", '"', "\'", "|", "-", "_", "+", "=", "«", "»"]
    for i in range(0, len(lista)):
        filtered = ""
        for j in range(0, len(lista[i])):
            if( re.search("^[0-9]$", lista[i][j]) ):
                break
            
            if( re.search("^[a-zàèìòùáéíóúýâêîôûãñõäëïöüÿåæœçðøß]$", lista[i][j]) ):
                filtered += lista[i][j]

            else:
                break
                
        listaF.append(filtered)
    return listaF

"""
WebCrawler
    Funcionalidad: Extrae el texto de direccion http
    Entradas: La direccion de la pagina
    Salidas: El texto de la pagina
"""

def WebCrawler(url, count2):
    if count2 <= 1:
        page = requests.get(url)

        soup = BeautifulSoup(page.content, "html.parser")

        texto = soup.find_all("p")

        diccUrl = soup.find_all("a")

        text = list()

        urls = list()

        #Aqui añade a la lista 'texto' los parrafos de texto de la pagina
        for i in texto:
            parrafo = i.text
            palabras = parrafo.split(" ")

            for palabra in palabras:
                text += palabra.split(".")

            for j in range(0, len(text)):
                text[j] = text[j].lower()

            text = depuraString(text)

            text2 = [word for word in text if word not in blacklist] 

        #Aqui se crea una lista de direcciones para buscar 
        for i in diccUrl:
            try:
                if re.match(r"^/wiki/", i.get("href")) and i.get("href") is not None:
                    if i.get("href").find(".") == -1 and i.get("href").find(":") == -1 and i.get("href").find("#") == -1:
                        urls.append(i.get("href"))
            except:
                continue

        
        for i in urls:
            WebCrawler("https://es.wikipedia.org" + i, count2+1)

        print(text2)

        

WebCrawler("https://es.wikipedia.org/wiki/Quercus_laurina", count)
