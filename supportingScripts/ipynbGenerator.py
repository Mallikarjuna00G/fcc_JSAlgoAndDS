import nbformat
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-images')

def webScrapJob(stepNo):
    elements = []
    driver = webdriver.Chrome(options=options)

    url = f"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-introductory-javascript-by-building-a-pyramid-generator/step-{stepNo}"  # UPDATE HERE

    driver.get(url)
    element = ""
    foundItems = ""

    try:
        print(f"Trying to scrape step{stepNo}")
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
            # print(entry.text)
            # elements.append(entry.text)
            elements.append(entry)
        # print(entries)
        print(f"Successfully scraped step{stepNo}")
        return elements

jnb = nbformat.NotebookNode()

jnb['nbformat'] = 4
jnb['nbformat_minor'] = 2

jnb['metadata'] = {
    "kernelspec": {
        "display_name": "Python 3",
        "language": "python",
        "name": "python3"
    },
    "language_info": {
        "codemirror_mode": {
            "name": "ipython",
            "version": 3
        },
        "file_extension": ".py",
        "mimetype": "text/x-python",
        "name": "python",
        "nbconvert_exporter": "python",
        "pygments_lexer": "ipython3",
        "version": "3.11.2"
    }
}

jnb['cells'] = []


cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=["from IPython.display import display, Markdown, HTML, Image"])
jnb['cells'].append(cell)

projectIntro = """JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Pyramid Generator. You'll learn how to work with arrays, strings, functions, loops, if/else statements, and more."""  # UPDATE HERE (Copy paste from freeCodeCamp website course page)
projectTitle = "# " + "Learn Introductory JavaScript by Building a Pyramid Generator"  # UPDATE HERE
projectName = "pyramidGenerator"  # UPDATE HERE
number_of_steps = 118  # UPDATE HERE
projectPath = "../" + projectName

cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{projectTitle}"])
jnb['cells'].append(cell)

cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{projectIntro}"])
jnb['cells'].append(cell)


print(f"============{projectName}============")

for i in range(1, number_of_steps + 1):
    # START: Webscraping
    elements = []
    elements = webScrapJob(i)
    # END: Webscraping

    srcFileName = f"{projectName}_step{i}.js"

    Path(f"{projectPath}/{srcFileName}").touch()

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"## Step{i}:", "\n"])
    jnb['cells'].append(cell)
    for element in elements:
        cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{element}"])
        jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=["\n", "\n", f"**Source file link:** [{srcFileName}](./{srcFileName})", "\n", "\n"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=["code = \"\"\n", f"fileName = \"{srcFileName}\"\n", "\n", "with open(fileName, \"r\") as file:", "\tcode = file.read()", "\n", "display(Markdown(f\"\"\"```js\n{code}\n```\"\"\"))"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=[f"!node {srcFileName}"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"### Execution logs: ", "\n"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"---", "\n"])
    jnb['cells'].append(cell)



fname = f"{projectPath}/{projectName}.ipynb"

with open(fname, 'w') as f:
    nbformat.write(jnb, f)

print(f"============{projectName}============")
print('DONE: ipynb generation script')