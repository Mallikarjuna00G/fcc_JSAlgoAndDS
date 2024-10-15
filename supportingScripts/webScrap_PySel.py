from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-images')

driver = webdriver.Chrome(options=options)

url = "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-introductory-javascript-by-building-a-pyramid-generator/step-1"

driver.get(url)
element = ""
foundItems = ""

try:
    element = WebDriverWait(driver, 40).until(EC.presence_of_element_located((By.ID, 'description')))
    foundItems = element.get_attribute('innerHTML')
finally:
    driver.quit()

if element:
    # print(element)
    # print(foundItems)
    soup = BeautifulSoup(foundItems, 'html.parser')

    textContent = ""
    entries = soup.findAll('p')

    for entry in entries:
        print(entry.text)
    # print(entries)